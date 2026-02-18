"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Rotary Campaigns", href: "#" },
  { label: "Service Projects", href: "#" },
  { label: "Grant Center", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Impact", href: "#" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-2"
          aria-label="Rotary home"
        >
          <img src="/favicon.svg" alt="Rotary Logo" className="h-10" />
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-[#0057B8] focus:outline-none focus:ring-2 focus:ring-[#0057B8]/40 rounded-md px-1 py-0.5"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop action */}
        <div className="hidden lg:block">
          <Button
            className="rounded-full bg-[#0C3878] px-6 text-white hover:bg-[#0057B8]"
            size="sm"
          >
            Sign In
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0057B8]/40 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className=" bg-white lg:hidden">
          <ul className="space-y-1 px-4 py-3 sm:px-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-[#0057B8]"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button
                className="w-full rounded-full bg-[#0C3878] text-white hover:bg-[#0057B8]"
                size="sm"
              >
                Sign In
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
