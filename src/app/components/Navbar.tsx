"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold tracking-wide">
            <Link href="/">MyWebsite</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-200 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-200 transition">
              About
            </Link>
            <Link href="/services" className="hover:text-gray-200 transition">
              Services
            </Link>
            <Link href="/contact" className="hover:text-gray-200 transition">
              Contact
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-700 px-4 pt-2 pb-3 space-y-2">
          <Link href="/" className="block hover:text-gray-200">
            Home
          </Link>
          <Link href="/about" className="block hover:text-gray-200">
            About
          </Link>
          <Link href="/services" className="block hover:text-gray-200">
            Services
          </Link>
          <Link href="/contact" className="block hover:text-gray-200">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
