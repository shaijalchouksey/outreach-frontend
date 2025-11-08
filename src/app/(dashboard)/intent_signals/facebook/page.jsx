"use client";

import IntentHeader from "@/components/ui/header/FacebookHeader";
import Sidebar from "@/components/ui/sidebar/Sidebar";
import SearchBar from "@/components/ui/search_bar/SearchBar";
import FacebookFilterPanel from "@/components/ui/filters/FacebookFilterPanel";
import StatsGrid from "@/components/ui/States/StatsGrid";
import SignalDistributionChart from "@/components/ui/charts/SignalDistributionChart";
import TopPerformingSources from "@/components/ui/charts/TopPerformingSources";
import DonutChart from "@/components/ui/charts/DonutChart";
import TrendingHashtags from "@/components/TrendingHashtags";
import HighEngagementPosts from "@/components/HighEngagementPosts";
import ActivityInsightsTable from "@/components/ActivityInsightsTable";
import React, { useState } from "react";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({});

  // Stats cards data from image
  const statsCards = [
    {
      title: "Mentions Detected",
      value: "3,240",
      trend: -0.5,
      trendText: "-0.5% from last week",
    },
    {
      title: "Avg Engagement Rate",
      value: "5.2%",
      trend: 6.0,
      trendText: "+6.0% from last week",
    },
    {
      title: "Top Source Type",
      value: "Reels (38%)",
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

  // Interaction Split Chart data
  const interactionData = [
    { label: "Likes", value: 41 },
    { label: "Comments", value: 24 },
    { label: "Shares", value: 15 },
    { label: "New Ads", value: 10 },
    { label: "Engagement Spike", value: 6 },
    { label: "Trending Reels", value: 4 },
  ];

  // Top Performing Sources - Donut Chart data
  const topSourcesData = [
    { name: "Reels", value: 38, color: "#7C3AED" }, // dark purple
    { name: "Posts", value: 34, color: "#A78BFA" }, // medium purple
    { name: "Ads Library", value: 28, color: "#C4B5FD" }, // light purple
  ];

  // Top Performing Posts
  const topPerformingPosts = [
    {
      handle: "Our AI SaaS tool crossed 1M users 🚀",
      description: "Source: Reels",
      views: "Engagement: 20k Views",
    },
    {
      handle: "We're hiring across 5 cities 🧑‍💻",
      description: "Source: Page Post",
      views: "Engagement: 15k Views",
    },
  ];

  // Trending Hashtags
  const trendingHashtags = [
    "#marketing",
    "#Hiring",
    "#SaaS",
    "#Leaderships",
    "#AI",
  ];

  // Activity Insights Table columns
  const tableColumns = [
    "Post / Ad / Reel (URL)",
    "Source Type",
    "Keyword",
    "Engagement",
    "Intent Score",
    "Last Seen",
  ];

  // Activity Insights Table data
  const tableData = [
    {
      "post/ad/reel(url)": "We're hiring 10+ AI engineers 🚀",
      sourcetype: "Reel",
      keyword: "#Hiring",
      engagement: "Like-320/Views-22k",
      intentscore: "92",
      lastseen: "2 hrs ago",
    },
    {
      "post/ad/reel(url)": "Introducing our new AI dashboard",
      sourcetype: "Post",
      keyword: "#AItools",
      engagement: "Like-120/Views-15k",
      intentscore: "88",
      lastseen: "2 hrs ago",
    },
    {
      "post/ad/reel(url)": "Scale faster with our SaaS suite",
      sourcetype: "Ads",
      keyword: "#SaaS",
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
          <div className={`flex-1 overflow-y-auto p-4 md:p-6 transition-all duration-300 ${isFilterOpen ? 'mr-96' : ''}`}>
            {/* Search Bar */}
            <div className="mb-6">
              <SearchBar
                placeholder="Q ZenoTech Pvt Ltd"
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

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 items-stretch">
              {/* Left Section: Interaction Split Chart */}
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col h-full">
                <SignalDistributionChart
                  title="Interaction Split"
                  data={interactionData}
                  highlight={{
                    text: "Likes and comments continue to dominate engagement, but spikes and trending reels show rising viral activity.",
                    subText: "",
                  }}
                  color="purple"
                />
              </div>

              {/* Right Section: Top Performing Sources */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-center h-full">
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


            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 items-stretch">
              {/* Left: Top Performing Posts */}
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col h-full">
                <HighEngagementPosts
                  title="Top Performing Posts"
                  posts={topPerformingPosts}
                  color="purple"
                  height="auto"
                />
              </div>

              {/* Right: Trending Hashtags */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col h-full">
                <TrendingHashtags
                  title="Trending Hashtags/Keywords"
                  tags={trendingHashtags}
                  bgColor="gray"
                  textColor="gray"
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
            <FacebookFilterPanel
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
