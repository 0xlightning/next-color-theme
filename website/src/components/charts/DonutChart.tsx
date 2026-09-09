import React from 'react';
import { Chart, type ChartDatum } from '@/components/ui/chart';

export const DonutChart = ({ data, className }: { data: ChartDatum[]; className?: string }) => (
  <Chart type="donut" data={data} className={className} />
);
