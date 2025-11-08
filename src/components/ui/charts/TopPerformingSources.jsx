"use client";
import React from "react";
const TopPerformingSources = ({
  title = "Top Performing Sources",
  chart = null,
  data = [],
  height = "41vh",
}) => {
  return (
    <div
      className={`bg-white rounded-lg p-4 md:p-5 border border-gray-200`}
      style={{ height }}
    >
      <h3 className="font-semibold text-gray-900 mb-4 text-sm md:text-base">
        {title}
      </h3>
      <div className="flex flex-col items-center">
        {chart ? (
          chart
        ) : (
          <div className="text-gray-400 text-xs">No chart provided</div>
        )}
      </div>
      <div className="space-y-2 text-xs mt-4">
        {data.map(([name, percent, color], idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              ></div>
              <span className="text-gray-700">{name}</span>
            </div>
            <span className="font-medium text-gray-900">{percent}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPerformingSources;
