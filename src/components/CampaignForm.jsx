"use client";

import { useState } from "react";
import { Plus, Calendar, ChevronDown } from "lucide-react";

export default function CampaignForm({
  mode = "create", // 'create' | 'edit'
  onSubmit = () => {},
  onChange = () => {},
}) {
  const [showLeadFilters, setShowLeadFilters] = useState(false);
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [sendImmediately, setSendImmediately] = useState(true);
  const [automationEnabled, setAutomationEnabled] = useState(true);

  const isEdit = mode === "edit";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="space-y-5 w-full max-w-5xl mx-auto"
    >
      {/* SECTION 1: Campaign Details */}
      <section className="bg-white rounded-lg border border-gray-200 p-5 space-y-4 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900">Campaign Details</h3>

        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium text-gray-700">Campaign Name</label>
            <input
              type="text"
              placeholder="Enter Campaign Name"
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
              onChange={(e) => onChange("name", e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Description</label>
            <textarea
              placeholder="Describe your campaign goal and audience"
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm h-24 focus:ring-2 focus:ring-purple-500 outline-none"
              onChange={(e) => onChange("description", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Campaign Type</label>
              <select className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Platform</label>
              <select className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none">
                <option>Select</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Audience & Targeting */}
      <section className="bg-white rounded-lg border border-gray-200 p-5 space-y-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Audience & Targeting</h3>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            Lead Filters (Advanced Filters)
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={showLeadFilters}
                onChange={() => setShowLeadFilters(!showLeadFilters)}
                className="sr-only peer"
              />
              <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-purple-600 transition-all"></div>
              <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></div>
            </label>
          </div>
        </div>

        {/* Basic Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Target List</label>
            <select className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm">
              <option>Choose from your saved lead lists</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Select Industry</label>
            <select className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm">
              <option>Select</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Select Region</label>
            <select className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm">
              <option>Select</option>
            </select>
          </div>
        </div>

        {/* Advanced Filters */}
        {showLeadFilters && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
            <div>
              <label className="text-sm font-medium text-gray-700">Job Title</label>
              <select className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Company Size</label>
              <select className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Keywords</label>
              <select className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm">
                <option>Select</option>
              </select>
            </div>
          </div>
        )}
      </section>

      {/* SECTION 3: Message Setup */}
      <section className="bg-white rounded-lg border border-gray-200 p-5 space-y-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Message Setup</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Subject Line</label>
            <input
              type="text"
              placeholder="Enter message subject here"
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Industry</label>
            <select className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm">
              <option>Select</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Message Body</label>
          <textarea
            placeholder="Describe your message here..."
            className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm h-24"
          />
        </div>

        {/* Follow-up Toggle */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-700">Add Follow-up Message</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={showFollowUp}
              onChange={() => setShowFollowUp(!showFollowUp)}
              className="sr-only peer"
            />
            <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-purple-600 transition-all"></div>
            <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></div>
          </label>
        </div>

        {/* Follow-up Section */}
        {showFollowUp && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-700">Message Body</label>
              <textarea
                placeholder="Describe your message here..."
                className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm h-20"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Send After</label>
              <select className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm">
                <option>Select</option>
              </select>
            </div>
          </div>
        )}

        <button className="text-purple-600 text-sm font-medium flex items-center gap-1 mt-2 hover:text-purple-700">
          <Plus className="w-4 h-4" /> Add Another Follow-up
        </button>
      </section>

      {/* SECTION 4: Schedule Campaign */}
      <section className="bg-white rounded-lg border border-gray-200 p-5 space-y-4 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900">Schedule Campaign</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div>
            <label className="text-sm font-medium text-gray-700">Start Date</label>
            <div className="relative">
              <input
                type="date"
                className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
              />
              <Calendar className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Send Frequency</label>
            <select className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm">
              <option>Select</option>
            </select>
          </div>

          <div className="flex items-center justify-between md:col-span-1">
            <label className="text-sm font-medium text-gray-700">Automation Rule*</label>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              Stop when lead replies
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={automationEnabled}
                  onChange={() => setAutomationEnabled(!automationEnabled)}
                  className="sr-only peer"
                />
                <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-purple-600 transition-all"></div>
                <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-3">
          <input
            type="checkbox"
            checked={sendImmediately}
            onChange={() => setSendImmediately(!sendImmediately)}
            className="w-4 h-4 text-purple-600 border-gray-300 rounded"
          />
          <span className="text-sm text-gray-700">Send Immediately</span>
        </div>
      </section>
    </form>
  );
}
