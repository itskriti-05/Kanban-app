import React from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Get started", href: "#cta" },
];

const NavItem = ({ href, label }) => (
  <a
    href={href}
    className="text-sm text-gray-600 hover:text-purple-700 transition"
  >
    {label}
  </a>
);

const Navbar = () => {
  return (
   <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 sm:px-8 py-3 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-1 shrink-0">
        <img
          src="/logo.png"
          alt="Taska logo"
          className="w-9 h-9 object-contain"
        />
        <h1
          className="text-[18px] font-semibold tracking-[-0.01em] leading-none"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <span className="text-[#1A1A2E]">Tas</span>
          <span className="text-[#8B3DFF]">k</span>
          <span className="text-[#1A1A2E]">a</span>
        </h1>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <NavItem key={link.href} {...link} />
        ))}
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <Link
          to="/login"
          className="px-3 sm:px-4 py-1.5 rounded-lg border border-gray-200 text-xs sm:text-sm text-[#1a1a2e] hover:bg-gray-50 transition"
        >
          Log in
        </Link>
        <Link
          to="/register"
          className="px-3 sm:px-4 py-1.5 rounded-lg bg-purple-700 text-white text-xs sm:text-sm font-medium hover:bg-purple-800 transition"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;