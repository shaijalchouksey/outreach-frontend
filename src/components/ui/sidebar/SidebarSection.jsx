"use client";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import SidebarSubMenu from "./SidebarSubMenu";

export default function SidebarSection({ item, isOpen }) {
  const { icon: Icon, label, submenu = [], active } = item;
  const [expanded, setExpanded] = useState(Boolean(active));

  useEffect(() => {
    if (active) {
      setExpanded(true);
    }
  }, [active]);

  const handleToggle = () => {
    if (!submenu?.length) return;
    setExpanded((prev) => !prev);
  };

  const wrapperClasses = `rounded-lg px-3 py-2.5 flex items-center transition-all cursor-pointer ${
    isOpen ? "justify-between" : "justify-center"
  } ${
    expanded || active
      ? " text-white shadow-inner"
      : "text-white/80 hover:bg-white/10 hover:text-white"
  }`;

  return (
    <div className="space-y-1 relative group">
      <div
        className={wrapperClasses}
        onClick={handleToggle}
        role={submenu?.length ? "button" : undefined}
        aria-expanded={submenu?.length ? expanded : undefined}
      >
        <div className={`flex items-center ${isOpen ? "gap-3" : ""}`}>
          <Icon className="w-5 h-5 flex-shrink-0" />
          {isOpen && <span className="text-sm font-medium">{label}</span>}
        </div>
        {isOpen && submenu?.length ? (
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        ) : null}
      </div>

      {submenu?.length > 0 && (
        <SidebarSubMenu
          items={submenu}
          isOpen={isOpen}
          expanded={expanded}
          active={active}
        />
      )}
      {!isOpen && (
        <span className="absolute left-16 top-2 bg-black/80 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none z-50">
          {label}
        </span>
      )}
    </div>
  );
}
