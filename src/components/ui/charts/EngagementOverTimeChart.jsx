"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { date: "18 Oct", openRate: 20, replyRate: 28, positiveReplies: 25 },
  { date: "19 Oct", openRate: 10, replyRate: 35, positiveReplies: 22 },
  { date: "20 Oct", openRate: 15, replyRate: 12, positiveReplies: 30 },
  { date: "21 Oct", openRate: 68, replyRate: 55, positiveReplies: 42 },
  { date: "22 Oct", openRate: 58, replyRate: 28, positiveReplies: 32 },
  { date: "23 Oct", openRate: 75, replyRate: 45, positiveReplies: 60 },
  { date: "24 Oct", openRate: 80, replyRate: 40, positiveReplies: 65 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-purple-600 text-white text-xs px-3 py-1.5 rounded-md shadow-md">
        <p className="font-medium">Open Rate</p>
        <p className="text-sm font-semibold">{`${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

export default function EngagementOverTimeChart() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">
        Engagement Over Time
      </h2>

      {/* Chart */}
      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
            <XAxis
              dataKey="date"
              tick={{ fill: "#6B7280", fontSize: 12 }}
              axisLine={{ stroke: "#E5E7EB" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#6B7280", fontSize: 12 }}
              axisLine={{ stroke: "#E5E7EB" }}
              tickLine={false}
              domain={[0, 100]}
              label={{
                value: "Engagement Rate (%)",
                angle: -90,
                position: "insideLeft",
                offset: -5,
                style: { fill: "#374151", fontSize: 12 },
              }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#E5E7EB" }} />

            {/* Lines */}
            <Line
              type="monotone"
              dataKey="openRate"
              stroke="#A855F7"
              strokeWidth={2.5}
              dot={{ r: 4, strokeWidth: 2, stroke: "#fff" }}
            />
            <Line
              type="monotone"
              dataKey="replyRate"
              stroke="#DC2626"
              strokeWidth={2.5}
              dot={{ r: 4, strokeWidth: 2, stroke: "#fff" }}
            />
            <Line
              type="monotone"
              dataKey="positiveReplies"
              stroke="#22C55E"
              strokeWidth={2.5}
              dot={{ r: 4, strokeWidth: 2, stroke: "#fff" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-between mt-4 text-sm text-gray-700">
        <div className="flex flex-wrap items-center gap-5">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple-500"></span>
            <span>Open Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span>Reply Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span>Positive Replies</span>
          </div>
        </div>

        <div className="text-gray-800 font-medium flex flex-col sm:flex-row gap-2 sm:gap-4">
          <span>Open Rate: <span className="font-semibold">72%</span></span>
          <span>Reply Rate: <span className="font-semibold">34%</span></span>
          <span>Positive Replies: <span className="font-semibold">12%</span></span>
        </div>
      </div>
    </div>
  );
}
