'use client';

import React, { useState } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";

export default function FilterPanel({
  title = "Filters",
  onClose,
  sections = [],
  onApply,
}) {
  const [collapsedSections, setCollapsedSections] = useState([]);

  const toggleSection = (sectionName) => {
    setCollapsedSections((prev) =>
      prev.includes(sectionName)
        ? prev.filter((name) => name !== sectionName)
        : [...prev, sectionName]
    );
  };

  const isCollapsed = (sectionName) => collapsedSections.includes(sectionName);

  return (
    <div
      className="w-full sm:w-96 max-w-[min(90vw,24rem)] bg-white shadow-lg border-l border-gray-200 flex flex-col h-full 
                 [&_input[type='checkbox']]:h-4 [&_input[type='checkbox']]:w-4 [&_input[type='checkbox']]:rounded-sm 
                 [&_input[type='checkbox']]:border-gray-300 [&_input[type='checkbox']]:checked:bg-purple-600 
                 [&_input[type='checkbox']]:checked:border-transparent [&_input[type='checkbox']]:focus:ring-purple-500"
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200 h-[65px] flex-shrink-0">
        <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-6 space-y-6 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {sections.map((section, idx) => (
          <div key={idx}>
            {/* Section Header */}
            <button
              className="flex justify-between items-center w-full mb-3"
              onClick={() => toggleSection(section.name)}
            >
              <h4 className="font-medium text-gray-800">{section.name}</h4>
              {isCollapsed(section.name) ? (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronUp className="w-4 h-4 text-gray-400" />
              )}
            </button>

            {/* Section Body */}
            {!isCollapsed(section.name) && (
              <div className="space-y-2">
                {/* Checkbox Type */}
                {section.type === "checkbox" &&
                  section.options.map((opt, i) => (
                    <label
                      key={i}
                      className="flex items-center gap-2 cursor-pointer text-sm"
                    >
                      <input
                        type="checkbox"
                        checked={section.selected.includes(opt)}
                        onChange={() => section.onToggle(opt)}
                        className="form-checkbox"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}

                {/* Input + Checkbox List */}
                {section.type === "input" && (
                  <>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder={section.placeholder || "Type something"}
                        value={section.inputValue}
                        onChange={(e) => section.onInputChange(e.target.value)}
                        className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                      />
                      <button
                        onClick={section.onAdd}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-600 text-sm font-medium"
                      >
                        Add
                      </button>
                    </div>

                    {section.options?.length > 0 && (
                      <div className="flex flex-col gap-2 mt-3">
                        {section.options.map((opt, i) => (
                          <label
                            key={i}
                            className="flex items-center gap-2 cursor-pointer text-sm"
                          >
                            <input
                              type="checkbox"
                              checked={section.selected.includes(opt)}
                              onChange={() => section.onToggle(opt)}
                              className="form-checkbox"
                            />
                            <span>{opt}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200 bg-white flex-shrink-0">
        <button
          onClick={onApply || onClose}
          className="w-full bg-purple-600 text-white py-2.5 rounded-lg hover:bg-purple-700 font-medium"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}
