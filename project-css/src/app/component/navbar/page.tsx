"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Title */}
        <h1 className="navbar-title">My Portfolio</h1>

        {/* Hamburger Icon (only visible on mobile) */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="hamburger-icon lg:hidden"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>

        {/* Navigation Links */}
        <ul className={`navbar-links ${isMenuOpen ? 'flex' : 'hidden'} lg:flex`}>
          <li className="nav-item">
            <Link href="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link href="/skills" className="nav-link">Skills</Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
