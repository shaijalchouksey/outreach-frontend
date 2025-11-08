'use client';

import React, { useState } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";

export default function CompetitorFilterPanel({ onClose, onApply }) {
  const [collapsed, setCollapsed] = useState([]);
  const [competitors, setCompetitors] = useState([]);
  const [sources, setSources] = useState([]);
  const [signalType, setSignalType] = useState([]);
  const [keywords, setKeywords] = useState(["#pizza", "#marketing"]);
  const [newKeyword, setNewKeyword] = useState("");
  const [timeRange, setTimeRange] = useState([]);

  // Collapse toggler
  const toggleCollapse = (name) => {
    setCollapsed((prev) =>
      prev.includes(name)
        ? prev.filter((n) => n !== name)
        : [...prev, name]
    );
  };
  const isCollapsed = (name) => collapsed.includes(name);

  // Checkbox toggler
  const toggleArray = (arr, setter, val) => {
    setter(arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val]);
  };

  // Add new hashtag/keyword
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
                 [&_input[type='checkbox']]:border-gray-300 [&_input[type='checkbox']]:checked:bg-indigo-600 
                 [&_input[type='checkbox']]:checked:border-transparent [&_input[type='checkbox']]:focus:ring-indigo-500"
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

        {/* Competitors */}
        <div>
          <button
            onClick={() => toggleCollapse("Competitors")}
            className="flex justify-between items-center w-full mb-3"
          >
            <h4 className="font-medium text-gray-800">Competitors</h4>
            {isCollapsed("Competitors") ? (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronUp className="w-4 h-4 text-gray-400" />
            )}
          </button>

          {!isCollapsed("Competitors") && (
            <div className="space-y-2 text-black">
              {[
                "Domino’s",
                "Papa John’s",
                "Pizza Express",
                "Blaze Pizza",
              ].map((comp) => (
                <label key={comp} className="flex items-center gap-2 text-sm text-black">
                  <input
                    type="checkbox"
                    checked={competitors.includes(comp)}
                    onChange={() => toggleArray(competitors, setCompetitors, comp)}
                  />
                  {comp}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Sources */}
        <div>
          <button
            onClick={() => toggleCollapse("Sources")}
            className="flex justify-between items-center w-full mb-3"
          >
            <h4 className="font-medium text-gray-800">Sources</h4>
            {isCollapsed("Sources") ? (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronUp className="w-4 h-4 text-gray-400" />
            )}
          </button>

          {!isCollapsed("Sources") && (
            <div className="space-y-2 text-black">
              {[
                "Linkedin",
                "Instagram",
                "Twitter (X)",
                "Facebook",
                "Threads",
                "TikTok",
                "YouTube",
                "Reddit",
                "Quora",
                "More",
              ].map((src) => (
                <label key={src} className="flex items-center gap-2 text-sm text-black">
                  <input
                    type="checkbox"
                    checked={sources.includes(src)}
                    onChange={() => toggleArray(sources, setSources, src)}
                  />
                  {src}
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
            <div className="space-y-2 text-black">
              {[
                "Posts",
                "Likes",
                "Comments",
                "Shares",
                "Jobs",
                "Hashtag",
                "Keyword",
                "Updates",
                "More",
              ].map((sig) => (
                <label key={sig} className="flex items-center gap-2 text-sm text-black">
                  <input
                    type="checkbox"
                    checked={signalType.includes(sig)}
                    onChange={() => toggleArray(signalType, setSignalType, sig)}
                  />
                  {sig}
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
                  className="w-full pl-4 pr-12 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                />
                <button
                  onClick={handleAddKeyword}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-600 text-sm font-medium"
                >
                  Add
                </button>
              </div>

              <div className="flex flex-col gap-2 mt-3 text-black">
                {keywords.map((kw) => (
                  <label key={kw} className="flex items-center gap-2 text-sm text-black cursor-pointer">
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
            <div className="space-y-2 text-black">
              {["Today", "Last 7 Days", "Last 30 Days"].map((range) => (
                <label key={range} className="flex items-center gap-2 text-sm text-black cursor-pointer">
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

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <button
          onClick={() =>
            onApply({ competitors, sources, signalType, keywords, timeRange })
          }
          className="w-full bg-indigo-600 text-white py-2.5 rounded-lg hover:bg-indigo-700 font-medium"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}
