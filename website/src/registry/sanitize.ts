/**
 * Storage-boundary validation for `DesignSystemConfig`.
 *
 * Anything read back from localStorage — the live customizer envelope and
 * saved designs alike — is arbitrary JSON: it may predate a renamed token,
 * have been hand-edited, or come from an older build. Downstream code assumes
 * every field names something the registry knows about, and reacts badly when
 * it doesn't: `buildThemeVars()` returns null on an unknown base color, which
 * makes `buildPayload()` throw mid-render and `buildCss()` emit an empty
 * string (blanking every preview token).
 *
 * Sanitizing once, here, means nothing downstream has to defend itself.
 * Unknown values fall back per-field, so one bad token costs that token only
 * and the rest of a saved design survives.
 */
import { getAccent } from "./accents"
import { getBaseColor } from "./base-colors"
import { getChartPalette } from "./chart-palettes"
import {
  FONTS,
  FONT_HEADING_OPTIONS,
  getIconLibrary,
  getLibrary,
  getMenuAccent,
  getMenuColor,
  getRadius,
  getTheme,
} from "./options"
import { getStyle } from "./styles"
import type { DesignSystemConfig } from "./types"

/**
 * Keep a field's stored value when the registry recognises it, else fall back.
 *
 * `lookup` is one of the registry getters, so membership is always checked
 * against the same array the matching picker renders — a new token is
 * accepted the moment it is added, with nothing to keep in sync here.
 */
function pick<T extends string>(
  raw: unknown,
  lookup: (value: string) => unknown,
  fallback: T
): T {
  return typeof raw === "string" && lookup(raw) ? (raw as T) : fallback
}

/**
 * Coerce arbitrary parsed JSON into a config every consumer can rely on.
 * `fallback` supplies the value for any field that is missing or unknown —
 * callers pass `DEFAULT_CONFIG`.
 */
export function sanitizeConfig(
  raw: unknown,
  fallback: DesignSystemConfig
): DesignSystemConfig {
  if (!raw || typeof raw !== "object") {
    return fallback
  }
  const input = raw as Partial<Record<keyof DesignSystemConfig, unknown>>

  return {
    baseColor: pick(input.baseColor, getBaseColor, fallback.baseColor),
    accent: pick(input.accent, getAccent, fallback.accent),
    style: pick(input.style, getStyle, fallback.style),
    // The two font fields take different sets: only the heading may be
    // "inherit", so the body font is checked against FONTS alone (getFont
    // searches the heading superset and would wrongly accept it here).
    font: pick(
      input.font,
      (value) => FONTS.find((f) => f.value === value),
      fallback.font
    ),
    fontHeading: pick(
      input.fontHeading,
      (value) => FONT_HEADING_OPTIONS.find((f) => f.value === value),
      fallback.fontHeading
    ),
    iconLibrary: pick(input.iconLibrary, getIconLibrary, fallback.iconLibrary),
    mode: input.mode === "light" || input.mode === "dark"
      ? input.mode
      : fallback.mode,
    radius: pick(input.radius, getRadius, fallback.radius),
    theme: pick(input.theme, getTheme, fallback.theme),
    // Chart palettes are keyed by theme name but are a separate registry —
    // validate against the palette list, not THEMES.
    chartColor: pick(input.chartColor, getChartPalette, fallback.chartColor),
    menuColor: pick(input.menuColor, getMenuColor, fallback.menuColor),
    menuAccent: pick(input.menuAccent, getMenuAccent, fallback.menuAccent),
    library: pick(input.library, getLibrary, fallback.library),
  }
}
