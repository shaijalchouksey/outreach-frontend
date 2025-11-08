"use client";
import React, { useMemo } from "react";

const DonutChart = ({ data = [], size = 120, strokeWidth = 20 }) => {
  const total = useMemo(() => data.reduce((sum, item) => sum + item.value, 0), [data]);
  
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  let cumulativePercentage = 0;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {data.map((item, index) => {
          const percentage = (item.value / total) * 100;
          const offset = (cumulativePercentage / 100) * circumference;
          const length = (percentage / 100) * circumference;
          
          cumulativePercentage += percentage;

          return (
            <circle
              key={index}
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={item.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${length} ${circumference}`}
              strokeDashoffset={-offset}
              strokeLinecap="round"
              className="transition-all duration-500"
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <div className="text-lg font-bold text-gray-900">{total}%</div>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;

