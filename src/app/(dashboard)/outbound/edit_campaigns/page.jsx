"use client";

import React, { useState } from "react";
import Sidebar from "@/components/ui/sidebar/Sidebar";
import ReusableHeader from "@/components/ui/header/.ReusableHeader";
import EditSearchBar from "@/components/ui/search_bar/EditSearchBar";
import CampaignForm from "@/components/CampaignForm";

export default function Page() {
  const [isOpen, setIsOpen] = useState(true);

  const handleUpdate = () => {
    alert("Campaign Updated (mock)");
  };

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      <div className="h-full">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <ReusableHeader section="Outbound Campaigns" page="Edit Campaign" onToggleSidebar={() => setIsOpen(!isOpen)} />

        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          <div className="p-3">
            <EditSearchBar />
          </div>

          <CampaignForm mode="edit" onSubmit={handleUpdate} onChange={() => {}} />
        </div>
      </div>
    </div>
  );
}


