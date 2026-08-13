"use client"

import * as React from "react"
import {
  type DesignSystemConfig,
  type FontValue,
  type IconLibraryValue,
  type MenuAccentValue,
  type MenuColorValue,
  type Mode,
  type RadiusName,
  type ThemeName,
} from "@/registry/types"

const STORAGE_KEY = "next-color-theme:create-state"

export const DEFAULT_CONFIG: DesignSystemConfig = {
  baseColor: "mist",
  accent: "default",
  style: "luma",
  font: "noto-sans",
  fontHeading: "eb-garamond",
  iconLibrary: "tabler",
  mode: "light",
  radius: "small",
  theme: "cyan",
  chartColor: "lime",
  menuColor: "inverted",
  menuAccent: "bold",
}

type Action =
  | { type: "set"; payload: Partial<DesignSystemConfig> }
  | { type: "replace"; payload: DesignSystemConfig }
  | { type: "randomize" }
  | { type: "reset" }

function pickRandom<T>(items: readonly T[]): T {
  const item = items[Math.floor(Math.random() * items.length)]
  // items is non-empty in practice; guarded return keeps the type narrow.
  return item ?? items[0]
}

function randomConfig(): DesignSystemConfig {
  return {
    baseColor: pickRandom(["mist", "neutral", "gray", "zinc", "stone", "slate"]),
    accent: pickRandom(["default", "blue", "green", "orange", "violet", "rose"]),
    style: pickRandom([
      "luma",
      "lyra",
      "maia",
      "mira",
      "nova",
      "rhea",
      "sera",
      "vega",
    ]),
    font: pickRandom<FontValue>([
      "geist",
      "inter",
      "noto-sans",
      "jetbrains-mono",
      "eb-garamond",
    ]),
    fontHeading: pickRandom<FontValue | "inherit">([
      "inherit",
      "geist",
      "inter",
      "noto-sans",
      "eb-garamond",
    ]),
    iconLibrary: pickRandom<IconLibraryValue>(["tabler", "lucide"]),
    mode: pickRandom<Mode>(["light", "dark"]),
    radius: pickRandom<RadiusName>([
      "none",
      "small",
      "medium",
      "large",
      "round",
    ]),
    theme: pickRandom<ThemeName>([
      "neutral",
      "blue",
      "green",
      "orange",
      "violet",
      "rose",
      "cyan",
      "lime",
    ]),
    chartColor: pickRandom<ThemeName>([
      "neutral",
      "blue",
      "green",
      "orange",
      "violet",
      "rose",
      "cyan",
      "lime",
    ]),
    menuColor: pickRandom<MenuColorValue>([
      "default",
      "default-translucent",
      "inverted",
      "inverted-translucent",
    ]),
    menuAccent: pickRandom<MenuAccentValue>(["subtle", "bold"]),
  }
}

function reducer(
  state: DesignSystemConfig,
  action: Action
): DesignSystemConfig {
  switch (action.type) {
    case "set":
      return { ...state, ...action.payload }
    case "replace":
      return action.payload
    case "randomize":
      return randomConfig()
    case "reset":
      return DEFAULT_CONFIG
  }
}

type Store = {
  state: DesignSystemConfig
  set: (next: Partial<DesignSystemConfig>) => void
  replace: (next: DesignSystemConfig) => void
  randomize: () => void
  reset: () => void
}

const DesignSystemContext = React.createContext<Store | null>(null)

function loadFromStorage(): DesignSystemConfig | null {
  if (typeof window === "undefined") {
    return null
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return null
    }
    const parsed: unknown = JSON.parse(raw)
    if (parsed && typeof parsed === "object") {
      return { ...DEFAULT_CONFIG, ...(parsed as Partial<DesignSystemConfig>) }
    }
  } catch {
    // ignore corrupt storage
  }
  return null
}

function persist(state: DesignSystemConfig) {
  if (typeof window === "undefined") {
    return
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // localStorage may be unavailable (private mode); silently skip
  }
}

export function DesignSystemProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(reducer, DEFAULT_CONFIG)

  // Hydrate from localStorage after mount (avoids SSR mismatch).
  React.useEffect(() => {
    const stored = loadFromStorage()
    if (stored) {
      dispatch({ type: "replace", payload: stored })
    }
  }, [])

  React.useEffect(() => {
    persist(state)
  }, [state])

  const store = React.useMemo<Store>(
    () => ({
      state,
      set: (next) => dispatch({ type: "set", payload: next }),
      replace: (next) => dispatch({ type: "replace", payload: next }),
      randomize: () => dispatch({ type: "randomize" }),
      reset: () => dispatch({ type: "reset" }),
    }),
    [state]
  )

  return (
    <DesignSystemContext.Provider value={store}>
      {children}
    </DesignSystemContext.Provider>
  )
}

export function useDesignSystem(): Store {
  const ctx = React.useContext(DesignSystemContext)
  if (!ctx) {
    throw new Error("useDesignSystem must be used within DesignSystemProvider")
  }
  return ctx
}