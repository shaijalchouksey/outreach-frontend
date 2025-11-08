"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/ui/sidebar/Sidebar";
import OutboundHeader from "@/components/ui/header/OutboundHeader";
import OutboundStats from "@/components/ui/States/OutboundStats";
import OutboundSearchBar from "@/components/ui/search_bar/OutboundSearchBar";
import OutboundActivityInsightsTable from "@/components/OutboundActivityInsightsTable";

const mockCampaigns = [
  { name: "Product Launch Outreach", platform: "LinkedIn", status: "Active", leads: "1,240", messages: "980", openRate: "72%", created: "Oct 18, 2025" },
  { name: "Product Launch Outreach", platform: "LinkedIn", status: "Active", leads: "1,240", messages: "980", openRate: "72%", created: "Oct 18, 2025" },
  { name: "Product Launch Outreach", platform: "Email", status: "Completed", leads: "1,240", messages: "980", openRate: "72%", created: "Oct 18, 2025" },
  { name: "Product Launch Outreach", platform: "LinkedIn", status: "Active", leads: "1,240", messages: "980", openRate: "72%", created: "Oct 18, 2025" },
  { name: "Product Launch Outreach", platform: "Instagram", status: "Scheduled", leads: "1,240", messages: "980", openRate: "72%", created: "Oct 18, 2025" },
];

export default function Page() {
  const [isOpen, setIsOpen] = useState(true);
  const [campaigns, setCampaigns] = useState(mockCampaigns);
  const router = useRouter();

  const handleAction = (row, action) => {
    if (action === "delete") {
      setCampaigns((prev) => prev.filter((c) => c !== row));
      return;
    }
    if (action === "insights") {
      router.push("/outbound/insights");
      return;
    }
    if (action === "edit") {
      router.push("/outbound/edit_campaigns");
      return;
    }
    alert(`${action.toUpperCase()} → ${row.name}`);
  };

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      {/* Sidebar */}
      <div className="h-full">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <OutboundHeader section="Outbound Campaigns" onToggleSidebar={() => setIsOpen(!isOpen)} />

        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          {/* Top bar */}
          <div className="bg-white rounded-xl border border-gray-200 p-3">
            <OutboundSearchBar
              onNewCampaign={() => router.push("/outbound/new_campaigns")}
              onAutomationSettings={() => router.push("/outbound/automation_settings")}
            />
          </div>

          <OutboundStats />

          <OutboundActivityInsightsTable
            title="All Campaigns"
            results={`Showing 1–${campaigns.length} of ${campaigns.length} results`}
            viewAllLink="#"
            campaigns={campaigns}
            onAction={handleAction}
          />
        </div>
      </div>
    </div>
  );
}


