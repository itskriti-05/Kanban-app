import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-1 shrink-0">
          <img
            src="/logo.png"
            alt="Taska logo"
            className="w-10 h-10 object-contain"
          />

          <h1 className="logo-font text-[20px] font-semibold tracking-[-0.01em] leading-none "
           style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <span className="text-[#1A1A2E]">Tas</span>
            <span className="text-[#8B3DFF]">k</span>
            <span className="text-[#1A1A2E]">a</span>
          </h1>
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/login"
            className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-gray-200 text-xs sm:text-sm text-[#1a1a2e] hover:bg-gray-50 transition"
          >
            Log in
          </Link>
          <Link
            to="/register"
            className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-purple-700 text-white text-xs sm:text-sm font-medium hover:bg-purple-800 transition"
          >
            Sign up
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
