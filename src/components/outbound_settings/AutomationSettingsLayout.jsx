"use client";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function AutomationSettingsLayout({
  sections = {},
  navItems,
  onReset = () => { },
  onUpdate = () => { },
  onBack = () => { },
}) {
  const defaultItems = Object.keys(sections).map((label) => ({ id: label, label }));
  const items = navItems && navItems.length ? navItems : defaultItems;
  const [active, setActive] = useState(items[0]?.id);

  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-12 gap-0 bg-white">
      {/* Left Nav */}
      <aside className="md:col-span-3 lg:col-span-3 bg-white border-r border-gray-200 p-3 space-y-3">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-purple-600"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <button onClick={onReset} className="w-full md:hidden mb-2 text-sm bg-gray-100 text-gray-700 rounded-md py-1.5">Reset Settings</button>
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-left text-sm font-medium ${active === item.id ? "bg-purple-100 text-purple-700" : "hover:bg-gray-50 text-gray-600"
              }`}
          >
            {item.icon && <item.icon className={`w-4 h-4 ${active === item.id ? "text-purple-600" : "text-gray-400"}`} />}
            {item.label}
          </button>
        ))}
      </aside>

      {/* Right Content */}
      <section className="md:col-span-9 lg:col-span-9 bg-white">
        <div className="flex items-center justify-between p-3 sticky top-0 z-10 bg-white border-b border-gray-200">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 capitalize">
            {active.replace(/-/g," ")}
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={onReset}
              className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200"
            >
              Reset Settings
            </button>
            <button
              onClick={onUpdate}
              className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm"
            >
              Update Settings
            </button>
          </div>
        </div>
        <div className="p-4 md:p-6 space-y-4 bg-gray-50 min-h-full">
          {sections[active]}
        </div>
      </section>
    </div>
  );
}


