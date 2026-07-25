import React from 'react';
import { Chart } from '@/components/ui/chart';

export const AreaChart = ({ data }: { data: unknown }) => (
  <Chart type="area" data={data as any} />
);
