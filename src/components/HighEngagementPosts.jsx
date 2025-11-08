"use client";
import React from "react";
const HighEngagementPosts = ({
  title = "High Engagement Posts",
  posts = [],
  color = "purple",
  height = "33vh",
  scrollable = false,
}) => {
  const borderColor = `border-${color}-500`;

  return (
    <div
      className={`bg-white rounded-lg p-5 border h-[100%] border-gray-200 w-full`}
      style={{ height }}
    >
      <h3 className="font-semibold text-gray-900 mb-3 text-sm">{title}</h3>
      <div
        className={`mt-6 space-y-4 w-full h-[100%] ${
          scrollable ? "overflow-y-auto pr-2" : ""
        }`}
        style={scrollable ? { maxHeight: "calc(100% - 2.5rem)" } : {}}
      >
        {posts.length > 0 ? (
          posts.map((post, idx) => (
            <div
              key={idx}
              className={`border-l-2 ${borderColor} pl-3 hover:bg-gray-50 rounded-md transition-all`}
            >
              <div className="font-medium text-gray-900 text-xs">
                {post.handle}
              </div>
              <div className="text-xs text-gray-600 mt-1">
                {post.description}
              </div>
              <div className="text-xs text-gray-500 mt-1">{post.views}</div>
            </div>
          ))
        ) : (
          <p className="text-xs text-gray-500 italic text-center">
            No high engagement posts available.
          </p>
        )}
      </div>
    </div>
  );
};

export default HighEngagementPosts;
