import React from 'react';
import * as RechartsPrimitive from 'recharts';
import { ChartContainer } from '@/components/ui/chart';

interface SparklineProps {
  data: number[] | { value: number }[];
  color?: string;
  width?: number | string;
  height?: number | string;
}

export const Sparkline: React.FC<SparklineProps> = ({
  data,
  color = 'var(--primary)',
  width = 120,
  height = 30,
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
        <RechartsPrimitive.LineChart data={formattedData} margin={{ top: 2, right: 2, bottom: 2, left: 2 }}>
          <RechartsPrimitive.Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={1.5}
            dot={false}
          />
        </RechartsPrimitive.LineChart>
      </RechartsPrimitive.ResponsiveContainer>
    </ChartContainer>
  );
};
