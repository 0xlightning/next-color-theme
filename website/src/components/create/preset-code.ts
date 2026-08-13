import { decodePreset, encodePreset, isPresetCode } from "shadcn/preset"
import type { DesignSystemConfig } from "@/registry/types"

const PRESET_FLAG_PATTERN = /^--preset\b\s+(.+)$/i

/**

 * Strip the optional `--preset ` CLI flag prefix and return the bare code.

 * Mirrors shadcn's `parse-preset-input` shape so users can paste either form.

 */

export function parsePresetInput(value: string): string | null {

  const input = value.trim()

  if (!input) {

    return null

  }

  const code = input.match(PRESET_FLAG_PATTERN)?.[1]?.trim() ?? input

  return isPresetCode(code) ? code : null

}

/**

 * Encode the 10 design-system fields the shadcn preset codec covers.
 * `mode` and `accent` are local-only and intentionally excluded — `mode`
 * is a UI toggle, `accent` is derived from `theme`.
 */
export function presetCodeFromConfig(config: DesignSystemConfig): string {
  return encodePreset({
    style: config.style as never,
    baseColor: config.baseColor as never,
    theme: config.theme as never,
    chartColor: config.chartColor as never,
    iconLibrary: config.iconLibrary as never,
    font: config.font as never,
    fontHeading: config.fontHeading as never,
    radius: config.radius as never,
    menuAccent: config.menuAccent as never,
    menuColor: config.menuColor as never,
  })
}

/**
 * Decode a preset code back into the subset of `DesignSystemConfig` it covers.
 * Returns `null` if the code is invalid or unparsable. `mode` and `accent`
 * are filled with safe defaults; callers can overlay their own values.
 */
export function configFromPresetCode(
  code: string
): Pick<
  DesignSystemConfig,
  | "style"
  | "baseColor"
  | "theme"
  | "chartColor"
  | "iconLibrary"
  | "font"
  | "fontHeading"
  | "radius"
  | "menuAccent"
  | "menuColor"
> | null {
  if (!isPresetCode(code)) {
    return null
  }
  const decoded = decodePreset(code)
  if (!decoded) {
    return null
  }
  return {
    style: decoded.style as DesignSystemConfig["style"],
    baseColor: decoded.baseColor as DesignSystemConfig["baseColor"],
    theme: decoded.theme as DesignSystemConfig["theme"],
    chartColor: (decoded.chartColor ??
      decoded.theme) as DesignSystemConfig["chartColor"],
    iconLibrary: decoded.iconLibrary as DesignSystemConfig["iconLibrary"],
    font: decoded.font as DesignSystemConfig["font"],
    fontHeading: decoded.fontHeading as DesignSystemConfig["fontHeading"],
    radius: decoded.radius as DesignSystemConfig["radius"],
    menuAccent: decoded.menuAccent as DesignSystemConfig["menuAccent"],
    menuColor: decoded.menuColor as DesignSystemConfig["menuColor"],
  }
}
