import {
  RevenueChart,
  AccountAccess,
  BuyInvestment,
  Calendar,
  ClaimableBalance,
  ContactInformation,
  ContributionHistory,
  DividendIncome,
  EmptyState,
  GrowthStatistics,
  InvestmentPortfolio,
  LoadingState,
  MonthlyActivity,
  Notifications,
  PaymentCards,
  PaymentLog,
  PaymentThreshold,
  PortfolioBreakdown,
  SavingsTarget,
  StockPerformance
} from '@/components/widgets';
import DashboardLayout from '@/components/layout/DashboardLayout';

export default function Home() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Overview</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1 text-sm">Welcome back! Here's what's happening today.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <RevenueChart />
        <AccountAccess />
        <BuyInvestment />
        <Calendar />
        <ClaimableBalance />
        <ContactInformation />
        <ContributionHistory />
        <DividendIncome />
        <EmptyState />
        <GrowthStatistics />
        <InvestmentPortfolio />
        <LoadingState />
        <MonthlyActivity />
        <Notifications />
        <PaymentCards />
        <PaymentLog />
        <PaymentThreshold />
        <PortfolioBreakdown />
        <SavingsTarget />
        <StockPerformance />
      </div>
    </DashboardLayout>
  );
}
