import {
  RevenueChart,
  AccountAccess,
  AlbumCard,
  BuyInvestment,
  Calendar,
  CardOverview,
  CatalogToolbar,
  ClaimableBalance,
  ContactInformation,
  ContributionHistory,
  CoverArt,
  DividendIncome,
  EmptyConnectBank,
  EmptyDistributeTrack,
  EmptyState,
  Faq,
  GrowthStatistics,
  IndexInvesting,
  InvestmentPortfolio,
  KitchenIsland,
  LoadingState,
  MonthlyActivity,
  NewMilestone,
  NotificationSettings,
  Notifications,
  PaymentCards,
  PaymentLog,
  PaymentThreshold,
  PortfolioBreakdown,
  PowerUsage,
  Preferences,
  QrConnect,
  RecentTransactions,
  ReceivingMethod,
  ReleaseCatalog,
  RollerShades,
  SavingsTarget,
  SocialLinks,
  StockPerformance,
  SyncingState,
  TransferFunds,
  UpcomingPayments,
} from "@/components/widgets"

export function PreviewGrid() {
  return (
    <div className="flex flex-1 flex-col gap-6 bg-background p-4 sm:p-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Overview
        </h1>
        <p className="text-sm text-muted-foreground">
          Live preview — changes in the customizer re-skin this page.
        </p>
      </div>

      <CatalogToolbar />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <RevenueChart />
        <AccountAccess />
        <AlbumCard />
        <BuyInvestment />
        <Calendar />
        <CardOverview />
        <ClaimableBalance />
        <ContactInformation />
        <ContributionHistory />
        <CoverArt />
        <DividendIncome />
        <EmptyConnectBank />
        <EmptyDistributeTrack />
        <EmptyState />
        <Faq />
        <GrowthStatistics />
        <IndexInvesting />
        <InvestmentPortfolio />
        <KitchenIsland />
        <LoadingState />
        <MonthlyActivity />
        <NewMilestone />
        <NotificationSettings />
        <Notifications />
        <PaymentCards />
        <PaymentLog />
        <PaymentThreshold />
        <PortfolioBreakdown />
        <PowerUsage />
        <Preferences />
        <QrConnect />
        <RecentTransactions />
        <ReceivingMethod />
        <ReleaseCatalog />
        <RollerShades />
        <SavingsTarget />
        <SocialLinks />
        <StockPerformance />
        <SyncingState />
        <TransferFunds />
        <UpcomingPayments />
      </div>
    </div>
  )
}