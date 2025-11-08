"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Settings, Send, RefreshCw, MailCheck } from "lucide-react";
import Sidebar from "@/components/ui/sidebar/Sidebar";
import ReusableHeader from "@/components/ui/header/.ReusableHeader";
import AutomationSettingsLayout from "@/components/outbound_settings/AutomationSettingsLayout";
import GeneralRulesPanel from "@/components/outbound_settings/GeneralRulesPanel";
import SendSchedulePanel from "@/components/outbound_settings/SendSchedulePanel";
import FollowUpsPanel from "@/components/outbound_settings/FollowUpsPanel";
import ReplyDetectionPanel from "@/components/outbound_settings/ReplyDetectionPanel";

export default function Page() {
  const [isOpen, setIsOpen] = useState(true);
  const [settings, setSettings] = useState(defaultSettings);
  const router = useRouter();

  const handleReset = () => setSettings(defaultSettings);
  const handleUpdate = () => alert("Automation settings updated (mock)");

  const sections = {
    "general": <GeneralRulesPanel state={settings} setState={setSettings} />,
    "schedule": <SendSchedulePanel state={settings} setState={setSettings} />,
    "followups": <FollowUpsPanel state={settings} setState={setSettings} />,
    "reply": <ReplyDetectionPanel state={settings} setState={setSettings} />,
  };

  const navItems = [
    { id: "general", label: "General Rules", icon: Settings },
    { id: "schedule", label: "Send Schedule", icon: Send },
    { id: "followups", label: "Follow-ups", icon: RefreshCw },
    { id: "reply", label: "Reply Detection", icon: MailCheck },
  ];

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      <div className="h-full">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <ReusableHeader section="Outbound Campaigns" page="Automation Settings" onToggleSidebar={() => setIsOpen(!isOpen)} />

        <div className="flex-1 overflow-y-auto">
          <AutomationSettingsLayout
            sections={sections}
            navItems={navItems}
            onReset={handleReset}
            onUpdate={handleUpdate}
            onBack={() => router.push("/outbound/campaigns")}
          />
        </div>
      </div>
    </div>
  );
}

const defaultSettings = {
  general: {
    stopOnReply: true,
    avoidDuplicates: true,
    autoArchive: true,
    archiveAfter: "30 days",
    timezone: "GMT +5:30 (India Standard Time)",
  },
  schedule: {
    enabled: true,
    days: { Monday: true, Tuesday: true, Wednesday: true, Thursday: true, Friday: true, Saturday: true, Sunday: true },
    from: "09:00 AM",
    to: "06:00 PM",
    dailyLimit: "300",
    delay: "30–90 seconds",
  },
  followups: {
    enabled: true,
    stopOnReply: true,
    after: "1 day",
    max: "1",
    days: { Monday: true, Tuesday: true, Wednesday: true, Thursday: true, Friday: true, Saturday: true, Sunday: true },
  },
  reply: {
    enabled: true,
    excludeAuto: true,
    positive: "Pause Campaign / Mark as Interested",
    negative: "Stop Campaign / Mark as not Interested",
    uncertain: "Flag for Manual Review",
    mode: "Standard",
  },
};


