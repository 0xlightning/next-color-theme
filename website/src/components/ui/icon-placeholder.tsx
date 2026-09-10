"use client"

import React from "react"
import { useIconLibrary } from "@/components/create/icon-library-context"
import { cn } from "@/lib/utils"
import { LIBRARY_CLASS, renderIcon } from "./icon-registry"

interface IconPlaceholderProps extends React.SVGProps<SVGSVGElement> {
  lucide?: string
  tabler?: string
  hugeicons?: string
  phosphor?: string
  remixicon?: string
  /** Override the library from context. Used by the icon picker's preview. */
  iconLibrary?: string
}

/**
 * Renders one glyph from whichever icon library the design system selects.
 *
 * Project-local, not a shadcn primitive. Each call site names the icon once
 * per vendor because the vendors disagree — `IconCheck` / `Check` /
 * `Tick02Icon` / `CheckIcon` / `RiCheckLine` are the same glyph. All five
 * libraries are really installed; `icon-registry.tsx` holds the resolved
 * components, imported by name so no barrel is pulled in.
 *
 * The resolution itself lives in `renderIcon`, a module-level function. It
 * used to happen inline here, which meant the JSX element type was the return
 * value of a call made during render — six eslint
 * react-hooks/static-components errors.
 */
export const IconPlaceholder: React.FC<IconPlaceholderProps> = ({
  lucide,
  tabler,
  hugeicons,
  phosphor,
  remixicon,
  iconLibrary,
  className,
  ...props
}) => {
  const ctxLibrary = useIconLibrary()
  const activeLibrary = iconLibrary ?? ctxLibrary ?? "tabler"

  const icon = renderIcon(
    activeLibrary,
    { lucide, tabler, hugeicons, phosphor, remixicon },
    { className: cn(LIBRARY_CLASS[activeLibrary], className), ...props }
  )
  if (icon) {
    return icon
  }

  // Nothing matched — a neutral placeholder beats a hole in the layout.
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  )
}
