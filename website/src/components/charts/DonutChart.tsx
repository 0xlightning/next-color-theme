import React from 'react';
import { Chart, type ChartDatum } from '@/components/ui/chart';

export const DonutChart = ({ data }: { data: ChartDatum[] }) => (
  <Chart type="donut" data={data} />
);
