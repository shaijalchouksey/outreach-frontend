"use client";

import React, { useState } from "react";
import IntentHeader from "@/components/ui/header/CompetitorHeader";
import Sidebar from "@/components/ui/sidebar/Sidebar";
import CompetitorSearchBar from "@/components/ui/search_bar/CompetitorSearchBar";
import CompetitorFilterPanel from "@/components/ui/filters/CompetitorFilterPanel";
import StatsGrid from "@/components/ui/States/StatsGrid";
import SignalDistributionChart from "@/components/ui/charts/SignalDistributionChart";
import TopPerformingSources from "@/components/ui/charts/TopPerformingSources";
import DonutChart from "@/components/ui/charts/DonutChart";
import TrendingHashtags from "@/components/TrendingHashtags";
import HighEngagementPosts from "@/components/HighEngagementPosts";
import HighEngagementProfiles from "@/components/HighEngagementProfiles";
import ActivityInsightsTable from "@/components/ActivityInsightsTable";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({});

  const statsCards = [
    {
      title: "Mentions Detected",
      value: "1,247",
      trend: -0.5,
      trendText: "-0.5% from last week",
    },
    {
      title: "Avg Engagement Rate",
      value: "3.2%",
      trend: 1.0,
      trendText: "+1.0% from last week",
    },
    {
      title: "Top Platform",
      value: "LinkedIn",
      trend: 6.0,
      trendText: "+6.0% from last week",
    },
    {
      title: "Audience Sentiment",
      value: "72%",
      trend: 0.5,
      trendText: "+0.5% from last week",
    },
  ];

  const interactionData = [
    { label: "Instagram", value: 38 },
    { label: "Facebook", value: 27 },
    { label: "Twitter (X)", value: 14 },
    { label: "YouTube", value: 9 },
    { label: "Reddit", value: 6 },
    { label: "Others", value: 6 },
  ];

  const topSourcesData = [
    { name: "LinkedIn", value: 38, color: "#7C3AED" },
    { name: "Instagram", value: 27, color: "#A78BFA" },
    { name: "Facebook", value: 14, color: "#C4B5FD" },
    { name: "Twitter (X)", value: 12, color: "#DDD6FE" },
    { name: "YouTube", value: 9, color: "#EDE9FE" },
  ];

  const topPerformingPosts = [
    {
      handle: "@AI_Tech",
      description: "\"Papa John's most active on Instagram launches new offer\"",
      views: "20k Views",
    },
    {
      handle: "@Marketing_Org",
      description: "5 pizza marketing trends that drove buzz this week",
      views: "25k Views",
    },
  ];

  const trendingHashtags = [
    "#marketing",
    "#pizzaoffer",
    "#Snakes",
    "#pizza",
    "#snaks",
  ];

  const highEngagementProfiles = [
    {
      img: "https://i.pravatar.cc/100?img=12",
      name: "Dominos US",
      role: "Brand Marketing",
      engagement: "19k",
    },
    {
      img: "https://i.pravatar.cc/100?img=22",
      name: "Papa John's",
      role: "Growth Team",
      engagement: "17k",
    },
    {
      img: "https://i.pravatar.cc/100?img=33",
      name: "Blaze Pizza",
      role: "Digital",
      engagement: "15k",
    },
  ];

  const tableColumns = [
    "Competitor",
    "Platform",
    "Signal Type",
    "Post / Topic",
    "URL",
    "Intent Score",
    "Last Seen",
  ];

  const tableData = [
    {
      competitor: "Dominos",
      platform: "LinkedIn",
      signaltype: "Post",
      "post/topic": "New Launch Offer",
      url: "https://lorem.ig.com/reel5678",
      intentscore: "92",
      lastseen: "2 hrs ago",
    },
    {
      competitor: "Papa John's",
      platform: "Instagram",
      signaltype: "Reel",
      "post/topic": "New Cheese Burst",
      url: "https://lorem.ig.com/reel5678",
      intentscore: "88",
      lastseen: "2 hrs ago",
    },
    {
      competitor: "Blaze Pizza",
      platform: "Facebook",
      signaltype: "Post",
      "post/topic": "New Launch Offer",
      url: "https://lorem.ig.com/reel5678",
      intentscore: "76",
      lastseen: "2 hrs ago",
    },
  ];

  // Handler functions
  const handleSearch = () => {
    console.log("Search triggered");
  };

  const handleFilter = () => {
    setIsFilterOpen(true);
  };

  const handleAddCompetitor = () => {
    console.log("Add competitor");
  };

  const handleExport = () => {
    console.log("Export triggered");
  };

  const handleFilterClose = () => {
    setIsFilterOpen(false);
  };

  const handleFilterApply = (filters) => {
    setAppliedFilters(filters);
    setIsFilterOpen(false);
    console.log("Filters applied:", filters);
  };

  const handleActionClick = (row) => {
    console.log("Action clicked for row:", row);
  };

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      {/* Sidebar */}
      <div className="h-full">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Header */}
        <div className="flex-shrink-0">
          <IntentHeader onToggleSidebar={() => setIsOpen(!isOpen)} />
        </div>

        {/* Main content area with filter */}
        <div className="flex-1 flex overflow-hidden relative">
          {/* Scrollable content area */}
          <div
            className={`flex-1 overflow-y-auto p-4 md:p-6 transition-all duration-300 ${isFilterOpen ? "mr-96" : ""
              }`}
          >
            {/* Search Bar */}
            <div className="mb-6">
              <CompetitorSearchBar
                placeholder="Search new competitors..."
                onSearch={handleSearch}
                onFilter={handleFilter}
                onAdd={handleAddCompetitor}
                onExport={handleExport}
                showFilter
                showAdd
                showExport
                isFilterActive={isFilterOpen}
              />
            </div>

            {/* Stats Grid */}
            <StatsGrid statsCards={statsCards} />

            {/* Charts Section */}
            {/* Analytics Section */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 mb-6 items-stretch">
              {/* Left: Platforms Contribution */}
              <div className="xl:col-span-2 bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-start h-[59vh]">
                <SignalDistributionChart
                  title="Platforms Contribution"
                  data={interactionData}
                  highlight={{
                    text: "LinkedIn drove 38% of all competitor mentions this week",
                    subText: "(+12% vs last week)",
                  }}
                  color="purple"
                />
              </div>

              {/* Right Column */}
              <div className="flex flex-col justify-start gap-2 h-full">
                  <TrendingHashtags
                    title="Trending Hashtags"
                    tags={trendingHashtags}
                    color="purple"
                  />
                {/* High Engagement Posts Card */}
                  <HighEngagementPosts
                    title="High Engagement Posts"
                    posts={topPerformingPosts}
                    color="purple"
                    height="auto"
                  />
              </div>
            </div>

            {/* Activity Insights Table */}
            <div>
              <ActivityInsightsTable
                title="Activity Insights"
                columns={tableColumns}
                data={tableData}
                onActionClick={handleActionClick}
                color="purple"
              />
            </div>
          </div>

          {/* Filter Panel */}
          <div
            className={`absolute right-0 top-0 bottom-0 z-40 transition-transform duration-300 ease-in-out ${isFilterOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
          >
            <CompetitorFilterPanel
              onClose={handleFilterClose}
              onApply={handleFilterApply}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
