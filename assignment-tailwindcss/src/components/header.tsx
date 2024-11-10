"use client";

import { useState } from "react";
import { FaPhoneAlt, FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Topbar Start */}
      <div className="bg-teal-600 text-white py-2">
        <div className="container mx-auto flex justify-between items-center">
          {/* Contact Info */}
          <div className="flex space-x-6">
            <p className="flex items-center">
              <FaEnvelope className="mr-2" /> alishbamoin797@gmail.com
            </p>
            <p className="flex items-center">
              <FaPhoneAlt className="mr-2" /> +012 345 6789
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/" className="text-white hover:text-teal-400">
              <FaFacebookF />
            </a>
            <a href="https://github.com/Alishba-Moin" className="text-white hover:text-teal-400">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/alishba-moin/" className="text-white hover:text-teal-400">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/alish.bamoin/" className="text-white hover:text-teal-400">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-teal-400 text-2xl font-extrabold">
            <span className="text-teal-600">TRAVEL</span>ER
          </div>

          {/* Navbar Toggler (for mobile view) */}
          <button
            type="button"
            className="lg:hidden text-teal-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image src="/menu-icon.svg" alt="Menu" className="w-6 h-6" />
          </button>

          {/* Navbar Items */}
          <div className="hidden lg:flex space-x-8">
            <Link href="/" className="text-teal-600 hover:text-teal-400">Home</Link>
            <Link href="/about" className="text-teal-600 hover:text-teal-400">About</Link>
            <Link href="/service" className="text-teal-600 hover:text-teal-400">Services</Link>
            <Link href="/tourPackage" className="text-teal-600 hover:text-teal-400">Tour Packages</Link>
            <Link href="/destination" className="text-teal-600 hover:text-teal-400">Destination</Link>
            <Link href="/guides" className="text-teal-600 hover:text-teal-400">Travel Guides</Link>
            <Link href="/contact" className="text-teal-600 hover:text-teal-400">Contact</Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white p-4 shadow-md`}>
          <Link href="/" className="block text-teal-600 hover:text-teal-400 py-2">Home</Link>
          <Link href="/about" className="block text-teal-600 hover:text-teal-400 py-2">About</Link>
          <Link href="/service" className="block text-teal-600 hover:text-teal-400 py-2">Services</Link>
          <Link href="/tourPackage" className="block text-teal-600 hover:text-teal-400 py-2">Tour Packages</Link>
          <Link href="/destination" className="block text-teal-600 hover:text-teal-400 py-2">Destination</Link>
          <Link href="/guides" className="block text-teal-600 hover:text-teal-400 py-2">Travel Guides</Link>
          <Link href="/contact" className="block text-teal-600 hover:text-teal-400 py-2">Contact</Link>
        </div>
      </div>
      {/* Navbar End */}
    </>
  );
};

export default Header;
