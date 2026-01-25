"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-3 z-20">
      {/* MAIN BAR */}
      <div
        className="
        max-w-5xl mx-auto
        px-4 py-2.5
        flex justify-between items-center
        rounded-full
        bg-[#121212]/90 backdrop-blur
        border border-sky-400/40
        shadow-[0_0_20px_rgba(56,189,248,0.25)]
        "
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center scale-95">
          <Logo />
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-5 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  px-4 py-1.5 rounded-full text-sm transition
                  ${
                    isActive
                      ? "text-sky-400 border border-sky-400/40"
                      : "text-gray-300 hover:text-sky-400"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* RIGHT ACTIONS (DESKTOP) */}
        <div className="hidden md:flex items-center gap-3">
          {/* USER */}
          <div className="relative">
            <button
              onClick={() => setUserOpen(!userOpen)}
              className="
              px-3.5 py-1.5 rounded-full
              bg-[#1b1b1b]
              text-sm text-gray-200
              border border-sky-400/30
              hover:border-sky-400
              transition
              "
            >
              Arvind
            </button>

            {userOpen && (
              <div className="absolute right-0 mt-2 w-44 rounded-xl bg-[#1b1b1b] border border-sky-400/30 shadow-lg">
                <Link href="/dashboard" className="block px-4 py-2 text-sm hover:bg-[#242424]">
                  Dashboard
                </Link>
                <Link href="/settings" className="block px-4 py-2 text-sm hover:bg-[#242424]">
                  Settings
                </Link>
                <button className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-[#242424]">
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* CTA */}
          <Link
            href="/signup"
            className="
            px-4 py-1.5 rounded-full
            bg-sky-400 text-black
            text-sm font-semibold
            hover:bg-sky-300
            transition
            shadow-[0_0_12px_rgba(56,189,248,0.6)]
            "
          >
            Register
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-sky-400 text-xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="
          md:hidden
          mt-3 mx-4
          rounded-2xl
          bg-[#121212]/95 backdrop-blur
          border border-sky-400/30
          px-4 py-4
          space-y-3
        "
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`
                  block px-4 py-2 rounded-xl text-sm transition
                  ${
                    isActive
                      ? "text-sky-400 border border-sky-400/40"
                      : "text-gray-300 hover:text-sky-400 hover:bg-white/5"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}

          {/* MOBILE CTA */}
          <Link
            href="/signup"
            onClick={() => setMenuOpen(false)}
            className="
              block w-full text-center
              mt-2
              px-4 py-2 rounded-xl
              bg-sky-400 text-black
              text-sm font-semibold
            "
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}
