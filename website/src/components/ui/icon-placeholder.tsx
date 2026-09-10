"use client"

import React from "react"
import * as LucideIcons from "lucide-react"
import * as TablerIcons from "@tabler/icons-react"
import { useIconLibrary } from "@/components/create/icon-library-context"
import { cn } from "@/lib/utils"

interface IconPlaceholderProps extends React.SVGProps<SVGSVGElement> {
  lucide?: string
  tabler?: string
  hugeicons?: string
  phosphor?: string
  remixicon?: string
  iconLibrary?: string
}

const lucideIcons = LucideIcons as unknown as Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>> | undefined
>

const tablerIcons = TablerIcons as unknown as Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>> | undefined
>

const getTablerIcon = (name?: string) => {
  if (!name) return undefined
  return tablerIcons[name] || tablerIcons[`Icon${name}`] || tablerIcons[name.replace(/^Icon/, "")]
}

const getLucideIcon = (name?: string) => {
  if (!name) return undefined
  const formatted = name.charAt(0).toUpperCase() + name.slice(1)
  return lucideIcons[name] || lucideIcons[formatted] || lucideIcons[name.replace(/^Icon/, "")]
}

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

  if (activeLibrary === "lucide" && lucide) {
    const Component = getLucideIcon(lucide)
    if (Component) {
      return <Component className={className} {...props} />
    }
  }

  if (activeLibrary === "tabler" && tabler) {
    const Component = getTablerIcon(tabler)
    if (Component) {
      return <Component className={className} {...props} />
    }
  }

  if (activeLibrary === "hugeicons") {
    const Component = getLucideIcon(lucide) || getTablerIcon(tabler)
    if (Component) {
      return <Component className={cn("stroke-[1.5] [stroke-linecap:round]", className)} {...props} />
    }
  }

  if (activeLibrary === "phosphor") {
    const Component = getTablerIcon(tabler) || getLucideIcon(lucide)
    if (Component) {
      return <Component className={cn("stroke-[2.25] [stroke-linecap:square]", className)} {...props} />
    }
  }

  if (activeLibrary === "remixicon") {
    const Component = getLucideIcon(lucide) || getTablerIcon(tabler)
    if (Component) {
      return <Component className={cn("stroke-[1.75] [stroke-linejoin:miter]", className)} {...props} />
    }
  }

  const FallbackComp = getTablerIcon(tabler) || getLucideIcon(lucide)
  if (FallbackComp) {
    return <FallbackComp className={className} {...props} />
  }

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
