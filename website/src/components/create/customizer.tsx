"use client"

import * as React from "react"
import { toast } from "sonner"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { buildPayload, formatClipboardText } from "./build-payload"
import { ActionButton } from "./setting-card"
import { MenuAccentPicker } from "./accent-picker"
import { BaseColorPicker } from "./base-color-picker"
import { ChartColorPicker } from "./chart-color-picker"
import { FontPicker } from "./font-picker"
import { IconLibraryPicker } from "./icon-library-picker"
import { MenuColorPicker } from "./menu-picker"
import {
  configFromPresetCode,
  parsePresetInput,
  presetCodeFromConfig,
} from "./preset-code"
import { RadiusPicker } from "./radius-picker"
import { StylePicker } from "./style-picker"
import { ThemePicker } from "./theme-picker"
import { useDesignSystem } from "./use-design-system"

const PRESET_DIALOG_EXAMPLE = "b2D0wqNxT"

/**
 * Narrow vertical theme/customization panel (~155px × ~660px, premium dark).
 * Stacks 11 setting cards under a Menu button, with three preset actions and
 * a "Get Code" footer button. Each card opens a popover of options; selecting
 * a value live-updates the dashboard preview through `useDesignSystem`.
 */
export function Customizer() {
  const { state, set, replace, randomize, reset } = useDesignSystem()
  const [openPresetOpen, setOpenPresetOpen] = React.useState(false)
  const [presetInput, setPresetInput] = React.useState("")

  const presetCode = React.useMemo(() => presetCodeFromConfig(state), [state])

  const parsedPreset = React.useMemo(
    () => parsePresetInput(presetInput),
    [presetInput]
  )
  const presetInputInvalid = presetInput.trim().length > 0 && parsedPreset === null

  const handleCopyPreset = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(`--preset ${presetCode}`)
      toast.success(`Copied --preset ${presetCode}`)
    } catch {
      toast.error("Could not copy — clipboard blocked")
    }
  }, [presetCode])

  const handleCopyPayload = React.useCallback(async () => {
    const text = formatClipboardText(buildPayload(state))
    try {
      await navigator.clipboard.writeText(text)
      toast.success("Copied payload to clipboard")
    } catch {
      toast.error("Could not copy — clipboard blocked")
    }
  }, [state])

  return (
    <aside
      data-slot="customizer-panel"
      className="flex h-screen w-[175px] shrink-0 flex-col gap-1.5 overflow-y-auto border-r border-[#3d3d3d] bg-[#252525] p-2 text-[#f2f2f2] font-sans"
    >
      <div className="flex shrink-0 items-center gap-1">
        <DropdownMenu>
          <DropdownMenuTrigger
            className="inline-flex h-7 w-full items-center justify-between rounded-lg border border-[#3d3d3d] bg-[#2b2b2b] px-2 text-[11px] font-semibold text-[#f2f2f2] transition-colors hover:bg-[#323232] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#5a5a5a] data-[state=open]:bg-[#323232]"
          >
            <span>Menu</span>
            <span className="text-[#9a9a9a] [&_svg]:size-3.5 [&_svg]:text-[#9a9a9a]">
              <IconPlaceholder
                lucide="Menu"
                tabler="IconMenu2"
                hugeicons="Menu09Icon"
                phosphor="ListIcon"
                remixicon="RiMenuLine"
              />
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            side="right"
            sideOffset={6}
            className="min-w-44 border-[#3d3d3d] bg-[#1f1f1f] text-[#f2f2f2]"
          >
            <DropdownMenuItem
              onClick={() => setOpenPresetOpen(true)}
              className="text-[#f2f2f2] focus:bg-[#2b2b2b] focus:text-[#f2f2f2]"
            >
              Open Preset
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={randomize}
              className="text-[#f2f2f2] focus:bg-[#2b2b2b] focus:text-[#f2f2f2]"
            >
              Shuffle
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                set({ mode: state.mode === "dark" ? "light" : "dark" })
              }
              className="text-[#f2f2f2] focus:bg-[#2b2b2b] focus:text-[#f2f2f2]"
            >
              Light / Dark
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#2f2f2f]" />
            <DropdownMenuItem
              onClick={reset}
              className="text-[#f2f2f2] focus:bg-[#2b2b2b] focus:text-[#f2f2f2]"
            >
              Reset
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-1.5">
        <StylePicker />
        <BaseColorPicker />
        <ThemePicker />
        <ChartColorPicker />
        <FontPicker param="fontHeading" />
        <FontPicker param="font" />
        <IconLibraryPicker />
        <RadiusPicker />
        <MenuColorPicker />
        <MenuAccentPicker />
      </div>

      <div className="flex shrink-0 flex-col gap-1">
        <ActionButton title="Copy preset code" onClick={handleCopyPreset}>
          --preset {presetCode}
        </ActionButton>
        <ActionButton onClick={() => setOpenPresetOpen(true)}>
          Open Preset
        </ActionButton>
        <ActionButton onClick={randomize}>Shuffle</ActionButton>
        <ActionButton variant="primary" onClick={handleCopyPayload}>
          Get Code
        </ActionButton>
      </div>

      <Dialog open={openPresetOpen} onOpenChange={setOpenPresetOpen}>
        <DialogContent className="border-[#3d3d3d] bg-[#1f1f1f] text-[#f2f2f2] sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-[#f2f2f2]">Open Preset</DialogTitle>
            <DialogDescription className="text-[#9a9a9a]">
              Paste a preset code (e.g. {PRESET_DIALOG_EXAMPLE}) to load a
              saved configuration.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2 py-2">
            <Label htmlFor="preset-code" className="text-[#9a9a9a]">
              Preset code
            </Label>
            <Input
              id="preset-code"
              value={presetInput}
              onChange={(event) => setPresetInput(event.target.value)}
              placeholder={`${PRESET_DIALOG_EXAMPLE} or --preset ${PRESET_DIALOG_EXAMPLE}`}
              aria-invalid={presetInputInvalid}
              className="border-[#3d3d3d] bg-[#2b2b2b] text-[#f2f2f2] placeholder:text-[#6a6a6a]"
            />
          </div>
          <DialogFooter>
            <ActionButton onClick={() => setOpenPresetOpen(false)}>
              Cancel
            </ActionButton>
            <ActionButton
              variant="primary"
              disabled={!parsedPreset}
              onClick={() => {
                if (!parsedPreset) {
                  toast.error("Not a valid preset code")
                  return
                }
                const decoded = configFromPresetCode(parsedPreset)
                if (!decoded) {
                  toast.error("Could not decode preset")
                  return
                }
                // Preserve current mode + accent — they're not encoded in the
                // shadcn preset codec. Accent is theme-derived locally.
                replace({ ...decoded, mode: state.mode, accent: state.accent })
                setPresetInput("")
                setOpenPresetOpen(false)
                toast.success(`Loaded preset ${parsedPreset}`)
              }}
            >
              Load
            </ActionButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </aside>
  )
}
