import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className=" shadow">
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
        {/* Navigation Menu */}
        <nav className="flex-grow">
          <ul className="flex justify-center space-x-6">
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
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-black-700 transition duration-300">
            Get in Touch
          </button>
        </Link>
      </div>
    </header>
  );
}
