"use client";

import { Search, Filter, Plus, Upload } from "lucide-react";

export default function SearchBar({
  placeholder = "Search...",
  onSearch = () => {},
  onFilter = () => {},
  onAdd = () => {},
  onExport = () => {},
  addLabel = "Add New Competitor",
  showFilter = true,
  showAdd = true,
  showExport = true,
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 w-full bg-white py-2">
      <div className="flex items-center gap-2 w-full md:w-auto flex-1">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder={placeholder}
            className="w-full border border-gray-200 rounded-md pl-9 pr-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        <button
          onClick={onSearch}
          className="px-4 py-2 text-sm font-medium text-purple-600 border border-purple-300 rounded-md hover:bg-purple-50 transition"
        >
          Search
        </button>
      </div>

      {/* Right Section: Actions */}
      <div className="flex items-center gap-2 flex-wrap">
        {showFilter && (
          <button
            onClick={onFilter}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-purple-300 text-purple-600 text-sm font-medium rounded-md hover:bg-purple-50 transition"
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>
        )}

        {showAdd && (
          <button
            onClick={onAdd}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-md transition"
          >
            <Plus className="w-4 h-4" />
            {addLabel}
          </button>
        )}

        {showExport && (
          <button
            onClick={onExport}
            className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium rounded-md transition"
          >
            <Upload className="w-4 h-4" />
            Export
          </button>
        )}
      </div>
    </div>
  );
}
