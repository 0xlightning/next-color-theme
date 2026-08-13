"use client"

import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

type Indicator = React.ReactNode

type Option = {
  value: string
  label: string
  description?: string
  /** Per-option override indicator (replaces the card-level indicator when
   *  hovered/previewed). Optional. */
  indicator?: Indicator
}

type SettingCardProps = {
  label: string
  value: string
  /** Headline value label shown in the trigger. */
  valueLabel: string
  /** Right-side indicator (swatch dot, glyph, logo, etc.). */
  indicator?: Indicator
  options: Option[]
  groups?: { label: string; options: Option[] }[]
  onChange: (value: string) => void
}

/**
 * One setting card in the narrow customizer panel. Renders a stacked trigger
 * (muted label / current value) with a right-side indicator and a popover of
 * options. The popover positions to the right of the trigger so it stays
 * inside the dashboard preview rather than clipping off-screen.
 */
export function SettingCard({
  label,
  value,
  valueLabel,
  indicator,
  options,
  groups,
  onChange,
}: SettingCardProps) {
  const flatOptions = React.useMemo(() => {
    if (groups && groups.length > 0) {
      return groups.flatMap((g) => g.options)
    }
    return options
  }, [groups, options])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "group relative flex w-full items-center justify-between rounded-[10px] border border-[#3d3d3d] bg-[#2b2b2b] px-2.5 py-1.5 text-left text-[#f2f2f2] transition-colors",
          "hover:bg-[#323232] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#5a5a5a] data-[state=open]:bg-[#323232]"
        )}
      >
        <div className="flex min-w-0 flex-col items-start leading-tight">
          <span className="text-[10px] font-medium uppercase tracking-wide text-[#9a9a9a]">
            {label}
          </span>
          <span className="line-clamp-1 max-w-full truncate text-[12px] font-semibold text-[#f2f2f2]">
            {valueLabel}
          </span>
        </div>
        {indicator && (
          <div className="pointer-events-none ml-2 flex size-4 shrink-0 items-center justify-center text-[#f2f2f2]">
            {indicator}
          </div>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        side="right"
        sideOffset={6}
        className="min-w-44 border-zinc-300 bg-white !text-zinc-900"
      >
        <DropdownMenuRadioGroup value={value} onValueChange={onChange}>
          {groups && groups.length > 0
            ? groups.map((group, index) => (
                <React.Fragment key={group.label}>
                  {index > 0 && <DropdownMenuSeparator className="bg-zinc-200" />}
                  <DropdownMenuLabel className="px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-zinc-500">
                    {group.label}
                  </DropdownMenuLabel>
                  {group.options.map((option) => (
                    <DropdownMenuRadioItem
                      key={option.value}
                      value={option.value}
                      className="!text-zinc-900 focus:bg-zinc-100 focus:!text-zinc-900 data-[highlighted]:!text-zinc-900"
                    >
                      {option.label}
                    </DropdownMenuRadioItem>
                  ))}
                </React.Fragment>
              ))
            : flatOptions.map((option) => (
                <DropdownMenuRadioItem
                  key={option.value}
                  value={option.value}
                  className="!text-zinc-900 focus:bg-zinc-100 focus:!text-zinc-900 data-[highlighted]:!text-zinc-900"
                >
                  {option.label}
                </DropdownMenuRadioItem>
              ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

/** Compact text-only trigger used for the top "Menu" button and the
 *  preset/footer buttons. Distinct chrome from SettingCard so the eye reads
 *  them as actions, not settings. */
export function ActionButton({
  children,
  onClick,
  className,
  variant = "default",
  title,
  disabled,
}: {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: "default" | "primary"
  title?: string
  disabled?: boolean
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex h-7 w-full items-center justify-center rounded-md border border-[#3d3d3d] px-2 text-[11px] font-semibold transition-colors",
        variant === "primary"
          ? "bg-[#f2f2f2] text-[#1a1a1a] hover:bg-white"
          : "bg-[#2b2b2b] text-[#f2f2f2] hover:bg-[#323232]",
        disabled && "cursor-not-allowed opacity-50 hover:bg-[#2b2b2b]",
        className
      )}
    >
      {children}
    </button>
  )
}

/** Indicator helpers — pure visual primitives used by individual pickers. */

export function SwatchDot({
  color,
  className,
}: {
  color: string
  className?: string
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "block size-3 shrink-0 rounded-full ring-1 ring-black/30",
        className
      )}
      style={{ backgroundColor: color }}
    />
  )
}

export function AaGlyph({
  fontFamily,
  className,
}: {
  fontFamily: string
  className?: string
}) {
  return (
    <span
      aria-hidden
      className={cn("text-[13px] font-semibold text-[#f2f2f2]", className)}
      style={{ fontFamily }}
    >
      Aa
    </span>
  )
}

export function CircleOutline({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "block size-3 shrink-0 rounded-full border border-[#9a9a9a]",
        className
      )}
    />
  )
}