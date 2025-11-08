"use client";
import { useState } from "react";
import {
  Menu,
  ChevronLeft,
  Bell,
  ChevronRight,
  ChevronDown,
  RotateCw,
} from "lucide-react";
import { PLATFORM_DETAILS } from "./platformIcons";

export default function IntentHeader({
  platform = "Facebook",
  lastSynced = "2h ago",
  user = { name: "Pizza Hut", role: "User", avatar: null },
  onToggleSidebar = () => {},
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar + icon state
  const handleToggle = () => {
    const newState = !isSidebarOpen;
    setIsSidebarOpen(newState);
    onToggleSidebar?.(newState);
  };

  const key = platform?.toLowerCase().trim();
  const details = PLATFORM_DETAILS[key] || PLATFORM_DETAILS["facebook"];
  const Icon = details.icon;

  return (
    <header className="bg-white border-b border-gray-200 px-3 sm:px-4 md:px-6 py-2 sm:py-3 h-auto sm:h-[65px] flex-shrink-0 rounded-md w-full shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
        {/* Left Section */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {/* Sidebar Toggle */}
          <button
            onClick={handleToggle}
            className="text-gray-600 hover:text-gray-900 focus:outline-none transition-transform duration-200"
            aria-label="Toggle Sidebar"
          >
            {isSidebarOpen ? (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <ChevronLeft  className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>

          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-1 sm:gap-2">
            <h2 className="text-xs sm:text-sm md:text-base text-gray-600 font-medium whitespace-nowrap">
              Intent Signals
            </h2>
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
          </div>

          {/* Platform Info */}
          <div className="flex items-center flex-wrap gap-2 sm:gap-3">
            <div
              className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-md flex-shrink-0"
              style={{ backgroundColor: details.color }}
            >
              <Icon className="text-white w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>

            <h2 className="text-sm sm:text-base font-semibold text-gray-900 whitespace-nowrap">
              {details.label}
            </h2>

            {/* Sync Info */}
            <span className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs md:text-sm text-gray-500 border border-gray-200 bg-gray-50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md whitespace-nowrap">
              <RotateCw className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-400" />
              <span>Last synced {lastSynced}</span>
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Notification */}
          <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 cursor-pointer hover:text-gray-900 transition" />

          {/* User Profile */}
          <div className="flex items-center gap-1 sm:gap-2 cursor-pointer">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
              />
            ) : (
              <div
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-medium"
                style={{ backgroundColor: "#f97316" }}
              >
                {user.name?.[0] || "U"}
              </div>
            )}

            {/* User Info */}
            <div className="hidden md:block text-xs sm:text-sm text-left leading-tight">
              <div className="font-medium text-gray-900 truncate max-w-[120px] sm:max-w-[150px]">
                {user.name}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500">
                {user.role}
              </div>
            </div>

            <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
}
