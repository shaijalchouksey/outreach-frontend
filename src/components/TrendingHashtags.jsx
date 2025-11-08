"use client";
import React from "react";

const TrendingHashtags = ({
  title = "Trending Hashtags / Keywords",
  tags = [],
  textColor = "gray",
  bgColor = "purple",
}) => {

  const bgColorClass = `bg-${bgColor || "purple"}-200`;
  const textColorClass = `text-${textColor || "gray"}-700`;

  return (
    <div className="bg-white rounded-lg p-5 border border-gray-200">
      <h3 className="font-semibold text-gray-900 mb-3 text-sm">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {tags.length > 0 ? (
          tags.map((tag, i) => (
            <span
              key={i}
              className={`px-3 py-1 ${bgColorClass || "bg-purple-200"} ${textColorClass || "text-purple-600"} rounded-full text-xs font-medium`}
                  >
              {tag}
            </span>
          ))
        ) : (
          <p className="text-xs text-gray-500 italic">No hashtags available</p>
        )}
      </div>
    </div>
  );
};

export default TrendingHashtags;
