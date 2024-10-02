import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Import icons from lucide-react

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/saipragati-logo.png"
            alt="Sai Pragathi Logo"
            width={120}
            height={20}
          />
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex flex-grow justify-center space-x-6">
          <ul className="flex items-center space-x-6">
            <li>
              <Link
                href="/"
                className="text-gray-800 hover:text-black-600 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-gray-800 hover:text-black-600 transition duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-800 hover:text-black-600 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-800 hover:text-black-600 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Get in Touch Button */}
        <Link href="#">
          <button className="hidden md:block bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300">
            Get in Touch
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden ">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link
                href="/"
                className="text-gray-800 hover:text-black-600 transition duration-300"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-gray-800 hover:text-black-600 transition duration-300"
                onClick={toggleMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-800 hover:text-black-600 transition duration-300"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-800 hover:text-black-600 transition duration-300"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link href="#">
                <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300">
                  Get in Touch
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
