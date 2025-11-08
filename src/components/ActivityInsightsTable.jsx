"use client";
import React, { useState, useEffect, useRef } from "react";
import { MoreVertical } from "lucide-react";

const ActivityInsightsTable = ({
  title = "Activity Insights",
  columns = [],
  data = [],
  onActionClick = () => {},
  color = "purple",
}) => {
  const [openActionMenu, setOpenActionMenu] = useState(null);
  const menuRefs = useRef({});

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openActionMenu !== null) {
        const menuRef = menuRefs.current[openActionMenu];
        if (menuRef && !menuRef.contains(event.target)) {
          setOpenActionMenu(null);
        }
      }
    };

    if (openActionMenu !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openActionMenu]);

  const headerBg = `bg-${color}-50`;
  const headerText = `text-${color}-700`;

  return (
    <div className="bg-white rounded-lg p-4 sm:p-5 border border-gray-200 w-full">
      <h3 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">
        {title}
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs text-gray-900 sm:text-sm border-collapse">
          <thead>
            <tr className={`${headerBg} ${headerText}`}>
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  className="text-left py-2 sm:py-3 px-2 sm:px-3 font-medium whitespace-nowrap"
                >
                  {col}
                </th>
              ))}
              <th className="text-left py-2 sm:py-3 px-2 sm:px-3 font-medium whitespace-nowrap">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {data.length > 0 ? (
              data.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  {columns.map((col, cIdx) => (
                    <td
                      key={cIdx}
                      className={`py-2 sm:py-3 px-2 sm:px-3 whitespace-nowrap ${
                        col === "Intent Score"
                          ? "font-semibold text-gray-900"
                          : "text-gray-600"
                      }`}
                    >
                      {row[col.toLowerCase().replace(/\s+/g, "")]}
                    </td>
                  ))}
                  <td className="py-2 sm:py-3 px-2 sm:px-3 relative whitespace-nowrap">
                    <div
                      ref={(el) => (menuRefs.current[idx] = el)}
                      className="relative"
                    >
                      <button
                        className="p-1 hover:bg-gray-100 rounded"
                        onClick={() =>
                          setOpenActionMenu(openActionMenu === idx ? null : idx)
                        }
                      >
                        <MoreVertical className="w-4 h-4 text-gray-600" />
                      </button>

                      {openActionMenu === idx && (
                        <div className="absolute right-2 mt-2 bg-white shadow-lg border border-gray-100 rounded-lg z-10 w-36">
                        <button
                          onClick={() => {
                            onActionClick(row);
                            setOpenActionMenu(null);
                          }}
                          className="block w-full text-left text-xs px-3 py-2 hover:bg-gray-50 text-gray-700"
                        >
                          View Source
                        </button>
                        <button
                          onClick={() => {
                            onActionClick({ ...row, action: "add_to_leads" });
                            setOpenActionMenu(null);
                          }}
                          className="block w-full text-left text-xs px-3 py-2 hover:bg-gray-50 text-gray-700"
                        >
                          + Add to Leads
                        </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  className="text-center text-xs text-gray-500 py-4"
                >
                  No activity insights available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityInsightsTable;
