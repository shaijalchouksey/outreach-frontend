"use client";

import React, { useMemo, useState } from "react";
import IntentHeader from "@/components/ui/header/LinkedinHeader";
import Sidebar from "@/components/ui/sidebar/Sidebar";
import SearchBar from "@/components/ui/search_bar/SearchBar";
import LinkedinFilterPanel from "@/components/ui/filters/LinkedinFilterPanel";
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
      value: "284",
      trend: -0.5,
      trendText: "-0.5% from last week",
    },
    {
      title: "Avg Engagement Rate",
      value: "3.8%",
      trend: 6.0,
      trendText: "+6.0% from last week",
    },
    {
      title: "Top Signal Type",
      value: "Job Openings",
      trend: 1.0,
      trendText: "+1.0% from last week",
    },
    {
      title: "Most Active Category",
      value: "Marketing",
      trend: 0.5,
      trendText: "+0.5% from last week",
    },
  ];

  const interactionData = [
    { label: "Job Change", value: 38 },
    { label: "Skill Change", value: 27 },
    { label: "Company Update", value: 14 },
    { label: "Job Opening", value: 9 },
    { label: "Post Engagement", value: 6 },
    { label: "Others", value: 6 },
  ];

  const topSourcesData = [
    { name: "Person", value: 64, color: "#7C3AED" },
    { name: "Company", value: 36, color: "#C4B5FD" },
  ];

  const highEngagementProfiles = [
    {
      img: "https://i.pravatar.cc/100?img=48",
      name: "Ravi Patel",
      role: "Head of Product",
      engagement: "640",
    },
    {
      img: "https://i.pravatar.cc/100?img=12",
      name: "Ananya Sharma",
      role: "Marketing Lead",
      engagement: "620",
    },
    {
      img: "https://i.pravatar.cc/100?img=33",
      name: "TechRadar",
      role: "Media Mention",
      engagement: "520",
    },

    {
      img: "https://i.pravatar.cc/100?img=5",
      name: "Abhay S.",
      role: "Project Lead",
      engagement: "280",
    },
    {
      img: "https://i.pravatar.cc/100?img=5",
      name: "Abhay S.",
      role: "Project Lead",
      engagement: "280",
    },
  ];

  const topPerformingPosts = [
    {
      handle: "@AI_Tech",
      description: "\"Papa John's most active on Instagram launches new offer\"",
      views: "20k Views",
    },
    
  ];

  const trendingHashtags = [
    "#marketing",
    "#Hiring",
    "#SaaS",
    "#Leaderships",
    "#AI",
  ];

  const tableColumns = [
    "Profile",
    "Profile Type",
    "Signal Type",
    "Keyword",
    "Engagement",
    "Intent Score",
    "Last Seen",
  ];

  const tableData = [
    {
      profile: "Ravi Patel",
      profiletype: "Person",
      signaltype: "Job Change",
      keyword: "#AI",
      engagement: "Like-320/Views-22k",
      intentscore: "92",
      lastseen: "2 hrs ago",
    },
    {
      profile: "ZenoTech",
      profiletype: "Company",
      signaltype: "Job Opening",
      keyword: "#Hiring",
      engagement: "Like-120/Views-15k",
      intentscore: "88",
      lastseen: "2 hrs ago",
    },
    {
      profile: "Sarah Shaik",
      profiletype: "Person",
      signaltype: "Post",
      keyword: "#SkillChange",
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

  const [profileTypes, setProfileTypes] = useState(["Person"]);
  const [signalTypes, setSignalTypes] = useState(["Job Change"]);
  const [selectedKeywords, setSelectedKeywords] = useState(["#AI"]);
  const [keywords, setKeywords] = useState(["#AI", "#Hiring", "#Marketing", "#Leaderships"]);
  const [newKeyword, setNewKeyword] = useState("");
  const [timeRange, setTimeRange] = useState(["Last 7 Days"]);

  const toggleArray = (arr, setter, value) => {
    setter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleAddKeyword = () => {
    const value = newKeyword.trim();
    if (!value) return;
    const keywordValue = value.startsWith("#") ? value : `#${value}`;
    setKeywords((prev) =>
      prev.includes(keywordValue) ? prev : [...prev, keywordValue]
    );
    setSelectedKeywords((prev) =>
      prev.includes(keywordValue) ? prev : [...prev, keywordValue]
    );
    setNewKeyword("");
  };

  const filterSections = useMemo(
    () => [
      {
        name: "Profile Type",
        type: "checkbox",
        options: ["Person", "Company"],
        selected: profileTypes,
        onToggle: (value) => toggleArray(profileTypes, setProfileTypes, value),
      },
      {
        name: "Signal Type",
        type: "checkbox",
        options: [
          "Job Change",
          "Skill Change",
          "Company Update",
          "Job Opening",
          "Post Engagement",
        ],
        selected: signalTypes,
        onToggle: (value) => toggleArray(signalTypes, setSignalTypes, value),
      },
      {
        name: "Keyword / Hashtag",
        type: "input",
        options: keywords,
        selected: selectedKeywords,
        inputValue: newKeyword,
        onInputChange: (value) => setNewKeyword(value),
        onAdd: handleAddKeyword,
        onToggle: (value) => toggleArray(selectedKeywords, setSelectedKeywords, value),
      },
      {
        name: "Time Range",
        type: "checkbox",
        options: ["Today", "Last 7 Days", "Last 30 Days"],
        selected: timeRange,
        onToggle: (value) => toggleArray(timeRange, setTimeRange, value),
      },
    ],
    [
      profileTypes,
      signalTypes,
      keywords,
      selectedKeywords,
      newKeyword,
      timeRange,
    ]
  );

  const handleFilterApply = () => {
    const filters = {
      profileTypes,
      signalTypes,
      keywords: selectedKeywords,
      timeRange,
    };
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
          <IntentHeader
            platform="LinkedIn"
            onToggleSidebar={() => setIsOpen(!isOpen)}
          />
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
                  title="Signal Distribution Chart"
                  data={interactionData}
                  highlight={{
                    text: "LinkedIn signals up 42% this week",
                    subText: "(+9% vs last)",
                  }}
                  color="purple"
                />
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-center">
                <TopPerformingSources
                  title="Profile Source"
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
              <div className="xl:col-span-2 bg-white h-[67vh] rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col">
                <HighEngagementProfiles
                  title="High Engagement Profiles"
                  profiles={highEngagementProfiles}
                  scrollable
                  maxHeight="240px"
                />
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-white rounded-2xl p-6 border text-gray-700 border-gray-200 shadow-sm">
                  <TrendingHashtags
                    title="Trending Hashtags/Keywords"
                    tags={trendingHashtags}
                    bgColor="purple"
                    textColor="purple"
                  />
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col">
                  <HighEngagementPosts
                    title="High Engagement Posts"
                    posts={topPerformingPosts}
                    color="purple"
                    height="auto"
                  />
                </div>
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
            className={`absolute right-0 top-0 bottom-0 z-40 transition-transform duration-300 ease-in-out ${isFilterOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <LinkedinFilterPanel
              title="Filters"
              onClose={handleFilterClose}
              onApply={handleFilterApply}
              sections={filterSections}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
