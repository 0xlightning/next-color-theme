"use client"

import * as React from "react"
import { useDesignSystem } from "./use-design-system"
import { IconLibraryProvider } from "./icon-library-context"

type ScopeProps = {
  children: React.ReactNode
  /** Pin the scope to one mode. Omit to follow `state.mode`. */
  mode?: "light" | "dark"
  className?: string
}

/**
 * Marks a subtree as the themed preview surface.
 *
 * The `.theme-scope` custom properties themselves are written once by
 * `DesignSystemProvider` (see `use-design-system.tsx`) — two scopes render
 * side by side on `/create` and they must not both own one global <style>
 * element. This component is presentational: the wrapper class, the mode
 * flag, and the icon-library context the preview's icons read.
 *
 * `font-sans` is applied here on purpose. The wrapper redeclares
 * `--font-sans`, but every descendant inherits its *computed* font-family
 * from `html`/`body`, which resolved the variable at the root and outside
 * this scope. Re-applying the utility on the wrapper re-resolves it against
 * the scope's own value, which is what makes the Font picker visible.
 */
export function ThemeScope({ children, mode, className }: ScopeProps) {
  const { state } = useDesignSystem()
  const resolved = mode ?? state.mode

  return (
    <IconLibraryProvider iconLibrary={state.iconLibrary ?? "tabler"}>
      <div
        className={[
          "theme-scope",
          "font-sans",
          resolved === "dark" ? "dark" : "",
          className ?? "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </div>
    </IconLibraryProvider>
  )
}
