"use client";
import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const StatsGrid = ({ statsCards = [] }) => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      {statsCards.map((card, idx) => (
        <div
          key={idx}
          className="bg-white/70 backdrop-blur-md rounded-2xl p-5 shadow-sm border border-gray-100 
                     hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
        >
          {/* Header Row */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-500">{card.title}</h3>
            <span
              className={`flex items-center gap-1 text-xs font-semibold ${
                card.trend > 0 ? "text-green-600" : "text-red-500"
              }`}
            >
              {card.trend > 0 ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              {card.trendText}
            </span>
          </div>

          {/* Value */}
          <div className="text-2xl font-semibold text-gray-900">
            {card.value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
