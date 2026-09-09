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
    const Component = lucideIcons[lucide]
    if (Component) {
      return <Component className={className} {...props} />
    }
  }

  if (activeLibrary === "tabler" && tabler) {
    const Component = tablerIcons[tabler]
    if (Component) {
      return <Component className={className} {...props} />
    }
  }

  if (activeLibrary === "hugeicons") {
    const Component = (lucide && lucideIcons[lucide]) || (tabler && tablerIcons[tabler])
    if (Component) {
      return <Component className={cn("stroke-[1.5] [stroke-linecap:round]", className)} {...props} />
    }
  }

  if (activeLibrary === "phosphor") {
    const Component = (tabler && tablerIcons[tabler]) || (lucide && lucideIcons[lucide])
    if (Component) {
      return <Component className={cn("stroke-[2.25] [stroke-linecap:square]", className)} {...props} />
    }
  }

  if (activeLibrary === "remixicon") {
    const Component = (lucide && lucideIcons[lucide]) || (tabler && tablerIcons[tabler])
    if (Component) {
      return <Component className={cn("stroke-[1.75] [stroke-linejoin:miter]", className)} {...props} />
    }
  }

  if (tabler && tablerIcons[tabler]) {
    const Component = tablerIcons[tabler]!
    return <Component className={className} {...props} />
  }

  if (lucide && lucideIcons[lucide]) {
    const Component = lucideIcons[lucide]!
    return <Component className={className} {...props} />
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
