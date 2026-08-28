import React from 'react';
import { Chart, type ChartDatum } from '@/components/ui/chart';

export const BarChart = ({ data }: { data: ChartDatum[] }) => (
  <Chart type="bar" data={data} />
);
