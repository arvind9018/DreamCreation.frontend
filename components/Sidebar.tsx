"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/* 🔐 TEMP ROLE (replace with real auth later) */
const userRole: "USER" | "CLIENT" | "ADMIN" = "USER";

const sidebarConfig = {
  USER: [
    { name: "Dashboard", href: "/dashboard" },
    { name: "My Projects", href: "/projects" },
    { name: "Profile", href: "/profile" },
    { name: "Settings", href: "/settings" },
  ],
  CLIENT: [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Explore Projects", href: "/projects" },
    { name: "Saved Projects", href: "/saved" },
    { name: "Profile", href: "/profile" },
  ],
  ADMIN: [
    { name: "Admin Dashboard", href: "/admin" },
    { name: "Users", href: "/admin/users" },
    { name: "Projects", href: "/admin/projects" },
    { name: "Reports", href: "/admin/reports" },
    { name: "Settings", href: "/admin/settings" },
  ],
};

export default function Sidebar() {
  const pathname = usePathname();
  const links = sidebarConfig[userRole];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-[#181818] border-r border-white/10 min-h-screen fixed left-0 top-0">

      {/* Logo */}
      <div className="px-6 py-6 text-xl font-bold text-accent">
        DreamCreation
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-4 py-2 rounded-lg text-sm transition ${
              pathname === link.href
                ? "bg-accent text-dark font-semibold"
                : "text-gray-300 hover:bg-[#222]"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="px-6 py-4 border-t border-white/10">
        <button className="w-full text-left text-sm text-red-400 hover:underline">
          Logout
        </button>
      </div>

    </aside>
  );
}
