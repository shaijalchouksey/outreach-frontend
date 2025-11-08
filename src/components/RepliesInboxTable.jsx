"use client";

import React, { useState, useRef, useEffect } from "react";
import { MoreVertical, Eye, Tag, Plus } from "lucide-react";

export default function RepliesInboxTable({
  title = "Replies Inbox",
  data = [],
  onReply = () => {},
  onTagLead = () => {},
  onAddNote = () => {},
  onViewAll = () => {},
}) {
  const [openMenu, setOpenMenu] = useState(null);
  const menuRefs = useRef({});

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (openMenu !== null) {
        const ref = menuRefs.current[openMenu];
        if (ref && !ref.contains(e.target)) setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenu]);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden w-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        <button
          onClick={onViewAll}
          className="text-sm font-medium text-purple-600 hover:text-purple-700 transition"
        >
          View all
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-900">
          <thead>
            <tr className="bg-purple-50 text-left text-gray-700 font-semibold">
              <th className="px-4 py-3 whitespace-nowrap">Lead Name</th>
              <th className="px-4 py-3 whitespace-nowrap">Company</th>
              <th className="px-4 py-3 whitespace-nowrap">Reply Snippet</th>
              <th className="px-4 py-3 whitespace-nowrap">Reply Type</th>
              <th className="px-4 py-3 whitespace-nowrap">Date</th>
              <th className="px-4 py-3 whitespace-nowrap">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {data.length > 0 ? (
              data.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-800">
                    {item.name}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-600">
                    {item.company}
                  </td>
                  <td className="px-4 py-3 text-gray-700 truncate max-w-[280px]">
                    “{item.reply}”
                  </td>
                  <td
                    className={`px-4 py-3 font-medium ${
                      item.type === "Positive"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {item.type}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{item.date}</td>
                  <td className="px-4 py-3 relative" ref={(el) => (menuRefs.current[idx] = el)}>
                    <button
                      onClick={() =>
                        setOpenMenu(openMenu === idx ? null : idx)
                      }
                      className="p-1 rounded hover:bg-gray-100"
                    >
                      <MoreVertical className="w-4 h-4 text-gray-600" />
                    </button>

                    {openMenu === idx && (
                      <div className="absolute right-4 top-8 bg-white border border-gray-100 shadow-md rounded-lg w-36 z-20">
                        <button
                          onClick={() => {
                            onReply(item);
                            setOpenMenu(null);
                          }}
                          className="flex items-center gap-2 w-full text-left px-3 py-2 hover:bg-gray-50 text-gray-700 text-sm"
                        >
                          <Eye className="w-4 h-4 text-gray-500" /> Reply
                        </button>
                        <button
                          onClick={() => {
                            onTagLead(item);
                            setOpenMenu(null);
                          }}
                          className="flex items-center gap-2 w-full text-left px-3 py-2 hover:bg-gray-50 text-gray-700 text-sm"
                        >
                          <Tag className="w-4 h-4 text-gray-500" /> Tag Lead
                        </button>
                        <button
                          onClick={() => {
                            onAddNote(item);
                            setOpenMenu(null);
                          }}
                          className="flex items-center gap-2 w-full text-left px-3 py-2 hover:bg-gray-50 text-gray-700 text-sm"
                        >
                          <Plus className="w-4 h-4 text-gray-500" /> Add Note
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center text-gray-500 py-6 text-sm"
                >
                  No replies found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
