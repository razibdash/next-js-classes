"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname=usePathname()
  const navItems=[
    {name:"Home",href:'/'},
    {name:"About",href:'/about'},
    {name:"Project",href:'/project'},
    {name:"Skill",href:'/skill'},
    {name:"Blogs",href:'/blogs'},
    {name:"Contact",href:'/contact'},
  ]


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
            <ul className="hidden md:flex space-x-6">
                   {
              navItems.map((item,index)=>{
                const isActive=pathname===item.href;
                 
                return (
                   <li key={index} className={`${isActive?"text-blue-400 border-b":""}`}> <Link  href={item.href} >{item.name}</Link></li>
                )
              })
              }
            </ul>
           
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
          <Link href="/project" className="block hover:text-gray-200">
            Project
          </Link>
          <Link href="/contact" className="block hover:text-gray-200">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
