"use client";
import React from "react";
const SignalDistributionChart = ({
  title = "Signal Distribution Chart",
  data = [],
  highlight = null,
  color = "purple",
}) => {
  const gradient = `bg-gradient-to-r from-${color}-700 via-${color}-500 to-${color}-300`;
  const highlightBg = `bg-${color}-50`;
  const highlightText = `text-${color}-700`;
  const highlightAccent = `text-${color}-600`;

  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200 h-[100%]">
      <h3 className="font-semibold text-gray-900 mb-4 mt-6 text-sm">{title}</h3>
      <div className="space-y-3">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span className="text-xs text-gray-600 w-28 sm:w-32 text-right">
              {item.label}
            </span>

            <div className="flex-1 bg-purple-100 rounded-full h-4 sm:h-5 overflow-hidden relative">
              <div
                className={`h-full absolute right-0 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500`}
                style={{ width: `${item.value}%` }}
              ></div>
            </div>


            <span className="text-xs font-medium text-black w-10 text-left">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
      {highlight && (
        <div className={`mt-4 p-3 rounded-lg flex items-center gap-2 text-black ${highlightBg}`}>
          <svg
            className={`w-4 h-4 ${highlightAccent} flex-shrink-0`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.332-.266 3.031-1.743 3.031H4.42c-1.477 0-2.493-1.699-1.743-3.031l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <span className={`text-xs mt-6 text-black ${highlightText}`}>
            {highlight.text}
            <span className={`font-medium ml-1 text-black ${highlightAccent}`}>
              {highlight.subText}
            </span>
          </span>
        </div>
      )}
    </div>
  );
};

export default SignalDistributionChart;
