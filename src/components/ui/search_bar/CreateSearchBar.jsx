"use client";

import { Save, PlayCircle, X } from "lucide-react";

export default function CreateSearchBar({
  title = "Create New Campaign",
  subtitle = "Build your campaign step-by-step and schedule it to go live.",
  onCancel = () => {},
  onSaveDraft = () => {},
  onLaunch = () => {},
}) {
  return (
    <div className="flex flex-wrap items-center justify-between w-full px-3 sm:px-4 md:px-6 py-3 rounded-md ">
      {/* Left Section: Title and Description */}
      <div className="flex flex-col">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{subtitle}</p>
      </div>

      {/* Right Section: Buttons */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-3 sm:mt-0">
        {/* Cancel Button */}
        <button
          onClick={onCancel}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm sm:text-base font-medium rounded-md transition"
        >
          <X className="w-4 h-4" />
          Cancel
        </button>

        {/* Save as Draft */}
        <button
          onClick={onSaveDraft}
          className="flex items-center justify-center gap-2 px-4 py-2 border border-purple-400 text-purple-600 bg-white hover:bg-purple-50 text-sm sm:text-base font-medium rounded-md transition"
        >
          <Save className="w-4 h-4" />
          Save as Draft
        </button>

        {/* Launch Campaign */}
        <button
          onClick={onLaunch}
          className="flex items-center justify-center gap-2 px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base font-medium rounded-md transition"
        >
          <PlayCircle className="w-4 h-4" />
          Launch Campaign
        </button>
      </div>
    </div>
  );
}
