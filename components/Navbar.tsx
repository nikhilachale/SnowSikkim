"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-red-500 p-4 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold">SnowSikkim</div>

        {/* Mobile Menu Toggle Button */}
        {/* Uncomment below if using icons */}
        {/* <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div> */}

        {/* Navigation Links */}
        <ul
          className={`absolute font-bold text-lg md:static top-16 left-0 w-full md:w-auto bg-red-900 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out flex flex-col md:flex-row gap-4 ${open ? "block" : "hidden"} md:flex`}
        >
          <li className="cursor-pointer hover:text-red-300 text-white md:text-red-500">Home</li>
          <li className="cursor-pointer hover:text-red-300 text-white md:text-red-500">About Us</li>
          <li className="cursor-pointer hover:text-red-300 text-white md:text-red-500">
            <Link href="/destinations">Destinations</Link>
          </li>
          <li className="cursor-pointer hover:text-red-300 text-white md:text-red-500">Packages</li>
          <li className="cursor-pointer hover:text-red-300 text-white md:text-red-500">Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}
