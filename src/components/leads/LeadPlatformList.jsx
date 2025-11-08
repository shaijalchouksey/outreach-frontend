"use client";
import {
  Mail,
  Instagram,
  Linkedin,
  Facebook,
  MessageSquare,
  Share2,
  Hash,
} from "lucide-react";

const defaultPlatforms = [
  { name: "Emails", icon: Mail },
  { name: "Instagram DMs", icon: Instagram },
  { name: "LinkedIn DMs", icon: Linkedin },
  { name: "Facebook DMs", icon: Facebook },
  { name: "Twitter DMs", icon: Share2 },
  { name: "Threads DMs", icon: Hash },
];

export default function LeadPlatformList({
  active = "Instagram DMs",
  onSelect = () => {},
  counts = {},
}) {
  return (
    <div className="p-3 sm:p-4">
      {/* Header */}
      <div className="text-xs sm:text-sm font-medium text-gray-600 mb-2 sm:mb-3">
        Platforms
      </div>

      {/* List */}
      <div className="space-y-2 sm:space-y-3">
        {defaultPlatforms.map((p) => {
          const Icon = p.icon;
          const isActive = p.name === active;
          const count = counts[p.name] || 0;

          return (
            <button
              key={p.name}
              onClick={() => onSelect(p.name)}
              className={`w-full flex items-center justify-between rounded-lg border text-left transition-all
                ${
                  isActive
                    ? "bg-purple-100 border-purple-200 text-gray-900"
                    : "bg-white border-gray-200 hover:bg-gray-50"
                }`}
            >
              <div className="flex items-center gap-2 sm:gap-3 px-2.5 sm:px-3 py-2 sm:py-2.5 w-full">
                <div className="flex items-center gap-2 truncate">
                  <Icon
                    className={`${
                      isActive ? "text-purple-600" : "text-gray-600"
                    } w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0`}
                  />
                  <span className="text-xs text-gray-600 sm:text-sm truncate">{p.name}</span>
                </div>

                {count > 0 && (
                  <span
                    className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-medium ${
                      isActive
                        ? "bg-purple-600 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {count}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
