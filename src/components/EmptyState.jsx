"use client";
import React from "react";
const EmptyState = ({
  platform = "linkedin",
  title,
  description,
}) => {
  const platformDetails = {
    linkedin: {
      label: "LinkedIn",
      bg: "bg-blue-600",
      text: "in",
      message: "Search a company, person, or keyword to explore LinkedIn intent signals.",
    },
    instagram: {
      label: "Instagram",
      bg: "bg-pink-500",
      text: "Ig",
      message: "Search profiles or hashtags to discover Instagram trends.",
    },
    facebook: {
      label: "Facebook",
      bg: "bg-blue-700",
      text: "f",
      message: "Search posts or pages to analyze Facebook engagement.",
    },
    threads: {
      label: "Threads",
      bg: "bg-black",
      text: "t",
      message: "Find trending conversations and creators on Threads.",
    },
    tiktok: {
      label: "TikTok",
      bg: "bg-black",
      text: "🎵",
      message: "Explore trending TikTok creators and videos.",
    },
    youtube: {
      label: "YouTube",
      bg: "bg-red-600",
      text: "▶",
      message: "Search YouTube channels or keywords to analyze engagement.",
    },
    twitter: {
      label: "Twitter (X)",
      bg: "bg-gray-800",
      text: "X",
      message: "Search trending tweets, hashtags, or profiles.",
    },
    competitor: {
      label: "Competitor",
      bg: "bg-gradient-to-r from-purple-600 to-blue-500",
      text: "🏁",
      message: "Add your first competitor to track engagement, mentions, and trends.",
    },
  };

  const current = platformDetails[platform.toLowerCase()] || platformDetails.linkedin;

  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center">
        <div
          className={`inline-flex items-center justify-center w-24 h-24 ${current.bg} rounded-2xl mb-6`}
        >
          <span className="text-white text-4xl font-bold">{current.text}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title || `No ${current.label} Signals Yet`}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          {description || current.message}
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
