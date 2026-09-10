/**
 * Static icon registry — GENERATED, see genicons.mjs in git history.
 *
 * Deliberately explicit named imports rather than `import * as`: five icon
 * barrels is roughly 15k modules, and /create already takes ~9s to compile.
 * Only the 125 icons this app actually renders are pulled in.
 *
 * Every value here is a module-level binding, which is also what lets
 * `renderIcon` below satisfy react-hooks/static-components: the element type
 * is never the return value of a call made during render.
 */
import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  AlignLeft as lucide_AlignLeft,
  Bell as lucide_Bell,
  Calendar as lucide_Calendar,
  Check as lucide_Check,
  CheckIcon as lucide_CheckIcon,
  ChevronDownIcon as lucide_ChevronDownIcon,
  ChevronLeftIcon as lucide_ChevronLeftIcon,
  ChevronRightIcon as lucide_ChevronRightIcon,
  ChevronUpIcon as lucide_ChevronUpIcon,
  Heart as lucide_Heart,
  Home as lucide_Home,
  Loader2Icon as lucide_Loader2Icon,
  Lock as lucide_Lock,
  Mail as lucide_Mail,
  Menu as lucide_Menu,
  Package as lucide_Package,
  Plus as lucide_Plus,
  Search as lucide_Search,
  Settings as lucide_Settings,
  Shield as lucide_Shield,
  Sparkles as lucide_Sparkles,
  Star as lucide_Star,
  Trash as lucide_Trash,
  User as lucide_User,
  XIcon as lucide_XIcon,
} from "lucide-react"
import {
  IconAlignLeft as tabler_IconAlignLeft,
  IconBell as tabler_IconBell,
  IconCalendar as tabler_IconCalendar,
  IconCheck as tabler_IconCheck,
  IconChevronDown as tabler_IconChevronDown,
  IconChevronLeft as tabler_IconChevronLeft,
  IconChevronRight as tabler_IconChevronRight,
  IconChevronUp as tabler_IconChevronUp,
  IconHeart as tabler_IconHeart,
  IconHome as tabler_IconHome,
  IconLoader as tabler_IconLoader,
  IconLock as tabler_IconLock,
  IconMail as tabler_IconMail,
  IconMenu2 as tabler_IconMenu2,
  IconPackage as tabler_IconPackage,
  IconPlus as tabler_IconPlus,
  IconSearch as tabler_IconSearch,
  IconSelector as tabler_IconSelector,
  IconSettings as tabler_IconSettings,
  IconShield as tabler_IconShield,
  IconSparkles as tabler_IconSparkles,
  IconStar as tabler_IconStar,
  IconTrash as tabler_IconTrash,
  IconUser as tabler_IconUser,
  IconX as tabler_IconX,
} from "@tabler/icons-react"
import {
  Add01Icon as hugeicons_Add01Icon,
  AlignLeftIcon as hugeicons_AlignLeftIcon,
  ArrowDown01Icon as hugeicons_ArrowDown01Icon,
  ArrowDownIcon as hugeicons_ArrowDownIcon,
  ArrowLeftIcon as hugeicons_ArrowLeftIcon,
  ArrowRight01Icon as hugeicons_ArrowRight01Icon,
  ArrowRightIcon as hugeicons_ArrowRightIcon,
  ArrowUp01Icon as hugeicons_ArrowUp01Icon,
  Calendar01Icon as hugeicons_Calendar01Icon,
  Cancel01Icon as hugeicons_Cancel01Icon,
  Delete01Icon as hugeicons_Delete01Icon,
  FavouriteIcon as hugeicons_FavouriteIcon,
  Home01Icon as hugeicons_Home01Icon,
  Loading03Icon as hugeicons_Loading03Icon,
  LockIcon as hugeicons_LockIcon,
  MagicWand01Icon as hugeicons_MagicWand01Icon,
  Mail01Icon as hugeicons_Mail01Icon,
  Menu09Icon as hugeicons_Menu09Icon,
  Notification01Icon as hugeicons_Notification01Icon,
  PackageIcon as hugeicons_PackageIcon,
  Search01Icon as hugeicons_Search01Icon,
  Settings01Icon as hugeicons_Settings01Icon,
  Shield01Icon as hugeicons_Shield01Icon,
  StarIcon as hugeicons_StarIcon,
  Tick01Icon as hugeicons_Tick01Icon,
  Tick02Icon as hugeicons_Tick02Icon,
  UnfoldMoreIcon as hugeicons_UnfoldMoreIcon,
  UserIcon as hugeicons_UserIcon,
} from "@hugeicons/core-free-icons"
import {
  AlignLeftIcon as phosphor_AlignLeftIcon,
  BellIcon as phosphor_BellIcon,
  CalendarIcon as phosphor_CalendarIcon,
  CaretDownIcon as phosphor_CaretDownIcon,
  CaretLeftIcon as phosphor_CaretLeftIcon,
  CaretRightIcon as phosphor_CaretRightIcon,
  CaretUpIcon as phosphor_CaretUpIcon,
  CheckIcon as phosphor_CheckIcon,
  EnvelopeIcon as phosphor_EnvelopeIcon,
  GearIcon as phosphor_GearIcon,
  HeartIcon as phosphor_HeartIcon,
  HouseIcon as phosphor_HouseIcon,
  ListIcon as phosphor_ListIcon,
  LockIcon as phosphor_LockIcon,
  MagnifyingGlassIcon as phosphor_MagnifyingGlassIcon,
  PackageIcon as phosphor_PackageIcon,
  PlusIcon as phosphor_PlusIcon,
  ShieldIcon as phosphor_ShieldIcon,
  SparkleIcon as phosphor_SparkleIcon,
  SpinnerIcon as phosphor_SpinnerIcon,
  StarIcon as phosphor_StarIcon,
  TrashIcon as phosphor_TrashIcon,
  UserIcon as phosphor_UserIcon,
  XIcon as phosphor_XIcon,
} from "@phosphor-icons/react"
import {
  RiAddLine as remixicon_RiAddLine,
  RiArrowDownSLine as remixicon_RiArrowDownSLine,
  RiArrowLeftSLine as remixicon_RiArrowLeftSLine,
  RiArrowRightSLine as remixicon_RiArrowRightSLine,
  RiArrowUpSLine as remixicon_RiArrowUpSLine,
  RiBox3Line as remixicon_RiBox3Line,
  RiCalendarLine as remixicon_RiCalendarLine,
  RiCheckLine as remixicon_RiCheckLine,
  RiCloseLine as remixicon_RiCloseLine,
  RiDeleteBinLine as remixicon_RiDeleteBinLine,
  RiHeartLine as remixicon_RiHeartLine,
  RiHomeLine as remixicon_RiHomeLine,
  RiLoaderLine as remixicon_RiLoaderLine,
  RiLockLine as remixicon_RiLockLine,
  RiMailLine as remixicon_RiMailLine,
  RiMenuLine as remixicon_RiMenuLine,
  RiNotification3Line as remixicon_RiNotification3Line,
  RiSearchLine as remixicon_RiSearchLine,
  RiSettings3Line as remixicon_RiSettings3Line,
  RiShieldLine as remixicon_RiShieldLine,
  RiSparklingLine as remixicon_RiSparklingLine,
  RiStarLine as remixicon_RiStarLine,
  RiUserLine as remixicon_RiUserLine,
} from "@remixicon/react"

type SvgProps = React.SVGProps<SVGSVGElement>
type IconComponent = React.ComponentType<SvgProps>
/** Hugeicons ships icon *data*, not components; HugeiconsIcon renders it. */
type HugeiconsData = React.ComponentProps<typeof HugeiconsIcon>["icon"]

// Cast once at the boundary: the vendors type their own props slightly
// differently (remixicon forbids children, for one) while all of them accept
// the SVG attributes this app passes.
const LUCIDE = {
  AlignLeft: lucide_AlignLeft,
  Bell: lucide_Bell,
  Calendar: lucide_Calendar,
  Check: lucide_Check,
  CheckIcon: lucide_CheckIcon,
  ChevronDownIcon: lucide_ChevronDownIcon,
  ChevronLeftIcon: lucide_ChevronLeftIcon,
  ChevronRightIcon: lucide_ChevronRightIcon,
  ChevronUpIcon: lucide_ChevronUpIcon,
  Heart: lucide_Heart,
  Home: lucide_Home,
  Loader2Icon: lucide_Loader2Icon,
  Lock: lucide_Lock,
  Mail: lucide_Mail,
  Menu: lucide_Menu,
  Package: lucide_Package,
  Plus: lucide_Plus,
  Search: lucide_Search,
  Settings: lucide_Settings,
  Shield: lucide_Shield,
  Sparkles: lucide_Sparkles,
  Star: lucide_Star,
  Trash: lucide_Trash,
  User: lucide_User,
  XIcon: lucide_XIcon,
} as unknown as Record<string, IconComponent | undefined>

// Cast once at the boundary: the vendors type their own props slightly
// differently (remixicon forbids children, for one) while all of them accept
// the SVG attributes this app passes.
const TABLER = {
  IconAlignLeft: tabler_IconAlignLeft,
  IconBell: tabler_IconBell,
  IconCalendar: tabler_IconCalendar,
  IconCheck: tabler_IconCheck,
  IconChevronDown: tabler_IconChevronDown,
  IconChevronLeft: tabler_IconChevronLeft,
  IconChevronRight: tabler_IconChevronRight,
  IconChevronUp: tabler_IconChevronUp,
  IconHeart: tabler_IconHeart,
  IconHome: tabler_IconHome,
  IconLoader: tabler_IconLoader,
  IconLock: tabler_IconLock,
  IconMail: tabler_IconMail,
  IconMenu2: tabler_IconMenu2,
  IconPackage: tabler_IconPackage,
  IconPlus: tabler_IconPlus,
  IconSearch: tabler_IconSearch,
  IconSelector: tabler_IconSelector,
  IconSettings: tabler_IconSettings,
  IconShield: tabler_IconShield,
  IconSparkles: tabler_IconSparkles,
  IconStar: tabler_IconStar,
  IconTrash: tabler_IconTrash,
  IconUser: tabler_IconUser,
  IconX: tabler_IconX,
} as unknown as Record<string, IconComponent | undefined>

// Cast once at the boundary: the vendors type their own props slightly
// differently (remixicon forbids children, for one) while all of them accept
// the SVG attributes this app passes.
const PHOSPHOR = {
  AlignLeftIcon: phosphor_AlignLeftIcon,
  BellIcon: phosphor_BellIcon,
  CalendarIcon: phosphor_CalendarIcon,
  CaretDownIcon: phosphor_CaretDownIcon,
  CaretLeftIcon: phosphor_CaretLeftIcon,
  CaretRightIcon: phosphor_CaretRightIcon,
  CaretUpIcon: phosphor_CaretUpIcon,
  CheckIcon: phosphor_CheckIcon,
  EnvelopeIcon: phosphor_EnvelopeIcon,
  GearIcon: phosphor_GearIcon,
  HeartIcon: phosphor_HeartIcon,
  HouseIcon: phosphor_HouseIcon,
  ListIcon: phosphor_ListIcon,
  LockIcon: phosphor_LockIcon,
  MagnifyingGlassIcon: phosphor_MagnifyingGlassIcon,
  PackageIcon: phosphor_PackageIcon,
  PlusIcon: phosphor_PlusIcon,
  ShieldIcon: phosphor_ShieldIcon,
  SparkleIcon: phosphor_SparkleIcon,
  SpinnerIcon: phosphor_SpinnerIcon,
  StarIcon: phosphor_StarIcon,
  TrashIcon: phosphor_TrashIcon,
  UserIcon: phosphor_UserIcon,
  XIcon: phosphor_XIcon,
} as unknown as Record<string, IconComponent | undefined>

// Cast once at the boundary: the vendors type their own props slightly
// differently (remixicon forbids children, for one) while all of them accept
// the SVG attributes this app passes.
const REMIXICON = {
  RiAddLine: remixicon_RiAddLine,
  RiArrowDownSLine: remixicon_RiArrowDownSLine,
  RiArrowLeftSLine: remixicon_RiArrowLeftSLine,
  RiArrowRightSLine: remixicon_RiArrowRightSLine,
  RiArrowUpSLine: remixicon_RiArrowUpSLine,
  RiBox3Line: remixicon_RiBox3Line,
  RiCalendarLine: remixicon_RiCalendarLine,
  RiCheckLine: remixicon_RiCheckLine,
  RiCloseLine: remixicon_RiCloseLine,
  RiDeleteBinLine: remixicon_RiDeleteBinLine,
  RiHeartLine: remixicon_RiHeartLine,
  RiHomeLine: remixicon_RiHomeLine,
  RiLoaderLine: remixicon_RiLoaderLine,
  RiLockLine: remixicon_RiLockLine,
  RiMailLine: remixicon_RiMailLine,
  RiMenuLine: remixicon_RiMenuLine,
  RiNotification3Line: remixicon_RiNotification3Line,
  RiSearchLine: remixicon_RiSearchLine,
  RiSettings3Line: remixicon_RiSettings3Line,
  RiShieldLine: remixicon_RiShieldLine,
  RiSparklingLine: remixicon_RiSparklingLine,
  RiStarLine: remixicon_RiStarLine,
  RiUserLine: remixicon_RiUserLine,
} as unknown as Record<string, IconComponent | undefined>

const HUGEICONS: Record<string, HugeiconsData | undefined> = {
  Add01Icon: hugeicons_Add01Icon,
  AlignLeftIcon: hugeicons_AlignLeftIcon,
  ArrowDown01Icon: hugeicons_ArrowDown01Icon,
  ArrowDownIcon: hugeicons_ArrowDownIcon,
  ArrowLeftIcon: hugeicons_ArrowLeftIcon,
  ArrowRight01Icon: hugeicons_ArrowRight01Icon,
  ArrowRightIcon: hugeicons_ArrowRightIcon,
  ArrowUp01Icon: hugeicons_ArrowUp01Icon,
  Calendar01Icon: hugeicons_Calendar01Icon,
  Cancel01Icon: hugeicons_Cancel01Icon,
  Delete01Icon: hugeicons_Delete01Icon,
  FavouriteIcon: hugeicons_FavouriteIcon,
  Home01Icon: hugeicons_Home01Icon,
  Loading03Icon: hugeicons_Loading03Icon,
  LockIcon: hugeicons_LockIcon,
  MagicWand01Icon: hugeicons_MagicWand01Icon,
  Mail01Icon: hugeicons_Mail01Icon,
  Menu09Icon: hugeicons_Menu09Icon,
  Notification01Icon: hugeicons_Notification01Icon,
  PackageIcon: hugeicons_PackageIcon,
  Search01Icon: hugeicons_Search01Icon,
  Settings01Icon: hugeicons_Settings01Icon,
  Shield01Icon: hugeicons_Shield01Icon,
  StarIcon: hugeicons_StarIcon,
  Tick01Icon: hugeicons_Tick01Icon,
  Tick02Icon: hugeicons_Tick02Icon,
  UnfoldMoreIcon: hugeicons_UnfoldMoreIcon,
  UserIcon: hugeicons_UserIcon,
}

/** Extra flourish so the simulated libraries aren't the only thing that
 *  changed — real vendors have genuinely different stroke conventions. */
const LIBRARY_CLASS: Record<string, string | undefined> = {
  hugeicons: "[stroke-linecap:round]",
  phosphor: "[stroke-linejoin:round]",
}

/**
 * Resolve one icon to an element.
 *
 * A plain module-level function, not a component and not a hook, so the
 * element type is a stable binding rather than something produced during a
 * render pass.
 */
export function renderIcon(
  library: string,
  names: {
    lucide?: string
    tabler?: string
    hugeicons?: string
    phosphor?: string
    remixicon?: string
  },
  props: SvgProps
): React.ReactElement | null {
  if (library === "hugeicons" && names.hugeicons) {
    const data = HUGEICONS[names.hugeicons]
    if (data) {
      return <HugeiconsIcon icon={data} {...(props as object)} />
    }
  }

  const direct =
    (library === "phosphor" && names.phosphor && PHOSPHOR[names.phosphor]) ||
    (library === "remixicon" && names.remixicon && REMIXICON[names.remixicon]) ||
    (library === "lucide" && names.lucide && LUCIDE[names.lucide]) ||
    (library === "tabler" && names.tabler && TABLER[names.tabler]) ||
    undefined
  if (direct) {
    return React.createElement(direct, props)
  }

  // Fall back across the installed libraries rather than rendering nothing.
  const fallback =
    (names.tabler && TABLER[names.tabler]) ||
    (names.lucide && LUCIDE[names.lucide]) ||
    undefined
  return fallback ? React.createElement(fallback, props) : null
}

export { LIBRARY_CLASS }
