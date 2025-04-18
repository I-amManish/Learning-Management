import Image from 'next/image';
import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Boys', uv: 55, fill: '#8884d8' },
  { name: 'Girls', uv: 45, fill: '#ffc658' },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* Title */}
      <div className="flex justify-between items-center mb-4">
        <h1 className='text-lg font-semibold'>Students</h1>
        <Image src="/moreDark.png" alt="More Options" width={20} height={20} />
      </div>

      {/* Chart */}
      <div className="w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="10%"
            outerRadius="80%"
            barSize={10}
            data={data}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar
              minAngle={15}
              label={{ position: 'insideStart', fill: '#fff' }}
              background
              clockWise
              dataKey="uv"
            />
            <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={{
                right: 0,
                top: '50%',
                transform: 'translate(0, -50%)',
              }}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Stats */}
      <div className="flex justify-center gap-16 mt-6">
        <div className='flex items-center gap-2'>
          <div className='w-4 h-4 bg-[#8884d8] rounded-full'></div>
          <div>
            <h1 className='font-bold'>1,234</h1>
            <h2 className='text-sm text-gray-500'>Boys (55%)</h2>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-4 h-4 bg-[#ffc658] rounded-full'></div>
          <div>
            <h1 className='font-bold'>1,012</h1>
            <h2 className='text-sm text-gray-500'>Girls (45%)</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountChart;