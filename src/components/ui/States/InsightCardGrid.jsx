"use client";
import React from "react";
import {
  Megaphone,
  Mail,
  Send,
  TrendingUp,
  TrendingDown,
  User,
} from "lucide-react";

const InsightCardGrid = ({
  title = "Overview Metrics",
  cards = [],
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        {title}
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="flex flex-col justify-between border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-200"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center w-9 h-9 bg-purple-100 text-purple-600 rounded-lg">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-gray-800">
                  {card.title}
                </h3>
              </div>

              {/* Main Value */}
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {card.value}
              </div>

              {/* Trend / Description */}
              <div className="flex items-center gap-2 text-sm font-medium text-purple-600">
                {card.trendIcon === "up" ? (
                  <TrendingUp className="w-4 h-4" />
                ) : card.trendIcon === "down" ? (
                  <TrendingDown className="w-4 h-4" />
                ) : (
                  <TrendingUp className="w-4 h-4" />
                )}
                <span>{card.trendText}</span>
              </div>

              {/* Subtext */}
              <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                {card.subtext}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InsightCardGrid;
