"use client";

import { sidebarMenu } from "./menuData";
import SidebarItem from "./SidebarItem";
import SidebarSection from "./SidebarSection";
import { motion } from "framer-motion";

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <motion.aside
      initial={false}
      animate={{ width: isOpen ? 220 : 68 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-gradient-to-b from-purple-600 via-purple-600 to-purple-700 shadow-2xl flex flex-col h-screen overflow-hidden"  
    >
      <div
        className="p-4 border-b border-purple-500/30 flex items-center justify-center cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h1 className="text-2xl font-bold text-white overflow-hidden whitespace-nowrap">
          {isOpen ? "Outreach" : "O"}
        </h1>
      </div>
      <nav className="flex-1 px-3 py-6 overflow-y-auto custom-sidebar-scroll">
        <div
          className={`${
            !isOpen
              ? "flex flex-col items-center justify-center gap-6"
              : "space-y-3"
          }`}
        >
          {sidebarMenu.map((item) =>
            item.submenu ? (
              <SidebarSection key={item.label} item={item} isOpen={isOpen} />
            ) : (
              <SidebarItem key={item.label} {...item} isOpen={isOpen} />
            )
          )}
        </div>
      </nav>
    </motion.aside>
  );
}
