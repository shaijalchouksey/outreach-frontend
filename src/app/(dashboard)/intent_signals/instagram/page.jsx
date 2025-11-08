"use client";

import React, { useState } from "react";
import IntentHeader from "@/components/ui/header/InstagramHeader";
import Sidebar from "@/components/ui/sidebar/Sidebar";
import SearchBar from "@/components/ui/search_bar/SearchBar";
import InstagramFilterPanel from "@/components/ui/filters/InstagramFilterPanel";
import StatsGrid from "@/components/ui/States/StatsGrid";
import SignalDistributionChart from "@/components/ui/charts/SignalDistributionChart";
import TopPerformingSources from "@/components/ui/charts/TopPerformingSources";
import DonutChart from "@/components/ui/charts/DonutChart";
import TrendingHashtags from "@/components/TrendingHashtags";
import HighEngagementPosts from "@/components/HighEngagementPosts";
import ActivityInsightsTable from "@/components/ActivityInsightsTable";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({});

  const statsCards = [
    {
      title: "Total Impressions",
      value: "42,680",
      trend: -0.5,
      trendText: "-0.5% from last week",
    },
    {
      title: "Avg Engagement Rate",
      value: "7.8%",
      trend: 6.0,
      trendText: "+6.0% from last week",
    },
    {
      title: "Top Source Type",
      value: "Reels (64%)",
      trend: 1.0,
      trendText: "+1.0% from last week",
    },
    {
      title: "Most Active Category",
      value: "SaaS & AI Tools",
      trend: 0.5,
      trendText: "+0.5% from last week",
    },
  ];

  const interactionData = [
    { label: "Likes", value: 42 },
    { label: "Comments", value: 25 },
    { label: "Shares", value: 18 },
    { label: "Mentions", value: 9 },
    { label: "Trending Reels", value: 6 },
  ];

  const topSourcesData = [
    { name: "Reels", value: 64, color: "#7C3AED" },
    { name: "Posts", value: 22, color: "#A78BFA" },
    { name: "Stories", value: 14, color: "#C4B5FD" },
  ];

  const topPerformingPosts = [
    {
      handle: "5 Ways to Automate Workflows 🚀",
      description: "Source: Reels",
      views: "Engagement: 20k Views",
    },
    {
      handle: "We're hiring across 5 cities 👩‍💻",
      description: "Source: Carousel Post",
      views: "Engagement: 15k Views",
    },
  ];

  const trendingHashtags = [
    "#marketingtips",
    "#growthhack",
    "#saasgrowth",
    "#founderstory",
    "#Leaderships",
    "#contentstrategy",
    "#instagramreels",
  ];

  const tableColumns = [
    "Post / Reel (URL)",
    "Source Type",
    "Keyword",
    "Engagement",
    "Intent Score",
    "Last Seen",
  ];

  const tableData = [
    {
      "post/reel(url)": "Why AI is Changing Content Strategy",
      sourcetype: "Reel",
      keyword: "#AITools",
      engagement: "Like-320/Views-22k",
      intentscore: "92",
      lastseen: "2 hrs ago",
    },
    {
      "post/reel(url)": "Boost SaaS Leads with Instagram Stories",
      sourcetype: "Story",
      keyword: "#SaaSLeads",
      engagement: "Like-120/Views-15k",
      intentscore: "88",
      lastseen: "2 hrs ago",
    },
    {
      "post/reel(url)": "Founder's Daily Routine",
      sourcetype: "Post",
      keyword: "#FounderLife",
      engagement: "Like-90/Views-2.4k",
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
            className={`flex-1 overflow-y-auto p-4 md:p-6 transition-all duration-300 ${
              isFilterOpen ? "mr-96" : ""
            }`}
          >
            {/* Search Bar */}
            <div className="mb-6">
              <SearchBar
                placeholder="ZenoTech Pvt Ltd"
                onSearch={handleSearch}
                onFilter={handleFilter}
                onExport={handleExport}
                showFilter={true}
                showAdd={false}
                showExport={true}
                isFilterActive={isFilterOpen}
              />
            </div>

            {/* Stats Grid */}
            <StatsGrid statsCards={statsCards} />

            {/* Analytics Section */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-6 items-stretch">
              <div className="xl:col-span-2 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col">
                <SignalDistributionChart
                  title="Interaction Split"
                  data={interactionData}
                  highlight={{
                    text: "Likes and Saves dominate engagement. Content that mixes education with visual storytelling performs best.",
                    subText: "",
                  }}
                  color="purple"
                />
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-center">
                <TopPerformingSources
                  title="Top Performing Sources"
                  chart={
                    <DonutChart
                      data={topSourcesData}
                      size={160}
                      strokeWidth={28}
                    />
                  }
                  data={topSourcesData.map((item) => [
                    item.name,
                    item.value,
                    item.color,
                  ])}
                  height="auto"
                />
              </div>
            </div>

            {/* Posts & Hashtags */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-6 items-stretch">
              <div className="xl:col-span-2 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">Top Performing Posts</h3>
                  <span className="text-xs text-purple-600 bg-purple-50 px-3 py-1 rounded-full">Reels average 2.5x more interactions</span>
                </div>
                <HighEngagementPosts
                  title=""
                  posts={topPerformingPosts}
                  color="purple"
                  height="auto"
                />
              </div>

              <div className="bg-white rounded-2xl p-6 text-gray-700 border border-gray-200 shadow-sm flex flex-col">
                <TrendingHashtags
                  title="Trending Hashtags/Keywords"
                  tags={trendingHashtags}
                  bgColor="purple"
                  textColor="purple"
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
            className={`absolute right-0 top-0 bottom-0 z-40 transition-transform duration-300 ease-in-out ${
              isFilterOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <InstagramFilterPanel
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
