"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarSubMenu({ items, isOpen, expanded }) {
  const pathname = usePathname();

  if (!isOpen || !expanded) return null;

  return (
    <div className="pl-6 space-y-1 mt-2">
      {items.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(item.href);

        return (
          <Link
            key={item.label}
            href={item.href}
            className={`block px-3 py-1.5 text-sm rounded cursor-pointer transition-all ${
              isActive
                ? "text-white font-semibold"
                : "text-white/70 hover:bg-white/20 hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
