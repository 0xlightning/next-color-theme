import React from 'react';
import { Chart, type ChartDatum } from '@/components/ui/chart';

export const BarChart = ({ data, className }: { data: ChartDatum[]; className?: string }) => (
  <Chart type="bar" data={data} className={className} />
);

export const DonutChart = ({ data, className }: { data: ChartDatum[]; className?: string }) => (
  <Chart type="donut" data={data} className={className} />
);

export const AreaChart = ({ data, className }: { data: ChartDatum[]; className?: string }) => (
  <Chart type="area" data={data} className={className} />
);
