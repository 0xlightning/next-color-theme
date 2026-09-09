// Empty stub module for redirecting missing npm packages to a no-op.
// We re-export common named identifiers as `any` so consumer files type-check.
import * as React from "react"

const _any: any = undefined
export const placeholder: any = undefined
export const __stub = true
export type Placeholder = any

// React components
export const Analytics: any = _any
export const Streamdown: any = _any
export const I18nProvider: any = _any
export const Dialog: any = _any
export const Root: any = _any
export const code: any = _any

// hooks / functions
export const useBreadcrumb: any = _any
export const useDocsSearch: any = _any
export const useReducedMotion: any = _any

// motion-related
export type Variants = any
export const motion: any = _any

// tanstack react-table
export const flexRender: any = _any
export const getCoreRowModel: any = _any
export const getFilteredRowModel: any = _any
export const getPaginationRowModel: any = _any
export const getSortedRowModel: any = _any
export const useReactTable: any = _any
export type ColumnDef<T = any> = any
export type ColumnFiltersState = any
export type SortingState = any
export type VisibilityState = any
export type Row<T = any> = any

// hugeicons
export const PlusSignIcon: any = _any
export const HugeiconsIcon: any = _any

// ----
// @tabler/icons-react compatible namespace export:
// Dynamic proxy so `tablerIcons["IconX"]` style access returns a no-op
// component. Keeps the same surface area as the real package without
// pulling in thousands of SVG files during type-check / compilation.
// ----
type IconComp = React.ComponentType<any>
const TablerFallback: IconComp = (() => null) as unknown as IconComp
const _tablerProxy: Record<string, IconComp> = new Proxy(
  {} as Record<string, IconComp>,
  {
    get(_target, key: string) {
      return TablerFallback
    },
    has() {
      return true
    },
    ownKeys() {
      return []
    },
  }
)

const _tablerNamed: Record<string, IconComp> = _tablerProxy
export const IconX: IconComp = TablerFallback
export const IconCheck: IconComp = TablerFallback
export const IconMenu: IconComp = TablerFallback
export const IconSearch: IconComp = TablerFallback
export const IconPlus: IconComp = TablerFallback
export const IconMinus: IconComp = TablerFallback
export const IconChevronDown: IconComp = TablerFallback
export const IconChevronUp: IconComp = TablerFallback
export const IconChevronLeft: IconComp = TablerFallback
export const IconChevronRight: IconComp = TablerFallback
export const IconArrowRight: IconComp = TablerFallback
export const IconArrowLeft: IconComp = TablerFallback
export const IconTrash: IconComp = TablerFallback
export const IconCopy: IconComp = TablerFallback
export const IconDownload: IconComp = TablerFallback
export const IconUpload: IconComp = TablerFallback
export const IconTrendingUp: IconComp = TablerFallback
export const IconTrendingDown: IconComp = TablerFallback
export const IconChartBar: IconComp = TablerFallback
export const IconChartPie: IconComp = TablerFallback
export const IconChartLine: IconComp = TablerFallback
export const IconSparkles: IconComp = TablerFallback
export const IconWand: IconComp = TablerFallback
export const IconMousePointer: IconComp = TablerFallback
export const IconPencil: IconComp = TablerFallback
export const IconSettings: IconComp = TablerFallback
export const IconLoader: IconComp = TablerFallback
export const IconLoader2: IconComp = TablerFallback
export const IconSave: IconComp = TablerFallback
export const IconHeart: IconComp = TablerFallback
export const IconStar: IconComp = TablerFallback
export const IconBookmark: IconComp = TablerFallback
export const IconCamera: IconComp = TablerFallback
export const IconImage: IconComp = TablerFallback
export const IconFile: IconComp = TablerFallback
export const IconFolder: IconComp = TablerFallback
export const IconExternalLink: IconComp = TablerFallback
export const IconLock: IconComp = TablerFallback
export const IconSend: IconComp = TablerFallback
export const IconGithub: IconComp = TablerFallback
export const IconHash: IconComp = TablerFallback
export const IconAt: IconComp = TablerFallback
export const IconInfoCircle: IconComp = TablerFallback
export const IconHelpCircle: IconComp = TablerFallback
export const IconAlertCircle: IconComp = TablerFallback
export const IconAlertTriangle: IconComp = TablerFallback
export const IconBell: IconComp = TablerFallback
export const IconFilter: IconComp = TablerFallback
export const IconGrid: IconComp = TablerFallback
export const IconList: IconComp = TablerFallback
export const IconMail: IconComp = TablerFallback
export const IconUser: IconComp = TablerFallback
export const IconUsers: IconComp = TablerFallback
export const IconHome: IconComp = TablerFallback
export const IconSun: IconComp = TablerFallback
export const IconMoon: IconComp = TablerFallback
export const IconMoreHorizontal: IconComp = TablerFallback
export const IconMoreVertical: IconComp = TablerFallback
export const IconLayers: IconComp = TablerFallback
export const IconLightbulb: IconComp = TablerFallback
export const IconRocket: IconComp = TablerFallback
export const IconWrench: IconComp = TablerFallback
export const IconCpu: IconComp = TablerFallback
export const IconBot: IconComp = TablerFallback
export const IconBrain: IconComp = TablerFallback
export const IconCloud: IconComp = TablerFallback
export const IconDatabase: IconComp = TablerFallback
export const IconServer: IconComp = TablerFallback
export const IconWifi: IconComp = TablerFallback
export const IconBluetooth: IconComp = TablerFallback
export const IconPower: IconComp = TablerFallback
export const IconLogout: IconComp = TablerFallback
export const IconLogin: IconComp = TablerFallback
export const IconMove: IconComp = TablerFallback
export const IconMaximize: IconComp = TablerFallback
export const IconMinimize: IconComp = TablerFallback
export const IconPlay: IconComp = TablerFallback
export const IconPause: IconComp = TablerFallback
export const IconVideo: IconComp = TablerFallback
export const IconMonitor: IconComp = TablerFallback
export const IconSmartphone: IconComp = TablerFallback
export const IconGlobe: IconComp = TablerFallback
export const IconCompass: IconComp = TablerFallback
export const IconMap: IconComp = TablerFallback
export const IconMapPin: IconComp = TablerFallback
export const IconNavigation: IconComp = TablerFallback
export const IconFlag: IconComp = TablerFallback
export const IconAward: IconComp = TablerFallback
export const IconCrown: IconComp = TablerFallback
export const IconMedal: IconComp = TablerFallback
export const IconClock: IconComp = TablerFallback
export const IconCalendar: IconComp = TablerFallback
export const IconRefreshCw: IconComp = TablerFallback
export const IconRefreshCcw: IconComp = TablerFallback
export const IconShare: IconComp = TablerFallback
export const IconLink: IconComp = TablerFallback
export const IconTag: IconComp = TablerFallback
export const IconPanelLeft: IconComp = TablerFallback
export const IconPanelRight: IconComp = TablerFallback
export const IconLayout: IconComp = TablerFallback
export const IconLayoutGrid: IconComp = TablerFallback
export const IconTerminal: IconComp = TablerFallback
export const IconCode: IconComp = TablerFallback
export const IconCommand: IconComp = TablerFallback
export const IconMicrophone: IconComp = TablerFallback
export const IconPaperclip: IconComp = TablerFallback
export const IconInbox: IconComp = TablerFallback
export const IconMessageCircle: IconComp = TablerFallback
export const IconMessageSquare: IconComp = TablerFallback
export const IconHexagon: IconComp = TablerFallback
export const IconOctagon: IconComp = TablerFallback
export const IconRadar: IconComp = TablerFallback
export const IconSquareDashed: IconComp = TablerFallback
export const IconGalleryHorizontal: IconComp = TablerFallback
export const IconGalleryHorizontalEnd: IconComp = TablerFallback
export const IconGalleryVertical: IconComp = TablerFallback
export const IconGalleryVerticalEnd: IconComp = TablerFallback
export const IconGalleryThumbnails: IconComp = TablerFallback
export const IconIdCard: IconComp = TablerFallback
export const IconIdCardLanyard: IconComp = TablerFallback
export const IconSignpost: IconComp = TablerFallback
export const IconSignpostBig: IconComp = TablerFallback
export const IconPanelTop: IconComp = TablerFallback
export const IconPanelBottom: IconComp = TablerFallback
export const IconPanelTopDashed: IconComp = TablerFallback
export const IconPanelBottomDashed: IconComp = TablerFallback
export const IconPanelLeftDashed: IconComp = TablerFallback
export const IconPanelRightDashed: IconComp = TablerFallback
export const IconPanelTopOpen: IconComp = TablerFallback
export const IconPanelBottomOpen: IconComp = TablerFallback
export const IconPanelLeftOpen: IconComp = TablerFallback
export const IconPanelRightOpen: IconComp = TablerFallback
export const IconPanelTopClose: IconComp = TablerFallback
export const IconPanelBottomClose: IconComp = TablerFallback
export const IconPanelLeftClose: IconComp = TablerFallback
export const IconPanelRightClose: IconComp = TablerFallback
export const IconBadgeCheck: IconComp = TablerFallback
export const IconBadgePlus: IconComp = TablerFallback
export const IconBadgeMinus: IconComp = TablerFallback
export const IconBadgeAlert: IconComp = TablerFallback
export const IconBadgeInfo: IconComp = TablerFallback
export const IconBadgeX: IconComp = TablerFallback
export const IconBadgeDollarSign: IconComp = TablerFallback
export const IconChevronsUpDown: IconComp = TablerFallback
export const IconChevronsDownUp: IconComp = TablerFallback
export const IconChevronsLeftRight: IconComp = TablerFallback

export default _tablerNamed
