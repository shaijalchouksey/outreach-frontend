'use client';

import React, { useState } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";

export default function FacebookFilterPanel({ onClose, onApply }) {
  const [collapsed, setCollapsed] = useState([]);
  const [pageType, setPageType] = useState("");
  const [sourceType, setSourceType] = useState([]);
  const [signalType, setSignalType] = useState([]);
  const [automationCriteria, setAutomationCriteria] = useState([]);
  const [timeRange, setTimeRange] = useState([]);
  const [keywords, setKeywords] = useState(["#AI", "#marketing", "#Hiring"]);
  const [newKeyword, setNewKeyword] = useState("");

  const toggleCollapse = (name) => {
    setCollapsed((prev) =>
      prev.includes(name)
        ? prev.filter((n) => n !== name)
        : [...prev, name]
    );
  };

  const isCollapsed = (name) => collapsed.includes(name);

  const toggleArray = (arr, setter, val) => {
    setter(arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val]);
  };

  const handleAddKeyword = () => {
    if (newKeyword.trim() && !keywords.includes(newKeyword)) {
      setKeywords([...keywords, newKeyword.trim()]);
      setNewKeyword("");
    }
  };

  return (
    <div
      className="w-full sm:w-96 max-w-[min(90vw,24rem)] bg-white shadow-lg border-l border-gray-200 flex flex-col h-full
                 [&_input[type='checkbox']]:h-4 [&_input[type='checkbox']]:w-4 [&_input[type='checkbox']]:rounded-sm 
                 [&_input[type='checkbox']]:border-gray-300 [&_input[type='checkbox']]:checked:bg-blue-600 
                 [&_input[type='checkbox']]:checked:border-transparent [&_input[type='checkbox']]:focus:ring-blue-500"
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200 h-[65px]">
        <h3 className="font-semibold text-lg text-gray-900">Filters</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-6 space-y-6 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">

        {/* Page Type */}
        <div>
          <button
            onClick={() => toggleCollapse("Page Type")}
            className="flex justify-between items-center w-full mb-3"
          >
            <h4 className="font-medium text-gray-800">Page Type</h4>
            {isCollapsed("Page Type") ? (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronUp className="w-4 h-4 text-gray-400" />
            )}
          </button>
          {!isCollapsed("Page Type") && (
            <div className="flex flex-wrap gap-4">
              {["Person", "Company"].map((type) => (
                <label key={type} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={pageType === type}
                    onChange={() => setPageType(type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Source Type */}
        <div>
          <button
            onClick={() => toggleCollapse("Source Type")}
            className="flex justify-between items-center w-full mb-3"
          >
            <h4 className="font-medium text-gray-800">Source Type</h4>
            {isCollapsed("Source Type") ? (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronUp className="w-4 h-4 text-gray-400" />
            )}
          </button>
          {!isCollapsed("Source Type") && (
            <div className="space-y-2">
              {["Page Posts", "Reels", "Ads Library"].map((type) => (
                <label key={type} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={sourceType.includes(type)}
                    onChange={() => toggleArray(sourceType, setSourceType, type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Signal Type */}
        <div>
          <button
            onClick={() => toggleCollapse("Signal Type")}
            className="flex justify-between items-center w-full mb-3"
          >
            <h4 className="font-medium text-gray-800">Signal Type</h4>
            {isCollapsed("Signal Type") ? (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronUp className="w-4 h-4 text-gray-400" />
            )}
          </button>
          {!isCollapsed("Signal Type") && (
            <div className="space-y-2">
              {[
                "Likes",
                "Comments",
                "Shares",
                "Engagement Spike",
                "New Ad Posted",
                "Trending Reel",
              ].map((type) => (
                <label key={type} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={signalType.includes(type)}
                    onChange={() => toggleArray(signalType, setSignalType, type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Keyword / Hashtag */}
        <div>
          <button
            onClick={() => toggleCollapse("Keyword / Hashtag")}
            className="flex justify-between items-center w-full mb-3"
          >
            <h4 className="font-medium text-gray-800">Keyword / Hashtag</h4>
            {isCollapsed("Keyword / Hashtag") ? (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronUp className="w-4 h-4 text-gray-400" />
            )}
          </button>
          {!isCollapsed("Keyword / Hashtag") && (
            <>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type keyword or hashtag"
                  value={newKeyword}
                  onChange={(e) => setNewKeyword(e.target.value)}
                  className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button
                  onClick={handleAddKeyword}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600 text-sm font-medium"
                >
                  Add
                </button>
              </div>

              <div className="flex flex-col gap-2 mt-3">
                {keywords.map((kw) => (
                  <label key={kw} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={keywords.includes(kw)}
                      onChange={() => toggleArray(keywords, setKeywords, kw)}
                    />
                    {kw}
                  </label>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Automation Criteria */}
        <div>
          <button
            onClick={() => toggleCollapse("Automation Criteria")}
            className="flex justify-between items-center w-full mb-3"
          >
            <h4 className="font-medium text-gray-800">Automation Criteria</h4>
            {isCollapsed("Automation Criteria") ? (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronUp className="w-4 h-4 text-gray-400" />
            )}
          </button>
          {!isCollapsed("Automation Criteria") && (
            <div className="space-y-2">
              {[
                "Check Post (Every 24hrs)",
                "Consider Analysis (>100 Comments/Engagement)",
              ].map((opt) => (
                <label key={opt} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={automationCriteria.includes(opt)}
                    onChange={() =>
                      toggleArray(automationCriteria, setAutomationCriteria, opt)
                    }
                  />
                  {opt}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Time Range */}
        <div>
          <button
            onClick={() => toggleCollapse("Time Range")}
            className="flex justify-between items-center w-full mb-3"
          >
            <h4 className="font-medium text-gray-800">Time Range</h4>
            {isCollapsed("Time Range") ? (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronUp className="w-4 h-4 text-gray-400" />
            )}
          </button>
          {!isCollapsed("Time Range") && (
            <div className="space-y-2">
              {["Today", "Last 7 Days", "Last 30 Days"].map((range) => (
                <label key={range} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={timeRange.includes(range)}
                    onChange={() => toggleArray(timeRange, setTimeRange, range)}
                  />
                  {range}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-200 bg-white">
        <button
          onClick={() => onApply({ pageType, sourceType, signalType, keywords, automationCriteria, timeRange })}
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 font-medium"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}
