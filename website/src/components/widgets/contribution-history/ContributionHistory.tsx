import React from 'react';
import { Card } from '@/components/ui/card';
import { BarChart } from '@/components/charts/BarChart';
import { mockContributionData } from './mockData';

export const ContributionHistory: React.FC = () => (
  <Card className="p-4">
    <h2 className="text-lg font-semibold mb-2">Contribution History</h2>
    <BarChart data={mockContributionData} />
    <button className="mt-2 btn-primary">View Details</button>
  </Card>
);

export default ContributionHistory;

