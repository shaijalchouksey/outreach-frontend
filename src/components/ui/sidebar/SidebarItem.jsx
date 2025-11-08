"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SidebarItem({ icon: Icon, label, href, isOpen, active }) {
  return (
    <Link
      href={href}
      className={`group relative flex items-center ${isOpen ? "gap-3 px-3 py-2.5" : "justify-center p-2.5"} 
        ${active 
          ? "bg-white/20 text-white rounded-lg" 
          : "text-white/80 hover:bg-white/10 hover:text-white rounded-lg"
        } cursor-pointer transition-all`}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      {isOpen ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm font-medium"
        >
          {label}
        </motion.span>
      ) : (
        <span className="absolute left-16 bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none z-50">
          {label}
        </span>
      )}
    </Link>
  );
}
