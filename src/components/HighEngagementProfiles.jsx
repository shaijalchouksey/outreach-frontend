"use client";
import React from "react";
const HighEngagementProfiles = ({
  title = "High Engagement Profiles",
  profiles = [],
  scrollable = false,
  maxHeight = "auto",
}) => {
  return (
    <div className="bg-white rounded-lg p-5 border border-gray-200">

      <h3 className="font-semibold text-gray-900 mb-4 text-sm">{title}</h3>
      <div
        className={`space-y-3 ${scrollable ? "overflow-y-auto pr-2" : ""}`}
        style={scrollable ? { maxHeight } : {}}
      >
        {profiles.length > 0 ? (
          profiles.map((profile, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between py-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <img
                  src={profile.img}
                  alt={profile.name}
                  className="w-10 h-10 rounded-full object-cover bg-gray-100 border border-gray-200"
                />
                <div>
                  <div className="font-medium text-sm text-gray-900">
                    {profile.name}
                  </div>
                  <div className="text-xs text-gray-500">{profile.role}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-900">
                  {profile.engagement}
                </div>
                <div className="text-sm text-gray-600">Engagement</div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-xs text-gray-500 italic text-center">
            No profiles available.
          </p>
        )}
      </div>
    </div>
  );
};

export default HighEngagementProfiles;
