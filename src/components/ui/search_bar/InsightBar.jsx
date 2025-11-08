"use client";

import { RefreshCw, Upload, Megaphone } from "lucide-react";

export default function InsightBar({
  title = "Product Launch Outreach",
  status = "Active", // "Active" | "Completed" | "Scheduled"
  duration = "Oct 18, 2025 - Oct 24, 2025",
  platform = "LinkedIn",
  onRefresh = () => {},
  onExport = () => {},
}) {
  // Map status colors dynamically
  const statusColors = {
    Active: "text-green-700 bg-green-100 border-green-300",
    Completed: "text-red-700 bg-red-100 border-red-300",
    Scheduled: "text-yellow-700 bg-yellow-100 border-yellow-300",
  };

  return (
    <div className="flex flex-wrap items-center justify-between bg-gray-50 border border-gray-200 rounded-xl px-4 sm:px-6 py-3 shadow-sm">
      {/* Left Section: Campaign Info */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        {/* Icon + Title + Status */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center justify-center w-7 h-7 bg-purple-100 text-purple-600 rounded-lg">
            <Megaphone className="w-4 h-4" />
          </div>

          <div className="flex items-center flex-wrap gap-2">
            <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
              {title}
            </h2>
            <span
              className={`text-xs sm:text-sm font-medium border rounded-full px-3 py-0.5 ${statusColors[status]}`}
            >
              {status}
            </span>
          </div>
        </div>

        {/* Duration + Platform */}
        <div className="text-xs sm:text-sm text-gray-600 flex flex-wrap gap-1 sm:gap-3">
          <span>
            <strong className="text-gray-800">Duration:</strong> {duration}
          </span>
          <span className="hidden sm:inline text-gray-400">|</span>
          <span>
            <strong className="text-gray-800">Platform:</strong> {platform}
          </span>
        </div>
      </div>

      {/* Right Section: Buttons */}
      <div className="flex items-center gap-2 mt-3 sm:mt-0">
        {/* Refresh Button */}
        <button
          onClick={onRefresh}
          className="flex items-center gap-2 px-4 py-2 border border-purple-400 text-purple-600 text-sm font-medium rounded-md hover:bg-purple-50 transition"
        >
          <RefreshCw className="w-4 h-4" />
          Refresh
        </button>

        {/* Export Report Button */}
        <button
          onClick={onExport}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-md transition"
        >
          <Upload className="w-4 h-4" />
          Export Report
        </button>
      </div>
    </div>
  );
}
