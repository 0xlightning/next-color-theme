import React from 'react';
import { Chart } from '@/components/ui/chart';

export const DonutChart = ({ data }: { data: unknown }) => (
  <Chart type="donut" data={data as any} />
);