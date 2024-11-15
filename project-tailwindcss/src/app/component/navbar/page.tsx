"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <nav className="bg-gray-700 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Title */}
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-3xl font-bold drop-shadow-lg">
          My Portfolio
        </h1>

        {/* Hamburger Icon (only visible on mobile) */}
        <button
        type = "button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white text-2xl"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? 'X' : '≡'}
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex flex-col lg:flex-row items-center lg:space-x-12 space-y-6 lg:space-y-0 text-white font-semibold transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <li className="hover:bg-gray-800 rounded-md transition-colors duration-300">
            <Link href="/" className="block px-4 py-2">
              Home
            </Link>
          </li>
          <li className="hover:bg-gray-800 rounded-md transition-colors duration-300">
            <Link href="/about" className="block px-4 py-2">
              About
            </Link>
          </li>
          <li className="hover:bg-gray-800 rounded-md transition-colors duration-300">
            <Link href="/skills" className="block px-4 py-2">
              Skills
            </Link>
          </li>
          <li className="hover:bg-gray-800 rounded-md transition-colors duration-300">
            <Link href="/contact" className="block px-4 py-2">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
