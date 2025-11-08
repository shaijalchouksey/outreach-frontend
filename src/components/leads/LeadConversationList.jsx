"use client";
import { useState } from "react";

export default function LeadConversationList({
  leads = [],
  onSelect = () => {},
  selectedId,
}) {
  const [active, setActive] = useState(selectedId);

  return (
    <div className="divide-y divide-gray-100 overflow-y-auto max-h-full">
      {leads.map((lead) => (
        <button
          key={lead.id}
          onClick={() => {
            setActive(lead.id);
            onSelect(lead);
          }}
          className={`w-full flex items-start gap-3 p-3 sm:p-4 hover:bg-gray-50 transition-all ${
            active === lead.id ? "bg-purple-50" : "bg-white"
          }`}
        >
          {/* Avatar */}
          <img
            src={lead.avatar}
            alt={lead.name}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
          />

          {/* Lead Info */}
          <div className="flex-1 text-left min-w-0">
            <div className="flex justify-between items-center">
              <div className="text-sm sm:text-base font-medium text-gray-900 truncate">
                {lead.name}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500 flex-shrink-0">
                {lead.time}
              </div>
            </div>

            <div className="text-xs sm:text-sm text-gray-600 truncate max-w-[90%]">
              {lead.preview}
            </div>

            {lead.unread && (
              <span className="inline-block mt-1 text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-purple-600 text-white font-medium">
                Unread
              </span>
            )}
          </div>
        </button>
      ))}

      {leads.length === 0 && (
        <div className="p-6 text-center text-sm sm:text-base text-gray-500">
          No conversations found.
        </div>
      )}
    </div>
  );
}
