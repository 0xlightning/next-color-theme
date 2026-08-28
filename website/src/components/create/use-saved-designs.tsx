"use client"

import * as React from "react"
import type { DesignSystemConfig } from "@/registry/types"
import { getBaseColor, getStyle, getTheme } from "@/registry"

const STORAGE_KEY = "next-color-theme:saved-designs"

export type SavedDesign = {
  id: string
  name: string
  config: DesignSystemConfig
  createdAt: number
  updatedAt: number
}

/**
 * Saved designs live under their own key, separate from the customizer's
 * `next-color-theme:create-state`, so editing the live theme never disturbs
 * something already saved.
 */
function read(): SavedDesign[] {
  if (typeof window === "undefined") {
    return []
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return []
    }
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) {
      return []
    }
    return parsed.filter(
      (item): item is SavedDesign =>
        Boolean(item) &&
        typeof item === "object" &&
        typeof (item as SavedDesign).id === "string" &&
        typeof (item as SavedDesign).name === "string" &&
        Boolean((item as SavedDesign).config)
    )
  } catch {
    // corrupt or unavailable storage — start from empty rather than throw
    return []
  }
}

function write(designs: SavedDesign[]) {
  if (typeof window === "undefined") {
    return
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(designs))
  } catch {
    // private mode / quota — silently skip, same as the customizer store
  }
}

/**
 * localStorage is an external store, so it is subscribed to rather than
 * copied into component state — that keeps every mounted consumer (the
 * gallery, the header count, the save dialog) in sync after a write, and
 * avoids a setState-in-effect hydration dance.
 */
const EMPTY: SavedDesign[] = []
const listeners = new Set<() => void>()

/** getSnapshot must be referentially stable between renders, so the parsed
 *  array is cached until something invalidates it. */
let snapshot: SavedDesign[] | null = null

function getSnapshot(): SavedDesign[] {
  if (snapshot === null) {
    snapshot = read()
  }
  return snapshot
}

function getServerSnapshot(): SavedDesign[] {
  return EMPTY
}

function subscribe(onChange: () => void): () => void {
  listeners.add(onChange)
  // Another tab writing the same key invalidates our cache too.
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      invalidate()
    }
  }
  window.addEventListener("storage", onStorage)
  return () => {
    listeners.delete(onChange)
    window.removeEventListener("storage", onStorage)
  }
}

function invalidate() {
  snapshot = null
  for (const listener of listeners) {
    listener()
  }
}

function commit(next: SavedDesign[]) {
  write(next)
  invalidate()
}

function newId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID()
  }
  return `design-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

/** "Cyan · Mist · Luma" — a readable default so Enter saves immediately. */
export function suggestName(config: DesignSystemConfig): string {
  return [
    getTheme(config.theme)?.label,
    getBaseColor(config.baseColor)?.label,
    getStyle(config.style)?.label,
  ]
    .filter(Boolean)
    .join(" · ")
}

export function useSavedDesigns() {
  const designs = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  )
  // False during SSR and the hydration render, true once the client store is
  // live — callers use it to avoid flashing an empty state.
  const hydrated = React.useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )

  const save = React.useCallback(
    (name: string, config: DesignSystemConfig) => {
      const now = Date.now()
      const design: SavedDesign = {
        id: newId(),
        name: name.trim() || suggestName(config),
        config,
        createdAt: now,
        updatedAt: now,
      }
      commit([design, ...read()])
      return design
    },
    []
  )

  const rename = React.useCallback((id: string, name: string) => {
    commit(
      read().map((design) =>
        design.id === id
          ? {
              ...design,
              name: name.trim() || design.name,
              updatedAt: Date.now(),
            }
          : design
      )
    )
  }, [])

  const remove = React.useCallback((id: string) => {
    commit(read().filter((design) => design.id !== id))
  }, [])

  return { designs, hydrated, save, rename, remove }
}

/** One-shot read for callers that only need a single design (the `?design=`
 *  hand-off from `/creates` into `/create`). */
export function findSavedDesign(id: string): SavedDesign | undefined {
  return read().find((design) => design.id === id)
}
