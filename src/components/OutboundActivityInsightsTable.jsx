"use client";
import React, { useState, useEffect, useRef } from "react";
import { MoreVertical, Eye, Edit2, Trash2 } from "lucide-react";

export default function OutboundActivityInsightsTable({
  title = "All Campaigns",
  results = "Showing 1–10 of 10 results",
  viewAllLink = "#",
  campaigns = [],
  onAction = () => {},
}) {
  const [openMenu, setOpenMenu] = useState(null);
  const menuRefs = useRef({});

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openMenu !== null) {
        const menuRef = menuRefs.current[openMenu];
        if (menuRef && !menuRef.contains(event.target)) {
          setOpenMenu(null);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenu]);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-700 border border-green-300";
      case "completed":
        return "bg-red-100 text-red-600 border border-red-300";
      case "scheduled":
        return "bg-yellow-100 text-yellow-700 border border-yellow-300";
      default:
        return "bg-gray-100 text-gray-600 border border-gray-300";
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-200 w-full overflow-hidden">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">
          {title}
          <span className="ml-2 text-sm text-gray-500 font-normal">
            {results}
          </span>
        </h3>
        <a
          href={viewAllLink}
          className="text-sm text-purple-600 font-medium hover:underline"
        >
          View all
        </a>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-100">
        <table className="min-w-full text-sm text-gray-800">
          <thead>
            <tr className="bg-purple-50 text-gray-700">
              <th className="text-left py-3 px-4 font-medium whitespace-nowrap">
                Name
              </th>
              <th className="text-left py-3 px-4 font-medium whitespace-nowrap">
                Platform
              </th>
              <th className="text-left py-3 px-4 font-medium whitespace-nowrap">
                Status
              </th>
              <th className="text-left py-3 px-4 font-medium whitespace-nowrap">
                Leads
              </th>
              <th className="text-left py-3 px-4 font-medium whitespace-nowrap">
                Messages
              </th>
              <th className="text-left py-3 px-4 font-medium whitespace-nowrap">
                Open Rate
              </th>
              <th className="text-left py-3 px-4 font-medium whitespace-nowrap">
                Created
              </th>
              <th className="text-left py-3 px-4 font-medium whitespace-nowrap">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {campaigns.length > 0 ? (
              campaigns.map((campaign, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="py-3 px-4 whitespace-nowrap font-medium text-gray-800">
                    {campaign.name}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    {campaign.platform}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${getStatusColor(
                        campaign.status
                      )}`}
                    >
                      {campaign.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    {campaign.leads}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    {campaign.messages}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    {campaign.openRate}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    {campaign.created}
                  </td>

                  {/* Action Menu */}
                  <td
                    className="py-3 px-4 text-right relative"
                    ref={(el) => (menuRefs.current[idx] = el)}
                  >
                    <button
                      className="p-1.5 rounded hover:bg-gray-100 transition"
                      onClick={() =>
                        setOpenMenu(openMenu === idx ? null : idx)
                      }
                    >
                      <MoreVertical className="w-5 h-5 text-gray-600" />
                    </button>

                    {openMenu === idx && (
                      <div className="absolute right-6 mt-2 w-40 bg-white border border-gray-100 rounded-lg shadow-lg z-10">
                        <button
                          onClick={() => {
                            onAction(campaign, "insights");
                            setOpenMenu(null);
                          }}
                          className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          <Eye className="w-4 h-4 text-gray-500" />
                          Insights
                        </button>
                        <button
                          onClick={() => {
                            onAction(campaign, "edit");
                            setOpenMenu(null);
                          }}
                          className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          <Edit2 className="w-4 h-4 text-gray-500" />
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            onAction(campaign, "delete");
                            setOpenMenu(null);
                          }}
                          className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  className="text-center py-6 text-gray-500 text-sm"
                >
                  No campaign data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
