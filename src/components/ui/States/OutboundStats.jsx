"use client";
import React from "react";
import { Megaphone, Users, Mail, Send, TrendingUp } from "lucide-react";

const statsData = [
  {
    icon: Megaphone,
    title: "Active Campaigns",
    value: "28",
    insight: "+2.0% This week",
  },
  {
    icon: Users,
    title: "Leads Contacted",
    value: "12,480",
    insight: "+3.5k New This week",
  },
  {
    icon: Mail,
    title: "Emails Sent",
    value: "24,630",
    insight: "48% open rate This week",
  },
  {
    icon: Send,
    title: "DMs Sent",
    value: "6,210",
    insight: "Across all platforms",
  },
];

export default function OutboundStats() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      {statsData.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 border border-gray-200 hover:shadow-md hover:scale-[1.01] transition-all duration-200"
          >
            {/* Top Row: Icon + Title */}
            <div className="flex items-center gap-2 mb-3">
              <Icon className="w-5 h-5 text-purple-600" />
              <h3 className="text-sm sm:text-base font-semibold text-gray-700">
                {item.title}
              </h3>
            </div>

            {/* Main Value */}
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {item.value}
            </div>

            {/* Insight */}
            <div className="flex items-center gap-1 text-sm text-purple-600 font-medium">
              <TrendingUp className="w-4 h-4 text-purple-600" />
              <span>{item.insight}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
