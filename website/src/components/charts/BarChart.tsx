import React from 'react';
import { Chart } from '@/components/ui/chart';

export const BarChart = ({ data }: { data: unknown }) => (
  <Chart type="bar" data={data as any} />
);
