"use client";
import { useState } from "react";

export default function LeadCampaignSelector({
  campaigns = ["Product Launch Campaign"],
  selected,
  onChange = () => {},
  tab = "All",
  onTabChange = () => {},
}) {
  const tabs = ["All", "Read", "Unread", "Closed"];

  return (
    <div className="p-3 sm:p-4 border-b border-gray-200 bg-white">
      {/* Campaign Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="w-full sm:w-1/2">
          <label className="text-xs sm:text-sm text-gray-600 mb-1 block">
            Select Campaign
          </label>
          <select
            value={selected || campaigns[0]}
            onChange={(e) => onChange(e.target.value)}
            className="w-full border-gray-300 focus:ring-purple-500 focus:border-purple-500 text-gray-700 rounded-md text-sm sm:text-base py-2 px-2"
          >
            {campaigns.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="flex flex-wrap items-center gap-2 mt-3 sm:mt-4">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => onTabChange(t)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm border font-medium transition-all ${
              tab === t
                ? "bg-purple-600 text-white border-purple-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
