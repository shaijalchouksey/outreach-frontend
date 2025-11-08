import {
  BarChart2,
  LayoutGrid,
  Network,
  Send,
  Settings
} from "lucide-react";

export const sidebarMenu = [
  {
    label: "Dashboard",
    icon: LayoutGrid,
    href: "/dashboard",
  },
  {
    label: "Intent Signals",
    icon: Network,
    active: true,
    submenu: [
      "competitor_tracking",
      "linkdin",
      "instagram",
      "facebook",
      "threads",
      "twitter",
      "tiktok",
      "youtube",
    ].map((name) => ({
      label: name,
      href: `/intent_signals/${name.toLowerCase()}`,
    })),
  },
  {
    label: "Outbound Campaign",
    icon: Send,
    submenu: [
      { label: "Campaign", href: "/outbound/campaigns" },
      { label: "Leads-Inbox", href: "/outbound/lead_inbox" },
      { label: "Automation Settings", href: "/outbound/automation_settings" },
    ],
  },

  {
    label: "SaaS Research",
    icon: BarChart2,
    href: "/saas-research",
  },
  {
    label: "Reports",
    icon: BarChart2,
    href: "/reports",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];
