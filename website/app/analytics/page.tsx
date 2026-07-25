import {
  RevenueChart,
  GrowthStatistics,
  PortfolioBreakdown,
  StockPerformance,
  MonthlyActivity
} from '@/components/widgets';
import DashboardLayout from '@/components/layout/DashboardLayout';

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Analytics</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1 text-sm">Deep dive into your performance metrics and charts.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          <RevenueChart />
          <GrowthStatistics />
        </div>
        <div className="flex flex-col gap-6">
          <PortfolioBreakdown />
          <StockPerformance />
        </div>
        <div className="lg:col-span-2">
          <MonthlyActivity />
        </div>
      </div>
    </DashboardLayout>
  );
}
