import React from 'react';
import { Card } from '@/components/ui/card';
import { Chart } from '@/components/ui/chart';
import { mockRevenueData } from './mockData';

export const RevenueChart: React.FC = () => {
  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-2">Revenue Over Time</h2>
      <Chart data={mockRevenueData} />
    </Card>
  );
};

export default RevenueChart;

