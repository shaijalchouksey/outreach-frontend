"use client";

import { useState } from "react";
import Sidebar from "@/components/ui/sidebar/Sidebar";
import ReusableHeader from "@/components/ui/header/.ReusableHeader";
import InsightBar from "@/components/ui/search_bar/InsightBar";
import InsightCardGrid from "@/components/ui/States/InsightCardGrid";
import EngagementOverTimeChart from "@/components/ui/charts/EngagementOverTimeChart";
import RepliesInboxTable from "@/components/RepliesInboxTable";
import { Megaphone, Mail, Send, TrendingUp, User } from "lucide-react";

export default function Page() {
  const [isOpen, setIsOpen] = useState(true);
  const [showTag, setShowTag] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const [activeLead, setActiveLead] = useState(null);

  const cards = [
    { icon: Megaphone, title: "Total Messages Sent", value: "1240", trendIcon: "up", trendText: "+20% This week", subtext: "Across all platforms" },
    { icon: Mail, title: "Open Rate", value: "68%", trendIcon: "up", trendText: "48% open rate This week", subtext: "This week" },
    { icon: Send, title: "Positive Replies", value: "130", trendIcon: "up", trendText: "+ Across all platforms", subtext: "" },
    { icon: Send, title: "Negative Replies", value: "110", trendIcon: "down", trendText: "Across all platforms", subtext: "" },
    { icon: Mail, title: "Replies", value: "240", trendIcon: "up", trendText: "48% open rate This week", subtext: "" },
    { icon: User, title: "Conversion Rate", value: "10.8%", trendIcon: "up", trendText: "+3.5k New This week", subtext: "" },
  ];

  const replies = [
    { name: "Rahul Sharma", company: "Innovexa", reply: "Hey, sounds good. Let's schedule a call.", type: "Positive", date: "Oct 30, 2025" },
    { name: "Sneha Kapoor", company: "BlueData Labs", reply: "Currently not interested.", type: "Negative", date: "Oct 25, 2025" },
    { name: "Arjun Mehta", company: "CloudEdge", reply: "Can you share pricing details?", type: "Positive", date: "Oct 25, 2025" },
    { name: "Priya Nair", company: "Nexware", reply: "We're open to trying your pilot.", type: "Negative", date: "Oct 23, 2025" },
  ];

  const openTag = (lead) => { setActiveLead(lead); setShowTag(true); };
  const openNote = (lead) => { setActiveLead(lead); setShowNote(true); };

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      <div className="h-full">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <ReusableHeader section="Outbound Campaigns" page="Campaign Insights" onToggleSidebar={() => setIsOpen(!isOpen)} />

        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          <InsightBar
            title="Product Launch Outreach"
            status="Active"
            duration="Oct 18, 2025 - Oct 24, 2025"
            platform="LinkedIn"
            onRefresh={() => {}}
            onExport={() => {}}
          />

          {/* Top metrics + chart */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <InsightCardGrid title="Overview Metrics" cards={cards} />
            </div>
            <div>
              <EngagementOverTimeChart />
            </div>
          </div>

          {/* Replies Inbox */}
          <RepliesInboxTable
            title="Replies Inbox"
            data={replies}
            onReply={(lead) => alert(`Reply to ${lead.name}`)}
            onTagLead={openTag}
            onAddNote={openNote}
            onViewAll={() => alert("View all replies")}
          />
        </div>
      </div>

      {/* Tag Lead Modal */}
      {showTag && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-3" onClick={() => setShowTag(false)}>
          <div className="bg-white w-full max-w-sm rounded-xl border border-gray-200 shadow-lg p-4" onClick={(e)=>e.stopPropagation()}>
            <div className="text-gray-900 font-semibold mb-2">Tag Lead</div>
            <div className="text-sm text-gray-600 mb-2">Select Tag</div>
            <div className="space-y-2 text-sm text-gray-700">
              <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Hot</label>
              <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Warm</label>
              <label className="flex items-center gap-2"><input type="checkbox" /> Cold</label>
            </div>
            <input className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mt-3" placeholder="Add New Tag" />
            <div className="flex justify-end gap-2 mt-3">
              <button className="px-3 py-1.5 bg-gray-100 rounded-md text-sm" onClick={()=>setShowTag(false)}>Cancel</button>
              <button className="px-3 py-1.5 bg-purple-600 text-white rounded-md text-sm" onClick={()=>setShowTag(false)}>Save Tag</button>
            </div>
          </div>
        </div>
      )}

      {/* Add Note Modal */}
      {showNote && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-3" onClick={() => setShowNote(false)}>
          <div className="bg-white w-full max-w-lg rounded-xl border border-gray-200 shadow-lg p-5" onClick={(e)=>e.stopPropagation()}>
            <div className="text-gray-900 font-semibold mb-2">Add Note</div>
            <div className="text-sm text-gray-700 mb-1">Assign Team Member</div>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-3">
              <option>Riteish. S</option>
              <option>Akash. S</option>
            </select>
            <div className="text-sm text-gray-700 mb-1">Note</div>
            <textarea className="w-full h-28 border border-gray-300 rounded-md px-3 py-2 text-sm" placeholder={`Add internal note for ${activeLead?.name || "lead"}`} />
            <div className="flex justify-end gap-2 mt-3">
              <button className="px-3 py-1.5 bg-gray-100 rounded-md text-sm" onClick={()=>setShowNote(false)}>Cancel</button>
              <button className="px-3 py-1.5 bg-purple-600 text-white rounded-md text-sm" onClick={()=>setShowNote(false)}>Save Note</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


