import React from 'react';
import { Chart } from '@/components/ui/chart';

export const LineChart = ({ data }: { data: unknown }) => (
  <Chart type="line" data={data as any} />
);
