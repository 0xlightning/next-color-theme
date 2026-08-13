// Auto-generated stub for `lucide-react` — source code imports many lucide-style icons.
// We use TypeScript's module augmentation to declare every common icon name as a component.
// At runtime we proxy through to @tabler/icons-react so renders work.
import * as React from "react";
import * as Tabler from "@tabler/icons-react";

type IconComp = React.ComponentType<any>;

const fallback: IconComp = (() => null) as unknown as IconComp;
const get = (k: string): IconComp => {
  const t = Tabler as unknown as Record<string, IconComp | undefined>;
  if (t[k]) return t[k]!;
  if (t[`Icon${k}`]) return t[`Icon${k}`]!;
  return fallback;
};

const names = [
  "Activity", "Airplay", "AlertCircle", "AlertOctagon", "AlertTriangle", "AlignCenter", "AlignJustify",
  "BadgeCheck", "BadgePlus", "BadgeMinus", "BadgeAlert", "BadgeInfo", "BadgeX", "BadgeDollarSign",
  "ChartArea", "ChartBar", "ChartBarBig", "ChartColumn", "ChartColumnBig", "ChartLine", "ChartPie", "ChartScatter", "ChartNetwork", "ChartCandlestick",
  "CornerDownLeft", "CornerDownRight", "CornerUpLeft", "CornerUpRight",
  "ChevronsUpDown", "ChevronsDownUp", "ChevronsLeftRight",
  "Fullscreen", "Hexagon", "Octagon", "MousePointer2", "Radar", "SquareDashed", "SquareDashedBottom", "SquareDashedBottomCode",
  "GalleryHorizontal", "GalleryHorizontalEnd", "GalleryVertical", "GalleryVerticalEnd", "GalleryThumbnails",
  "IdCard", "IdCardLanyard", "Signpost", "SignpostBig",
  "PanelTop", "PanelBottom", "PanelTopDashed", "PanelBottomDashed", "PanelLeftDashed", "PanelRightDashed",
  "PanelTopOpen", "PanelBottomOpen", "PanelLeftOpen", "PanelRightOpen",
  "PanelTopClose", "PanelBottomClose", "PanelLeftClose", "PanelRightClose",
  "Activity", "Airplay", "AlertCircle", "AlertOctagon", "AlertTriangle", "AlignCenter", "AlignJustify",
  "AlignLeft", "AlignRight", "Anchor", "Aperture", "Archive", "ArrowBigDown", "ArrowBigLeft", "ArrowBigRight",
  "ArrowBigUp", "ArrowDown", "ArrowDownCircle", "ArrowDownLeft", "ArrowDownRight", "ArrowLeft", "ArrowLeftCircle",
  "ArrowLeftRight", "ArrowRight", "ArrowRightCircle", "ArrowUp", "ArrowUpCircle", "ArrowUpDown", "ArrowUpLeft",
  "ArrowUpRight", "AtSign", "Award", "Axe", "Axis3d", "Baby", "Backpack", "BaggageClaim", "Banana", "Banknote",
  "BarChart", "BarChart2", "BarChart3", "BarChart4", "BarChartHorizontal", "Baseline", "Bath", "Battery",
  "BatteryCharging", "BatteryFull", "BatteryLow", "BatteryMedium", "Beaker", "Bean", "Bed", "BedDouble",
  "BedSingle", "Beef", "Beer", "Bell", "BellMinus", "BellOff", "BellPlus", "BellRing", "Bike", "Binary",
  "Bird", "Bitcoin", "Blinds", "Bluetooth", "BluetoothConnected", "BluetoothOff", "BluetoothSearching",
  "Bold", "Bomb", "Bone", "Book", "BookCheck", "BookCopy", "BookDown", "BookHeart", "BookImage", "BookKey",
  "BookLock", "BookMarked", "BookMinus", "BookOpen", "BookOpenCheck", "BookPlus", "BookText", "BookUp",
  "BookX", "Bookmark", "BookmarkMinus", "BookmarkPlus", "Bot", "Box", "BoxSelect", "Boxes", "Brain", "Briefcase",
  "Brush", "Bug", "Building", "Building2", "Bus", "Cable", "Cake", "Calculator", "Calendar", "CalendarCheck",
  "CalendarCheck2", "CalendarClock", "CalendarDays", "CalendarHeart", "CalendarMinus", "CalendarOff",
  "CalendarPlus", "CalendarRange", "CalendarSearch", "CalendarX", "CalendarX2", "Camera", "CameraOff",
  "Car", "CarFront", "CarTaxiFront", "Carrot", "Cast", "Cat", "ChartArea", "ChartBar", "ChartBarBig", "ChartCandlestick",
  "ChartColumn", "ChartColumnBig", "ChartLine", "ChartNetwork", "ChartPie", "ChartScatter", "Check", "CheckCheck",
  "CheckCircle", "CheckCircle2", "CheckSquare", "ChefHat", "Cherry", "ChevronDown", "ChevronDownCircle",
  "ChevronFirst", "ChevronLast", "ChevronLeft", "ChevronLeftCircle", "ChevronRight", "ChevronRightCircle",
  "ChevronsDown", "ChevronsDownUp", "ChevronsLeft", "ChevronsLeftRight", "ChevronsRight", "ChevronsRightLeft",
  "ChevronsUp", "ChevronsUpDown", "ChevronUp", "ChevronUpCircle", "Chrome", "Cigarette", "CigaretteOff",
  "Circle", "CircleDashed", "CircleDollarSign", "CircleDot", "CircleEllipsis", "CircleEqual", "CircleOff",
  "CircleSlash", "CircleSlash2", "CircleUser", "CircleUserRound", "CircuitBoard", "Citrus", "Clapperboard",
  "Clipboard", "ClipboardCheck", "ClipboardCopy", "ClipboardEdit", "ClipboardList", "ClipboardPaste",
  "ClipboardSignature", "ClipboardType", "ClipboardX", "Clock", "Clock1", "Clock10", "Clock11", "Clock12",
  "Clock2", "Clock3", "Clock4", "Clock5", "Clock6", "Clock7", "Clock8", "Clock9", "ClockAlert", "ClockArrowDown",
  "ClockArrowUp", "Cloud", "CloudCog", "CloudDownload", "CloudDrizzle", "CloudFog", "CloudHail", "CloudLightning",
  "CloudMoon", "CloudMoonRain", "CloudOff", "CloudRain", "CloudRainWind", "CloudSnow", "CloudSun", "CloudSunRain",
  "CloudUpload", "Cloudy", "Clover", "Club", "Code", "Code2", "CodeSquare", "Codepen", "Codesandbox", "Coffee",
  "Cog", "Coins", "Columns", "Columns2", "Columns3", "Columns4", "Combine", "Command", "Compass", "Component",
  "Computer", "ConciergeBell", "Cone", "Construction", "Contact", "Contact2", "Container", "Contrast",
  "Cookie", "Copy", "CopyCheck", "CopyMinus", "CopyPlus", "CopySlash", "CopyX", "Cpu", "CreativeCommons",
  "CreditCard", "Croissant", "Crop", "Cross", "Crosshair", "Crown", "Cuboid", "CupSoda", "CurlyBraces", "Currency",
  "Database", "DatabaseBackup", "Delete", "Dessert", "Diameter", "Diamond", "Dice1", "Dice2", "Dice3", "Dice4",
  "Dice5", "Dice6", "Dices", "Diff", "Disc", "Disc2", "Disc3", "Divide", "DivideCircle", "DivideSquare",
  "Dna", "DnaOff", "Dog", "DollarSign", "Donut", "DoorClosed", "DoorOpen", "Dot", "Download", "DownloadCloud",
  "Dribbble", "Droplet", "Droplets", "Drum", "Drumstick", "Dumbbell", "Ear", "EarOff", "Egg", "EggFried",
  "EggOff", "Equal", "EqualNot", "Eraser", "Euro", "Expand", "ExternalLink", "Eye", "EyeOff", "Facebook",
  "Factory", "Fan", "FastForward", "Feather", "Figma", "File", "FileArchive", "FileAudio", "FileAudio2",
  "FileAxis3d", "FileBadge", "FileBadge2", "FileBarChart", "FileBarChart2", "FileBox", "FileCheck", "FileCheck2",
  "FileClock", "FileCode", "FileCode2", "FileCog", "FileCog2", "FileDiff", "FileDigit", "FileDown", "FileEdit",
  "FileEdit2", "FileHeart", "FileImage", "FileInput", "FileJson", "FileJson2", "FileKey", "FileKey2",
  "FileLineChart", "FileLock", "FileLock2", "FileMinus", "FileMinus2", "FileMusic", "FileMusic2", "FileOutput",
  "FilePen", "FilePenLine", "FilePieChart", "FilePlus", "FilePlus2", "FileQuestion", "FileScan", "FileSearch",
  "FileSearch2", "FileSliders", "FileSpreadsheet", "FileStack", "FileSymlink", "FileTerminal", "FileText",
  "FileType", "FileType2", "FileUp", "FileVideo", "FileVideo2", "FileVolume", "FileVolume2", "FileWarning",
  "FileX", "FileX2", "Files", "Film", "Filter", "FilterX", "Fingerprint", "FireExtinguisher", "Fish",
  "FishOff", "FishSymbol", "Flag", "FlagOff", "FlagTriangleLeft", "FlagTriangleRight", "Flame", "Flashlight",
  "FlashlightOff", "FlaskConical", "FlaskRound", "FlipHorizontal", "FlipHorizontal2", "FlipVertical",
  "FlipVertical2", "Flower", "Flower2", "Focus", "FoldHorizontal", "FoldVertical", "Folder", "FolderArchive",
  "FolderCheck", "FolderClock", "FolderClosed", "FolderCog", "FolderCog2", "FolderDot", "FolderDown",
  "FolderEdit", "FolderGit", "FolderGit2", "FolderHeart", "FolderInput", "FolderKanban", "FolderKey",
  "FolderLock", "FolderMinus", "FolderOpen", "FolderOpenDot", "FolderPlus", "FolderRoot", "FolderSearch",
  "FolderSearch2", "FolderSymlink", "FolderSync", "FolderTree", "FolderUp", "FolderX", "Folders", "Footprints",
  "Forklift", "Forward", "Frame", "Framer", "Frown", "Fuel", "Fullscreen", "FunctionSquare", "GalleryHorizontal",
  "GalleryHorizontalEnd", "GalleryThumbnails", "GalleryVertical", "GalleryVerticalEnd", "Gamepad", "Gamepad2",
  "GanttChart", "GanttChartSquare", "Gauge", "GaugeCircle", "Gavel", "Gem", "Ghost", "Gift", "GitBranch",
  "GitBranchPlus", "GitCommit", "GitCompare", "GitCompareArrows", "GitFork", "GitGraph", "GitMerge",
  "GitPullRequest", "GitPullRequestArrow", "GitPullRequestClosed", "GitPullRequestCreate", "GitHub",
  "Gitlab", "GlassWater", "Glasses", "Globe", "Globe2", "Goal", "Grab", "GraduationCap", "Grape", "Grid",
  "Grid2x2", "Grid2x2Check", "Grid2x2X", "Grid3x3", "Grip", "GripHorizontal", "GripVertical", "Group",
  "Hammer", "Hand", "HandHeart", "HandHelping", "HandMetal", "HandPlatter", "Handshake", "HardDrive",
  "HardDriveDownload", "HardDriveUpload", "Hash", "Haze", "HdmiPort", "Heading", "Heading1", "Heading2",
  "Heading3", "Heading4", "Heading5", "Heading6", "Headphones", "Headset", "Heart", "HeartCrack",
  "HeartHandshake", "HeartOff", "HeartPulse", "HelpCircle", "Hexagon", "Highlighter", "History", "Home",
  "Hop", "HopOff", "Hotel", "Hourglass", "IceCream", "IceCream2", "Image", "ImageDown", "ImageMinus",
  "ImageOff", "ImagePlus", "Images", "Import", "Inbox", "Indent", "IndianRupee", "Infinity", "Info", "Inspect",
  "Instagram", "Italic", "IterationCcw", "IterationCw", "JapaneseYen", "Joystick", "Kanban", "KanbanSquare",
  "Key", "KeyRound", "KeySquare", "Keyboard", "KeyboardMusic", "Lamp", "LampCeiling", "LampDesk", "LampFloor",
  "LampWallDown", "LampWallUp", "LandPlot", "Landmark", "Languages", "Laptop", "Laptop2", "Lasso", "LassoSelect",
  "Laugh", "Layers", "Layout", "LayoutDashboard", "LayoutGrid", "LayoutList", "LayoutPanel", "LayoutPanelLeft",
  "LayoutPanelTop", "LayoutTemplate", "Leaf", "LeafyGreen", "Library", "LifeBuoy", "Ligature", "Lightbulb",
  "LightbulbOff", "LineChart", "Link", "Link2", "Link2Off", "Linkedin", "List", "ListChecks", "ListEnd",
  "ListFilter", "ListMinus", "ListMusic", "ListOrdered", "ListPlus", "ListRestart", "ListStart", "ListTodo",
  "ListTree", "ListVideo", "ListX", "Loader", "Loader2", "Loader3", "Loader4", "LoaderCircle", "LoaderPinwheel",
  "Locate", "LocateFixed", "LocateOff", "Lock", "LockKeyhole", "LockKeyholeOpen", "LockOpen", "LogIn", "LogOut",
  "Lollipop", "Luggage", "Magnet", "Mail", "MailCheck", "MailMinus", "MailOpen", "MailPlus", "MailQuestion",
  "MailSearch", "MailWarning", "MailX", "Mailbox", "Mails", "Map", "MapPin", "MapPinOff", "MapPinned", "Martini",
  "Maximize", "Maximize2", "Medal", "Megaphone", "MegaphoneOff", "Meh", "MemoryStick", "Menu", "MenuSquare",
  "Merge", "MessageCircle", "MessageCircleCode", "MessageCircleDashed", "MessageCircleHeart", "MessageCircleMore",
  "MessageCircleOff", "MessageCirclePlus", "MessageCircleQuestion", "MessageCircleReply", "MessageCircleWarning",
  "MessageCircleX", "MessageSquare", "MessageSquareCode", "MessageSquareDashed", "MessageSquareDiff", "MessageSquareDot",
  "MessageSquareHeart", "MessageSquareLock", "MessageSquareMore", "MessageSquareOff", "MessageSquarePlus",
  "MessageSquareQuote", "MessageSquareReply", "MessageSquareShare", "MessageSquareText", "MessageSquareWarning",
  "MessageSquareX", "MessagesSquare", "Mic", "Mic2", "MicOff", "Microscope", "Microwave", "Milestone", "Milk",
  "MilkOff", "Minimize", "Minimize2", "Minus", "MinusCircle", "MinusSquare", "Monitor", "MonitorCheck",
  "MonitorCog", "MonitorDot", "MonitorDown", "MonitorOff", "MonitorPause", "MonitorPlay", "MonitorSmartphone",
  "MonitorSpeaker", "MonitorUp", "MonitorX", "Moon", "MoonStar", "MoreHorizontal", "MoreVertical", "Mountain",
  "MountainSnow", "Mouse", "MouseOff", "MousePointer", "MousePointer2", "MousePointerClick", "MousePointerSquare",
  "MousePointerSquareDashed", "Move", "Move3d", "MoveDiagonal", "MoveDiagonal2", "MoveDown", "MoveDownLeft",
  "MoveDownRight", "MoveHorizontal", "MoveLeft", "MoveRight", "MoveUp", "MoveUpLeft", "MoveUpRight", "MoveVertical",
  "Music", "Music2", "Music3", "Music4", "Navigation", "Navigation2", "Navigation2Off", "NavigationOff", "Network",
  "Newspaper", "Nfc", "Notebook", "NotebookPen", "NotebookTabs", "NotebookText", "NotepadText", "NotepadTextDashed",
  "Nut", "NutOff", "Octagon", "OctagonAlert", "OctagonPause", "OctagonX", "Option", "Orbit", "Outdent",
  "Package", "Package2", "PackageCheck", "PackageMinus", "PackageOpen", "PackagePlus", "PackageSearch",
  "PackageX", "PaintBucket", "Paintbrush", "Paintbrush2", "Palette", "PanelBottom", "PanelBottomClose",
  "PanelBottomDashed", "PanelBottomOpen", "PanelLeft", "PanelLeftClose", "PanelLeftDashed", "PanelLeftOpen",
  "PanelRight", "PanelRightClose", "PanelRightDashed", "PanelRightOpen", "PanelTop", "PanelTopClose",
  "PanelTopDashed", "PanelTopOpen", "PanelsLeftBottom", "PanelsRightBottom", "PanelsTopBottom", "PanelsTopLeft",
  "Paperclip", "Parentheses", "ParkingCircle", "ParkingCircleOff", "ParkingSquare", "ParkingSquareOff",
  "PartyPopper", "Pause", "PauseCircle", "PauseOctagon", "PawPrint", "PcCase", "Pen", "PenLine", "PenSquare",
  "PenTool", "Pencil", "PencilLine", "PencilRuler", "Pentagon", "Percent", "PercentCircle", "PercentDiamond",
  "PercentSquare", "PersonStanding", "Phone", "PhoneCall", "PhoneCallForwarded", "PhoneForwarded", "PhoneIncoming",
  "PhoneMissed", "PhoneOff", "PhoneOutgoing", "PhoneRing", "PhoneRingVolume", "Pi", "Piano", "Pickaxe", "PictureInPicture",
  "PictureInPicture2", "PieChart", "PiggyBank", "Pilcrow", "PilcrowSquare", "Pill", "PillBottle", "Pin",
  "PinOff", "Pipette", "Pizza", "Plane", "PlaneLanding", "PlaneTakeoff", "Play", "PlayCircle", "PlaySquare",
  "Plug", "Plug2", "PlugZap", "Plus", "PlusCircle", "PlusSquare", "Pocket", "PocketKnife", "Podcast", "Pointer",
  "PointerOff", "Popcorn", "Popsicle", "PoundSterling", "Power", "PowerOff", "Presentation", "Printer", "PrinterCheck",
  "Projector", "Puzzle", "QrCode", "Quote", "Rabbit", "Radar", "Radiation", "Radio", "RadioReceiver", "RadioTower",
  "Radius", "RailSymbol", "Rainbow", "Rat", "Ratio", "Receipt", "ReceiptCent", "ReceiptEuro", "ReceiptIndianRupee",
  "ReceiptJapaneseYen", "ReceiptPoundSterling", "ReceiptRussianRuble", "ReceiptSwissFranc", "ReceiptText",
  "RectangleHorizontal", "RectangleVertical", "Recycle", "Redo", "Redo2", "RedoDot", "RefreshCcw", "RefreshCcwDot",
  "RefreshCw", "RefreshCwOff", "Refrigerator", "Regex", "RemoveFormatting", "Repeat", "Repeat1", "Repeat2",
  "Replace", "ReplaceAll", "Reply", "ReplyAll", "Rewind", "Ribbon", "Rocket", "RockingChair", "RollerCoaster",
  "Rotate3d", "RotateCcw", "RotateCcwKey", "RotateCcwSquare", "RotateCw", "RotateCwSquare", "Route", "RouteOff",
  "Router", "Rows", "Rows2", "Rows3", "Rows4", "Rss", "Ruler", "RussianRuble", "Sailboat", "Salad", "Sandwich",
  "Satellite", "SatelliteDish", "Save", "SaveAll", "Scale", "Scaling", "Scan", "ScanBarcode", "ScanEye",
  "ScanFace", "ScanLine", "ScanSearch", "ScanText", "School", "School2", "Scissors", "ScissorsLineDashed",
  "ScreenShare", "ScreenShareOff", "Scroll", "ScrollText", "Search", "SearchCheck", "SearchCode", "SearchSlash",
  "SearchX", "Send", "SendHorizonal", "SendToBack", "SeparatorHorizontal", "SeparatorVertical", "Server",
  "ServerCog", "ServerCrash", "ServerOff", "Settings", "Settings2", "Shapes", "Share", "Share2", "Sheet",
  "Shell", "Shield", "ShieldAlert", "ShieldBan", "ShieldCheck", "ShieldEllipsis", "ShieldHalf", "ShieldMinus",
  "ShieldOff", "ShieldPlus", "ShieldQuestion", "ShieldUser", "ShieldX", "Ship", "ShipWheel", "Shirt",
  "ShoppingBag", "ShoppingBasket", "ShoppingCart", "Shovel", "ShowerHead", "Shrink", "Shrub", "Shuffle",
  "Sigma", "SigmaSquare", "Signal", "SignalHigh", "SignalLow", "SignalMedium", "SignalZero", "Signpost",
  "SignpostBig", "Siren", "SkipBack", "SkipForward", "Skull", "Slack", "Slash", "SlashSquare", "Slice",
  "Sliders", "SlidersHorizontal", "Smartphone", "SmartphoneCharging", "SmartphoneNfc", "Smile", "SmilePlus",
  "Snail", "Snowflake", "Sofa", "Sort", "SortAsc", "SortDesc", "Soup", "Space", "Spade", "Sparkle", "Sparkles",
  "Speaker", "Speech", "SpellCheck", "SpellCheck2", "Spline", "Split", "SplitSquareHorizontal", "SplitSquareVertical",
  "SprayCan", "Sprout", "Square", "SquareAsterisk", "SquareCheck", "SquareCheckBig", "SquareCode", "SquareDashed",
  "SquareDashedBottom", "SquareDashedBottomCode", "SquareDot", "SquareEqual", "SquareGantt", "SquareKanban",
  "SquareLibrary", "SquareM", "SquareMenu", "SquareMinus", "SquareMousePointer", "SquarePen", "SquarePercent",
  "SquarePi", "SquarePilcrow", "SquarePlay", "SquarePlus", "SquarePower", "SquareRadical", "SquareRoundCorner",
  "SquareScissors", "SquareSigma", "SquareSlash", "SquareSplitHorizontal", "SquareSplitVertical", "SquareStack",
  "SquareStackMixed", "SquareTerminal", "SquareUser", "SquareUserRound", "SquareX", "Squircle", "Squirrel",
  "Stamp", "Star", "StarHalf", "StarOff", "Stars", "StepBack", "StepForward", "Stethoscope", "Sticker",
  "StickyNote", "Store", "StretchHorizontal", "StretchVertical", "Strikethrough", "Subscript", "Subtitles",
  "Sun", "SunDim", "SunMedium", "SunMoon", "SunSnow", "Sunrise", "Sunset", "Superscript", "SwatchBook",
  "SwissFranc", "SwitchCamera", "Sword", "Swords", "Syringe", "Table", "Table2", "TableCells", "TableCellsMerge",
  "TableCellsSplit", "TableColumns", "TableColumnsSplit", "TableProperties", "TableRows", "TableRowsSplit",
  "Tablet", "TabletSmartphone", "Tablets", "Tag", "Tags", "Tally1", "Tally2", "Tally3", "Tally4", "Tally5",
  "Tangent", "Target", "Tent", "TentTree", "Terminal", "TerminalSquare", "TestTube", "TestTube2", "TestTubes",
  "Text", "TextCursor", "TextCursorInput", "TextQuote", "TextSearch", "TextSelect", "Theater", "Thermometer",
  "ThermometerSnowflake", "ThermometerSun", "ThumbsDown", "ThumbsUp", "Ticket", "TicketCheck", "TicketMinus",
  "TicketPercent", "TicketPlus", "TicketSlash", "TicketX", "Timer", "TimerOff", "TimerReset", "ToggleLeft",
  "ToggleRight", "Toilet", "Tornado", "Torus", "Touchpad", "TouchpadOff", "TowerControl", "ToyBrick", "Tractor",
  "TrafficCone", "Train", "TrainFront", "TrainFrontTunnel", "TrainTrack", "TramFront", "Trash", "Trash2",
  "TreeDeciduous", "TreePalm", "TreePine", "Trees", "Trello", "TrendingDown", "TrendingUp", "Trophy", "Truck",
  "Turtle", "Tv", "Tv2", "Twitch", "Twitter", "Type", "Umbrella", "UmbrellaOff", "Underline", "Undo", "Undo2",
  "UndoDot", "UnfoldHorizontal", "UnfoldVertical", "Ungroup", "Unlink", "Unlink2", "Unlock", "UnlockKeyhole",
  "Unplug", "Upload", "UploadCloud", "Usb", "User", "User2", "UserCheck", "UserCheck2", "UserCircle",
  "UserCircle2", "UserCog", "UserCog2", "UserMinus", "UserMinus2", "UserPlus", "UserPlus2", "UserRound",
  "UserRoundCheck", "UserRoundCog", "UserRoundMinus", "UserRoundPlus", "UserRoundSearch", "UserRoundX",
  "UserSearch", "UserSquare", "UserSquare2", "UserX", "UserX2", "Users", "Users2", "UsersRound", "Utensils",
  "UtensilsCrossed", "UtilityPole", "Variable", "Vault", "Vegan", "VenetianMask", "Vibrate", "VibrateOff",
  "Video", "VideoOff", "Videotape", "View", "Voicemail", "Volume", "Volume1", "Volume2", "VolumeX", "Vote",
  "Wallet", "Wallet2", "WalletCards", "Wallpaper", "Wand", "Wand2", "Warehouse", "Watch", "Waves", "Webcam",
  "WebcamOff", "Webhook", "WebhookOff", "Weight", "Wheat", "WheatOff", "WholeWord", "Wifi", "WifiOff",
  "Wind", "Wine", "WineOff", "Workflow", "WrapText", "Wrench", "X", "XCircle", "XOctagon", "XSquare",
  "Youtube", "Zap", "ZapOff", "ZoomIn", "ZoomOut",
];

const m: Record<string, IconComp> = {};
for (const n of names) m[n] = get(n);

export {
  m as default,
};

// Also named exports — the common pattern.
export const Activity: IconComp = m.Activity;
export const Airplay: IconComp = m.Airplay;
export const AlertCircle: IconComp = m.AlertCircle;
export const AlertTriangle: IconComp = m.AlertTriangle;
export const ArrowRight: IconComp = m.ArrowRight;
export const ArrowLeft: IconComp = m.ArrowLeft;
export const ArrowUp: IconComp = m.ArrowUp;
export const ArrowDown: IconComp = m.ArrowDown;
export const Bell: IconComp = m.Bell;
export const Check: IconComp = m.Check;
export const ChevronRight: IconComp = m.ChevronRight;
export const ChevronDown: IconComp = m.ChevronDown;
export const ChevronUp: IconComp = m.ChevronUp;
export const ChevronLeft: IconComp = m.ChevronLeft;
export const Copy: IconComp = m.Copy;
export const Calendar: IconComp = m.Calendar;
export const Clock: IconComp = m.Clock;
export const X: IconComp = m.X;
export const Search: IconComp = m.Search;
export const Settings: IconComp = m.Settings;
export const Star: IconComp = m.Star;
export const Heart: IconComp = m.Heart;
export const Plus: IconComp = m.Plus;
export const Minus: IconComp = m.Minus;
export const Eye: IconComp = m.Eye;
export const EyeOff: IconComp = m.EyeOff;
export const Grid: IconComp = m.Grid;
export const List: IconComp = m.List;
export const Menu: IconComp = m.Menu;
export const Mail: IconComp = m.Mail;
export const User: IconComp = m.User;
export const Users: IconComp = m.Users;
export const Home: IconComp = m.Home;
export const Filter: IconComp = m.Filter;
export const Trash: IconComp = m.Trash;
export const Trash2: IconComp = m.Trash2;
export const Download: IconComp = m.Download;
export const Upload: IconComp = m.Upload;
export const Sun: IconComp = m.Sun;
export const Moon: IconComp = m.Moon;
export const MoreHorizontal: IconComp = m.MoreHorizontal;
export const MoreVertical: IconComp = m.MoreVertical;
export const Pencil: IconComp = m.Pencil;
export const Save: IconComp = m.Save;
export const Share: IconComp = m.Share;
export const Link: IconComp = m.Link;
export const Tag: IconComp = m.Tag;
export const Info: IconComp = m.Info;
export const HelpCircle: IconComp = m.HelpCircle;
export const File: IconComp = m.File;
export const FileText: IconComp = m.FileText;
export const Folder: IconComp = m.Folder;
export const Image: IconComp = m.Image;
export const ExternalLink: IconComp = m.ExternalLink;
export const Lock: IconComp = m.Lock;
export const Send: IconComp = m.Send;
export const HeartHandshake: IconComp = m.HeartHandshake;
export const Github: IconComp = m.Github;
export const Hash: IconComp = m.Hash;
export const AtSign: IconComp = m.AtSign;
export const Bookmark: IconComp = m.Bookmark;
export const Camera: IconComp = m.Camera;
export const Layers: IconComp = m.Layers;
export const Loader: IconComp = m.Loader;
export const Loader2: IconComp = m.Loader2;
export const LoaderCircle: IconComp = m.LoaderCircle;
export const RefreshCcw: IconComp = m.RefreshCcw;
export const RefreshCw: IconComp = m.RefreshCw;
export const BarChart: IconComp = m.BarChart;
export const BarChart2: IconComp = m.BarChart2;
export const BarChart3: IconComp = m.BarChart3;
export const BarChart4: IconComp = m.BarChart4;
export const BarChartHorizontal: IconComp = m.BarChartHorizontal;
export const PieChart: IconComp = m.PieChart;
export const LineChart: IconComp = m.LineChart;
export const TrendingUp: IconComp = m.TrendingUp;
export const TrendingDown: IconComp = m.TrendingDown;
export const Sparkles: IconComp = m.Sparkles;
export const Wand: IconComp = m.Wand;
export const Wand2: IconComp = m.Wand2;
export const MousePointer: IconComp = m.MousePointer;
export const MousePointerClick: IconComp = m.MousePointerClick;
export const Pointer: IconComp = m.Pointer;
export const PanelLeft: IconComp = m.PanelLeft;
export const PanelRight: IconComp = m.PanelRight;
export const Layout: IconComp = m.Layout;
export const LayoutGrid: IconComp = m.LayoutGrid;
export const Command: IconComp = m.Command;
export const Terminal: IconComp = m.Terminal;
export const Code: IconComp = m.Code;
export const Code2: IconComp = m.Code2;
export const Crop: IconComp = m.Crop;
export const Scissors: IconComp = m.Scissors;
export const Paperclip: IconComp = m.Paperclip;
export const Notebook: IconComp = m.Notebook;
export const Lightbulb: IconComp = m.Lightbulb;
export const Rocket: IconComp = m.Rocket;
export const Wrench: IconComp = m.Wrench;
export const Cog: IconComp = m.Cog;
export const Cpu: IconComp = m.Cpu;
export const Bot: IconComp = m.Bot;
export const Brain: IconComp = m.Brain;
export const Cloud: IconComp = m.Cloud;
export const Database: IconComp = m.Database;
export const Server: IconComp = m.Server;
export const Wifi: IconComp = m.Wifi;
export const Bluetooth: IconComp = m.Bluetooth;
export const Power: IconComp = m.Power;
export const LogOut: IconComp = m.LogOut;
export const LogIn: IconComp = m.LogIn;
export const Move: IconComp = m.Move;
export const Maximize: IconComp = m.Maximize;
export const Maximize2: IconComp = m.Maximize2;
export const Minimize: IconComp = m.Minimize;
export const Minimize2: IconComp = m.Minimize2;
export const XCircle: IconComp = m.XCircle;
export const CheckCircle: IconComp = m.CheckCircle;
export const CheckCircle2: IconComp = m.CheckCircle2;
export const AlertOctagon: IconComp = m.AlertOctagon;
export const Circle: IconComp = m.Circle;
export const Square: IconComp = m.Square;
export const Triangle: IconComp = m.Triangle;
export const Hexagon: IconComp = m.Hexagon;
export const Octagon: IconComp = m.Octagon;
export const Diamond: IconComp = m.Diamond;
export const Zap: IconComp = m.Zap;
export const ZapOff: IconComp = m.ZapOff;
export const Play: IconComp = m.Play;
export const Pause: IconComp = m.Pause;
export const Stop: IconComp = m.Square;
export const SkipBack: IconComp = m.SkipBack;
export const SkipForward: IconComp = m.SkipForward;
export const Rewind: IconComp = m.Rewind;
export const FastForward: IconComp = m.FastForward;
export const Volume2: IconComp = m.Volume2;
export const VolumeX: IconComp = m.VolumeX;
export const Mic: IconComp = m.Mic;
export const MicOff: IconComp = m.MicOff;
export const Video: IconComp = m.Video;
export const VideoOff: IconComp = m.VideoOff;
export const Monitor: IconComp = m.Monitor;
export const Smartphone: IconComp = m.Smartphone;
export const Tablet: IconComp = m.Tablet;
export const Watch: IconComp = m.Watch;
export const Tv: IconComp = m.Tv;
export const Globe: IconComp = m.Globe;
export const Compass: IconComp = m.Compass;
export const Map: IconComp = m.Map;
export const MapPin: IconComp = m.MapPin;
export const Navigation: IconComp = m.Navigation;
export const Flag: IconComp = m.Flag;
export const Award: IconComp = m.Award;
export const Crown: IconComp = m.Crown;
export const Medal: IconComp = m.Medal;
export const StarHalf: IconComp = m.StarHalf;
export const StarOff: IconComp = m.StarOff;
export const HeartHandshake2: IconComp = m.HeartHandshake;
export const HeartOff: IconComp = m.HeartOff;
export const HeartPulse: IconComp = m.HeartPulse;
export const HeartCrack: IconComp = m.HeartCrack;
export const Smile: IconComp = m.Smile;
export const SmilePlus: IconComp = m.SmilePlus;
export const Frown: IconComp = m.Frown;
export const Meh: IconComp = m.Meh;
export const Laugh: IconComp = m.Laugh;
export const ThumbsUp: IconComp = m.ThumbsUp;
export const ThumbsDown: IconComp = m.ThumbsDown;
export const GitBranch: IconComp = m.GitBranch;
export const GitCommit: IconComp = m.GitCommit;
export const GitMerge: IconComp = m.GitMerge;
export const GitPullRequest: IconComp = m.GitPullRequest;
export const GitFork: IconComp = m.GitFork;
export const Box: IconComp = m.Box;
export const Archive: IconComp = m.Archive;
export const Package: IconComp = m.Package;
export const Package2: IconComp = m.Package2;
export const Truck: IconComp = m.Truck;
export const ShoppingCart: IconComp = m.ShoppingCart;
export const ShoppingBag: IconComp = m.ShoppingBag;
export const CreditCard: IconComp = m.CreditCard;
export const DollarSign: IconComp = m.DollarSign;
export const Euro: IconComp = m.Euro;
export const PoundSterling: IconComp = m.PoundSterling;
export const JapaneseYen: IconComp = m.JapaneseYen;
export const RussianRuble: IconComp = m.RussianRuble;
export const IndianRupee: IconComp = m.IndianRupee;
export const SwissFranc: IconComp = m.SwissFranc;
export const Bitcoin: IconComp = m.Bitcoin;
export const Type: IconComp = m.Type;
export const Bold: IconComp = m.Bold;
export const Italic: IconComp = m.Italic;
export const Underline: IconComp = m.Underline;
export const Strikethrough: IconComp = m.Strikethrough;
export const AlignLeft: IconComp = m.AlignLeft;
export const AlignRight: IconComp = m.AlignRight;
export const AlignCenter: IconComp = m.AlignCenter;
export const AlignJustify: IconComp = m.AlignJustify;
export const Heading: IconComp = m.Heading;
export const Heading1: IconComp = m.Heading1;
export const Heading2: IconComp = m.Heading2;
export const Heading3: IconComp = m.Heading3;
export const Heading4: IconComp = m.Heading4;
export const Heading5: IconComp = m.Heading5;
export const Heading6: IconComp = m.Heading6;
export const ListChecks: IconComp = m.ListChecks;
export const ListOrdered: IconComp = m.ListOrdered;
export const ListTodo: IconComp = m.ListTodo;
export const Clipboard: IconComp = m.Clipboard;
export const ClipboardCheck: IconComp = m.ClipboardCheck;
export const ClipboardCopy: IconComp = m.ClipboardCopy;
export const ClipboardList: IconComp = m.ClipboardList;
export const ClipboardPaste: IconComp = m.ClipboardPaste;
export const ClipboardEdit: IconComp = m.ClipboardEdit;
export const Pen: IconComp = m.Pen;
export const PenLine: IconComp = m.PenLine;
export const PenSquare: IconComp = m.PenSquare;
export const PenTool: IconComp = m.PenTool;
export const PencilRuler: IconComp = m.PencilRuler;
export const PencilLine: IconComp = m.PencilLine;
export const RotateCcw: IconComp = m.RotateCcw;
export const RotateCw: IconComp = m.RotateCw;
export const Move3d: IconComp = m.Move3d;
export const Scaling: IconComp = m.Scaling;
export const Frame: IconComp = m.Frame;
export const Grip: IconComp = m.Grip;
export const GripHorizontal: IconComp = m.GripHorizontal;
export const GripVertical: IconComp = m.GripVertical;
export const Columns: IconComp = m.Columns;
export const Columns2: IconComp = m.Columns2;
export const Columns3: IconComp = m.Columns3;
export const Rows: IconComp = m.Rows;
export const Rows2: IconComp = m.Rows2;
export const Rows3: IconComp = m.Rows3;
export const Table: IconComp = m.Table;
export const Table2: IconComp = m.Table2;
export const Sliders: IconComp = m.Sliders;
export const SlidersHorizontal: IconComp = m.SlidersHorizontal;
export const SlidersVertical: IconComp = m.SlidersHorizontal;
export const Settings2: IconComp = m.Settings2;
export const Component: IconComp = m.Component;
export const Shapes: IconComp = m.Shapes;
export const Sparkle: IconComp = m.Sparkle;
export const BellOff: IconComp = m.BellOff;
export const BellRing: IconComp = m.BellRing;
export const BellMinus: IconComp = m.BellMinus;
export const BellPlus: IconComp = m.BellPlus;
export const Inbox: IconComp = m.Inbox;
export const Send2: IconComp = m.Send;
export const MessagesSquare: IconComp = m.MessagesSquare;
export const MessageCircle: IconComp = m.MessageCircle;
export const MessageSquare: IconComp = m.MessageSquare;
export const AtSign2: IconComp = m.AtSign;
export const AtSignIcon: IconComp = m.AtSign;
export const SendIcon: IconComp = m.Send;
export const StarIcon: IconComp = m.Star;
export const ArrowRightIcon: IconComp = m.ArrowRight;
export const ArrowLeftIcon: IconComp = m.ArrowLeft;
export const ChevronRightIcon: IconComp = m.ChevronRight;
export const ChevronDownIcon: IconComp = m.ChevronDown;
export const ChevronUpIcon: IconComp = m.ChevronUp;
export const ChevronLeftIcon: IconComp = m.ChevronLeft;
export const CheckIcon: IconComp = m.Check;
export const XIcon: IconComp = m.X;
export const PlusIcon: IconComp = m.Plus;
export const MinusIcon: IconComp = m.Minus;
export const SearchIcon: IconComp = m.Search;
export const MenuIcon: IconComp = m.Menu;
export const CopyIcon: IconComp = m.Copy;
export const CalendarIcon: IconComp = m.Calendar;
export const ClockIcon: IconComp = m.Clock;
export const EyeIcon: IconComp = m.Eye;
export const EyeOffIcon: IconComp = m.EyeOff;
export const TrashIcon: IconComp = m.Trash;
export const PencilIcon: IconComp = m.Pencil;
export const SettingsIcon: IconComp = m.Settings;
export const SunIcon: IconComp = m.Sun;
export const MoonIcon: IconComp = m.Moon;
export const BellIcon: IconComp = m.Bell;
export const FilterIcon: IconComp = m.Filter;
export const GridIcon: IconComp = m.Grid;
export const ListIcon: IconComp = m.List;
export const MailIcon: IconComp = m.Mail;
export const UserIcon: IconComp = m.User;
export const UsersIcon: IconComp = m.Users;
export const HomeIcon: IconComp = m.Home;
export const InfoIcon: IconComp = m.Info;
export const AlertCircleIcon: IconComp = m.AlertCircle;
export const AlertTriangleIcon: IconComp = m.AlertTriangle;
export const HelpCircleIcon: IconComp = m.HelpCircle;
export const FileIcon: IconComp = m.File;
export const FileTextIcon: IconComp = m.FileText;
export const FolderIcon: IconComp = m.Folder;
export const ImageIcon: IconComp = m.Image;
export const ExternalLinkIcon: IconComp = m.ExternalLink;
export const LockIcon: IconComp = m.Lock;
export const HeartIcon: IconComp = m.Heart;
export const HashIcon: IconComp = m.Hash;
export const BookmarkIcon: IconComp = m.Bookmark;
export const TagIcon: IconComp = m.Tag;
export const CameraIcon: IconComp = m.Camera;
export const LayersIcon: IconComp = m.Layers;
export const RefreshCwIcon: IconComp = m.RefreshCw;
export const RefreshCcwIcon: IconComp = m.RefreshCcw;
export const SparklesIcon: IconComp = m.Sparkles;
export const CloudIcon: IconComp = m.Cloud;
export const DatabaseIcon: IconComp = m.Database;
export const ServerIcon: IconComp = m.Server;
export const WifiIcon: IconComp = m.Wifi;
export const BluetoothIcon: IconComp = m.Bluetooth;
export const PowerIcon: IconComp = m.Power;
export const LogOutIcon: IconComp = m.LogOut;
export const LogInIcon: IconComp = m.LogIn;
export const MaximizeIcon: IconComp = m.Maximize;
export const MinimizeIcon: IconComp = m.Minimize;
export const PlayIcon: IconComp = m.Play;
export const PauseIcon: IconComp = m.Pause;
export const VideoIcon: IconComp = m.Video;
export const MonitorIcon: IconComp = m.Monitor;
export const SmartphoneIcon: IconComp = m.Smartphone;
export const GlobeIcon: IconComp = m.Globe;
export const CompassIcon: IconComp = m.Compass;
export const MapIcon: IconComp = m.Map;
export const MapPinIcon: IconComp = m.MapPin;
export const NavigationIcon: IconComp = m.Navigation;
export const FlagIcon: IconComp = m.Flag;
export const AwardIcon: IconComp = m.Award;
export const StarHalfIcon: IconComp = m.StarHalf;
export const HeartOffIcon: IconComp = m.HeartOff;
export const HeartPulseIcon: IconComp = m.HeartPulse;
export const SmileIcon: IconComp = m.Smile;
export const FrownIcon: IconComp = m.Frown;
export const ThumbsUpIcon: IconComp = m.ThumbsUp;
export const ThumbsDownIcon: IconComp = m.ThumbsDown;
export const TypeIcon: IconComp = m.Type;
export const BoldIcon: IconComp = m.Bold;
export const ItalicIcon: IconComp = m.Italic;
export const UnderlineIcon: IconComp = m.Underline;
export const HeadingIcon: IconComp = m.Heading;
export const ClipboardIcon: IconComp = m.Clipboard;
export const PenIcon: IconComp = m.Pen;
export const PenLineIcon: IconComp = m.PenLine;
export const Settings2Icon: IconComp = m.Settings2;
export const RotateCcwIcon: IconComp = m.RotateCcw;
export const RotateCwIcon: IconComp = m.RotateCw;
export const GripVerticalIcon: IconComp = m.GripVertical;
export const SlidersIcon: IconComp = m.Sliders;
export const InboxIcon: IconComp = m.Inbox;
export const MessageCircleIcon: IconComp = m.MessageCircle;
export const MessageSquareIcon: IconComp = m.MessageSquare;
export const LoaderIcon: IconComp = m.Loader;
export const Loader2Icon: IconComp = m.Loader2;
export const LoaderCircleIcon: IconComp = m.LoaderCircle;
export const FullscreenIcon: IconComp = m.Fullscreen;
export const Fullscreen: IconComp = m.Fullscreen;
export const AreaChartIcon: IconComp = m.ChartArea;
export const AreaChart: IconComp = m.ChartArea;
export const BarChartBigIcon: IconComp = m.ChartBarBig;
export const BarChartBig: IconComp = m.ChartBarBig;
export const ChartArea: IconComp = m.ChartArea;
export const ChartBar: IconComp = m.BarChart;
export const ChartBarBig: IconComp = m.ChartBarBig;
export const ChartColumn: IconComp = m.ChartColumn;
export const ChartColumnBig: IconComp = m.ChartColumnBig;
export const ChartLine: IconComp = m.LineChart;
export const ChartPie: IconComp = m.PieChart;
export const ChartScatter: IconComp = m.ChartScatter;
export const ChartNetwork: IconComp = m.ChartNetwork;
export const ChartCandlestick: IconComp = m.ChartCandlestick;
export const HexagonIcon: IconComp = m.Hexagon;
export const OctagonIcon: IconComp = m.Octagon;
export const MousePointer2Icon: IconComp = m.MousePointer2;
export const MousePointer2: IconComp = m.MousePointer2;
export const RadarIcon: IconComp = m.Radar;
export const Radar: IconComp = m.Radar;
export const ArrowUpIcon: IconComp = m.ArrowUp;
export const ArrowDownIcon: IconComp = m.ArrowDown;
export const CornerDownLeftIcon: IconComp = m.CornerDownLeft;
export const CornerDownLeft: IconComp = m.CornerDownLeft;
export const CornerDownRightIcon: IconComp = m.CornerDownRight;
export const CornerDownRight: IconComp = m.CornerDownRight;
export const CornerUpLeftIcon: IconComp = m.CornerUpLeft;
export const CornerUpLeft: IconComp = m.CornerUpLeft;
export const CornerUpRightIcon: IconComp = m.CornerUpRight;
export const CornerUpRight: IconComp = m.CornerUpRight;
export const SquareDashedIcon: IconComp = m.SquareDashed;
export const SquareDashed: IconComp = m.SquareDashed;
export const SquareDashedBottomIcon: IconComp = m.SquareDashedBottom;
export const SquareDashedBottom: IconComp = m.SquareDashedBottom;
export const BadgeCheck: IconComp = m.BadgeCheck;
export const BadgeCheckIcon: IconComp = m.BadgeCheck;
export const BadgePlus: IconComp = m.BadgePlus;
export const BadgePlusIcon: IconComp = m.BadgePlus;
export const BadgeMinus: IconComp = m.BadgeMinus;
export const BadgeMinusIcon: IconComp = m.BadgeMinus;
export const BadgeAlert: IconComp = m.BadgeAlert;
export const BadgeAlertIcon: IconComp = m.BadgeAlert;
export const BadgeInfo: IconComp = m.BadgeInfo;
export const BadgeInfoIcon: IconComp = m.BadgeInfo;
export const BadgeX: IconComp = m.BadgeX;
export const BadgeXIcon: IconComp = m.BadgeX;
export const BadgeDollarSign: IconComp = m.BadgeDollarSign;
export const BadgeDollarSignIcon: IconComp = m.BadgeDollarSign;
export const ChevronsUpDown: IconComp = m.ChevronsUpDown;
export const ChevronsUpDownIcon: IconComp = m.ChevronsUpDown;
export const ChevronsDownIcon: IconComp = m.ChevronsDown;
export const ChevronsUpIcon: IconComp = m.ChevronsUp;
export const ChevronsLeftIcon: IconComp = m.ChevronsLeft;
export const ChevronsRightIcon: IconComp = m.ChevronsRight;
export const ChevronsLeftRightIcon: IconComp = m.ChevronsLeftRight;
export const ChevronsUpDown2: IconComp = m.ChevronsUpDown;
export const MoreHorizontalIcon: IconComp = m.MoreHorizontal;
export const MoreVerticalIcon: IconComp = m.MoreVertical;
export const GalleryHorizontalIcon: IconComp = m.GalleryHorizontal;
export const GalleryHorizontal: IconComp = m.GalleryHorizontal;
export const GalleryHorizontalEndIcon: IconComp = m.GalleryHorizontalEnd;
export const GalleryHorizontalEnd: IconComp = m.GalleryHorizontalEnd;
export const GalleryVerticalIcon: IconComp = m.GalleryVertical;
export const GalleryVerticalEnd: IconComp = m.GalleryVerticalEnd;
export const GalleryThumbnails: IconComp = m.GalleryThumbnails;
export const GalleryThumbnailsIcon: IconComp = m.GalleryThumbnails;
export const IdCard: IconComp = m.IdCard;
export const IdCardIcon: IconComp = m.IdCard;
export const IdCardLanyard: IconComp = m.IdCardLanyard;
export const IdCardLanyardIcon: IconComp = m.IdCardLanyard;
export const Signpost: IconComp = m.Signpost;
export const SignpostBig: IconComp = m.SignpostBig;
export const BotMessageSquare: IconComp = m.MessageSquare;
export const PanelTop: IconComp = m.PanelTop;
export const PanelTopIcon: IconComp = m.PanelTop;
export const PanelBottom: IconComp = m.PanelBottom;
export const PanelBottomIcon: IconComp = m.PanelBottom;
export const PanelLeftDashed: IconComp = m.PanelLeftDashed;
export const PanelLeftDashedIcon: IconComp = m.PanelLeftDashed;
export const PanelRightDashed: IconComp = m.PanelRightDashed;
export const PanelRightDashedIcon: IconComp = m.PanelRightDashed;
export const TerminalSquare: IconComp = m.TerminalSquare;
export const TerminalSquareIcon: IconComp = m.TerminalSquare;
export const ChevronsLeftRight: IconComp = m.ChevronsLeftRight;
export const ChevronsDownUp: IconComp = m.ChevronsDownUp;
export const SquareIcon: IconComp = m.Square;
export const CircleIcon: IconComp = m.Circle;
export const XCircleIcon: IconComp = m.XCircle;
export const CheckCircleIcon: IconComp = m.CheckCircle;
export const TriangleIcon: IconComp = m.Triangle;
export const CodeIcon: IconComp = m.Code;
export const Code2Icon: IconComp = m.Code2;
export const TerminalIcon: IconComp = m.Terminal;
export const RocketIcon: IconComp = m.Rocket;
export const CpuIcon: IconComp = m.Cpu;
export const BotIcon: IconComp = m.Bot;
export const BrainIcon: IconComp = m.Brain;
export const WrenchIcon: IconComp = m.Wrench;
export const CogIcon: IconComp = m.Cog;
export const LinkIcon: IconComp = m.Link;
export const ShareIcon: IconComp = m.Share;
export const PanelLeftIcon: IconComp = m.PanelLeft;
export const PanelRightIcon: IconComp = m.PanelRight;
export const LayoutIcon: IconComp = m.Layout;
export const LayoutGridIcon: IconComp = m.LayoutGrid;
export const MoveIcon: IconComp = m.Move;
export const CropIcon: IconComp = m.Crop;
export const ScissorsIcon: IconComp = m.Scissors;
export const PaperclipIcon: IconComp = m.Paperclip;
export const NotebookIcon: IconComp = m.Notebook;
export const LightbulbIcon: IconComp = m.Lightbulb;
export const DownloadIcon: IconComp = m.Download;
export const UploadIcon: IconComp = m.Upload;
export const PackageIcon: IconComp = m.Package;
export const TruckIcon: IconComp = m.Truck;
export const ShoppingCartIcon: IconComp = m.ShoppingCart;
export const ShoppingBagIcon: IconComp = m.ShoppingBag;
export const CreditCardIcon: IconComp = m.CreditCard;
export const DollarSignIcon: IconComp = m.DollarSign;
export const TrendingUpIcon: IconComp = m.TrendingUp;
export const TrendingDownIcon: IconComp = m.TrendingDown;
export const BarChartIcon: IconComp = m.BarChart;
export const PieChartIcon: IconComp = m.PieChart;
export const LineChartIcon: IconComp = m.LineChart;
export const BoxIcon: IconComp = m.Box;
export const ArchiveIcon: IconComp = m.Archive;
export const GitBranchIcon: IconComp = m.GitBranch;
export const GitCommitIcon: IconComp = m.GitCommit;
export const GitMergeIcon: IconComp = m.GitMerge;
export const GitPullRequestIcon: IconComp = m.GitPullRequest;
export const ListIcon_2: IconComp = m.List;
export const BoxIcon_2: IconComp = m.Box;
export const FormInput: IconComp = m.List;
export const FormIcon: IconComp = m.File;
export const ColumnsIcon: IconComp = m.Columns;
export const RowsIcon: IconComp = m.Rows;
export const CalendarPlusIcon: IconComp = m.Calendar;
export const CalendarMinusIcon: IconComp = m.Calendar;
export const CalendarCheckIcon: IconComp = m.Calendar;
export const CalendarSearchIcon: IconComp = m.Calendar;
export const CalendarClockIcon: IconComp = m.Calendar;
export const CalendarHeartIcon: IconComp = m.Calendar;
export const CalendarRangeIcon: IconComp = m.Calendar;
export const CalendarX2Icon: IconComp = m.Calendar;
export const CalendarXIcon: IconComp = m.Calendar;
export const CalendarOffIcon: IconComp = m.Calendar;
export const CalendarDaysIcon: IconComp = m.Calendar;

// Generic Icon type (lucide-react style)
export type LucideIcon = IconComp;
export type Icon = LucideIcon;
export type LucideProps = React.SVGAttributes<SVGElement> & { size?: number | string; color?: string };
