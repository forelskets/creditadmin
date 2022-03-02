import React from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

const bannerChart = () => {
  const data = [
    {
      name: 'New Users',
      uv: 31.47,
      pv: 2400,
      fill: '#8884d8',
    },
    {
      name: 'Earning',
      uv: 26.69,
      pv: 4567,
      fill: '#83a6ed',
    },
    {
      name: 'Repeated Customers',
      uv: -15.69,
      pv: 1398,
      fill: '#8dd1e1',
    },
    {
      name: 'Amount',
      uv: 8.22,
      pv: 9800,
      fill: '#82ca9d',
    },
    {
      name: 'Refferals',
      uv: -8.63,
      pv: 3908,
      fill: '#a4de6c',
    },
  ];
  return (
    <div style={{ padding: '10px' }}>
      <RadialBarChart
        width={480}
        height={310}
        innerRadius="15%"
        outerRadius="100%"
        data={data}
        startAngle={0}
        endAngle={360}
      >
        <RadialBar
          minAngle={15}
          label={{ fill: '#666', position: 'insideStart' }}
          background
          clockWise={true}
          dataKey="uv"
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          align="left"
        />
        <Tooltip />
      </RadialBarChart>
    </div>
  );
};

export default bannerChart;
