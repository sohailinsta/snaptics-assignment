import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function ContactForm() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Sai Pragathi</h3>
            <p className="mb-4">Crafting Luxurious Living Spaces Since 1995</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="w-6 h-6 text-blue-600"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="w-6 h-6 text-blue-400"
                />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-6 h-6 text-pink-500"
                />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="w-6 h-6 text-blue-700"
                />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Luxury Residences
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Commercial Spaces
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Urban Planning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Interior Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Property Management
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">123 Luxury Lane, Hyderabad, Telangana 500001</p>
            <p className="mb-2">Phone: +91 1234567890</p>
            <p>Email: info@saipragathi.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 Sai Pragathi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
