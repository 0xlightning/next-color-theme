import React from 'react';
import * as RechartsPrimitive from 'recharts';
import { ChartContainer } from '@/components/ui/chart';

interface MiniBarChartProps {
  data: number[] | { value: number }[];
  color?: string;
  width?: number | string;
  height?: number | string;
}

export const MiniBarChart: React.FC<MiniBarChartProps> = ({
  data,
  color = 'var(--primary)',
  width = 100,
  height = 35,
}) => {
  const formattedData = React.useMemo(() => {
    return data.map((d, i) => (typeof d === 'number' ? { value: d, id: i } : { ...d, id: i }));
  }, [data]);

  const config = {
    value: {
      color,
    },
  };

  return (
    <ChartContainer config={config} className="h-full w-full" style={{ width, height }}>
      <RechartsPrimitive.ResponsiveContainer>
        <RechartsPrimitive.BarChart data={formattedData} margin={{ top: 2, right: 2, bottom: 2, left: 2 }}>
          <RechartsPrimitive.Bar
            dataKey="value"
            fill={color}
            radius={2}
          />
        </RechartsPrimitive.BarChart>
      </RechartsPrimitive.ResponsiveContainer>
    </ChartContainer>
  );
};
