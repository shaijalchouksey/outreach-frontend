"use client";

import { Search, Plus, ChevronDown, Settings } from "lucide-react";

export default function OutboundSearchBar({
  placeholder = "Search campaigns or leads...",
  onSearch = () => {},
  onNewCampaign = () => {},
  onDateChange = () => {},
  onAutomationSettings = () => {},
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 w-full bg-white py-2">
      {/* Left Section - Add New Campaign Button */}
      <div className="flex items-center gap-2">
        <button
          onClick={onNewCampaign}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base font-medium rounded-md transition"
        >
          <Plus className="w-4 h-4" />
          New Campaign
        </button>
      </div>

      {/* Middle Section - Search Input */}
      <div className="flex items-center gap-2 flex-1 min-w-[200px] sm:min-w-[300px] md:min-w-[400px]">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder={placeholder}
            className="w-full border border-gray-200 rounded-md pl-9 pr-20 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          />
          <button
            onClick={onSearch}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-medium text-purple-600 hover:text-purple-700"
          >
            Search
          </button>
        </div>
      </div>

      {/* Right Section - Date Filter & Settings */}
      <div className="flex items-center gap-2 flex-shrink-0">
        {/* Date Range Dropdown */}
        <button
          onClick={onDateChange}
          className="flex items-center gap-2 px-4 py-2 border border-purple-300 text-purple-600 text-sm font-medium rounded-md hover:bg-purple-50 transition"
        >
          Last 30 Days
          <ChevronDown className="w-4 h-4" />
        </button>

        {/* Automation Settings */}
        <button
          onClick={onAutomationSettings}
          className="flex items-center gap-2 px-4 py-2 border border-purple-300 text-purple-600 text-sm font-medium rounded-md hover:bg-purple-50 transition"
        >
          <Settings className="w-4 h-4" />
          Automation Settings
        </button>
      </div>
    </div>
  );
}
