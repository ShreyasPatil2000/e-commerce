"use client";

import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Legend, Tooltip, Line } from "recharts";

interface iAppProps {
  data: {
    date: string;
    revenue: number;
  }[];
}
interface RevenueData {
  date: string;
  revenue: number;
}

interface AggregatedRevenue {
  date: string;
  revenue: number;
}

const aggregateData = (data: RevenueData[]): AggregatedRevenue[] => {
  const aggregated = data.reduce((acc: Record<string, number>, curr) => {
    if (acc[curr.date]) {
      acc[curr.date] += curr.revenue;
    } else {
      acc[curr.date] = curr.revenue;
    }
    return acc;
  }, {});

  return Object.keys(aggregated).map((date) => ({
    date,
    revenue: aggregated[date],
  }));
};

const Chart = ({ data }: iAppProps) => {
  const processedData = aggregateData(data);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={processedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" stroke="#3b82f6" activeDot={{ r: 8 }} dataKey="revenue" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
