"use client";

import { useMemo, useState } from "react";
import Sidebar from "@/components/ui/sidebar/Sidebar";
import LeadHeader from "@/components/ui/header/LeadHeader";
import LeadPlatformList from "@/components/leads/LeadPlatformList";
import LeadCampaignSelector from "@/components/leads/LeadCampaignSelector";
import LeadConversationList from "@/components/leads/LeadConversationList";
import LeadThread from "@/components/leads/LeadThread";

export default function Page() {
  const [isOpen, setIsOpen] = useState(true);
  const [activePlatform, setActivePlatform] = useState("Instagram DMs");
  const [campaign, setCampaign] = useState("Product Launch Campaign");
  const [tab, setTab] = useState("All");
  const [selectedLeadId, setSelectedLeadId] = useState(null);

  const [leadsByPlatform, setLeadsByPlatform] = useState({
    "Instagram DMs": [
      {
        id: 1,
        name: "Riya Sharma",
        avatar: "https://i.pravatar.cc/100?img=32",
        preview: "Hey Riya 👋 I came across...",
        time: "2 min ago",
        platform: "Instagram",
        unread: true,
        tags: ["Hot", "Warm"],
        status: "Unread",
        messages: [
          { from: "lead", text: "Hey Riya 👋 I came across FitEra — love how you’re promoting daily fitness habits!" },
          { from: "me", text: "Hey! That sounds interesting ✨ Tell me more about it." },
          { from: "lead", text: "We connect brands with 100+ verified nano creators..." },
        ],
        notes: [],
      },
      {
        id: 2,
        name: "Aman Verma",
        avatar: "https://i.pravatar.cc/100?img=15",
        preview: "Sure, send it over.",
        time: "5 min ago",
        platform: "Instagram",
        unread: false,
        tags: ["Warm"],
        status: "Read",
        messages: [{ from: "lead", text: "Sure, send it over. I'll check it out later." }],
        notes: [],
      },
    ],
  });

  const platformsCount = useMemo(() => {
    const counts = {};
    Object.keys(leadsByPlatform).forEach((p) => (counts[p] = leadsByPlatform[p].length));
    return counts;
  }, [leadsByPlatform]);

  const allLeads = leadsByPlatform[activePlatform] || [];
  const filteredLeads = allLeads.filter((l) => (tab === "All" ? true : l.status === tab));
  const selectedLead = filteredLeads.find((l) => l.id === selectedLeadId) || filteredLeads[0];

  const updateLead = (updater) => {
    setLeadsByPlatform((prev) => {
      const list = prev[activePlatform] || [];
      const updated = list.map((l) => (l.id === selectedLead?.id ? updater(l) : l));
      return { ...prev, [activePlatform]: updated };
    });
  };

  const handleSendMessage = (text) => {
    updateLead((l) => ({
      ...l,
      messages: [...l.messages, { from: "me", text }],
      unread: false,
      status: "Read",
      preview: text,
      time: "just now",
    }));
  };

  const handleSaveTags = (tags) => updateLead((l) => ({ ...l, tags }));
  const handleSaveNote = (note) =>
    updateLead((l) => ({ ...l, notes: [...(l.notes || []), { ...note, at: Date.now() }] }));

  return (
    <div className="h-screen bg-gray-50 flex flex-col md:flex-row overflow-hidden">
      {/* Sidebar */}
      <div className="md:h-full md:flex-shrink-0">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <LeadHeader
          section="Outbound Campaigns"
          page="Lead Inbox"
          lastSynced="2h"
          user={{
            name: "Pizza Hut",
            role: "User",
            avatar: null,
          }}
          onToggleSidebar={() => setIsOpen(!isOpen)}
        />

        {/* Content Area */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 overflow-hidden">
          {/* Platform List (Left Column) */}
          <div className="hidden lg:flex lg:col-span-3 border-r border-gray-200 bg-white flex-col">
            <div className="p-3 font-semibold text-gray-900 flex items-center justify-between">
              Lead Inbox
            </div>
            <LeadPlatformList
              active={activePlatform}
              onSelect={(p) => {
                setActivePlatform(p);
                setSelectedLeadId(undefined);
              }}
              counts={platformsCount}
            />
          </div>

          {/* Campaign & Conversation List (Middle Column) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 border-r border-gray-200 bg-white flex flex-col overflow-hidden">
            <LeadCampaignSelector
              selected={campaign}
              onChange={setCampaign}
              tab={tab}
              onTabChange={setTab}
            />
            <div className="flex-1 overflow-y-auto">
              <LeadConversationList
                leads={filteredLeads}
                selectedId={selectedLead?.id}
                onSelect={(l) => setSelectedLeadId(l.id)}
              />
            </div>
          </div>

          {/* Lead Thread (Right Column) */}
          <div className="hidden sm:flex lg:col-span-6 bg-white flex-col">
            <LeadThread
              lead={selectedLead}
              onSendMessage={handleSendMessage}
              onSaveTags={handleSaveTags}
              onSaveNote={handleSaveNote}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
