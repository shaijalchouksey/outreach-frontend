"use client";

import { Pencil, X } from "lucide-react";

export default function EditSearchBar({
  title = "Edit Campaign",
  updatedText = "Last updated on Oct 28, 2025 — by Akash Sharma",
  subtitle = "Update your campaign details or make adjustments to improve performance.",
  onCancel = () => {},
  onUpdate = () => {},
}) {
  return (
    <div className="flex flex-wrap items-center justify-between w-full px-3 sm:px-4 md:px-6 py-3 rounded-md">
      {/* Left Section - Title and Info */}
      <div className="flex flex-col">
        <div className="flex flex-wrap items-center gap-2 mb-0.5">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
            {title}
          </h2>
          <span className="text-[10px] sm:text-xs md:text-sm text-gray-600 border border-gray-200 bg-gray-50 px-2 sm:px-3 py-0.5 rounded-md">
            {updatedText}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-gray-500">{subtitle}</p>
      </div>

      {/* Right Section - Buttons */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-3 sm:mt-0">
        {/* Cancel Button */}
        <button
          onClick={onCancel}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm sm:text-base font-medium rounded-md transition"
        >
          <X className="w-4 h-4" />
          Cancel
        </button>

        {/* Update Button */}
        <button
          onClick={onUpdate}
          className="flex items-center justify-center gap-2 px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base font-medium rounded-md transition"
        >
          <Pencil className="w-4 h-4" />
          Update Campaign
        </button>
      </div>
    </div>
  );
}
