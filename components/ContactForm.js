"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, CheckCircle, Loader } from "lucide-react";

export default function ContactForm({ onClose }) {
  // Accept onClose prop
  // State management
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessages, setErrorMessages] = useState({}); // State for error messages
  const [loading, setLoading] = useState(false); // State for loading

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset messages
    setSuccessMessage("");
    setLoading(false);

    // Basic validation
    let errors = {};

    if (!name) {
      errors.name = "Name is required.";
    }
    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid.";
    }
    if (!phone) {
      errors.phone = "Phone number is required.";
    } else if (!/^\+?\d{10,15}$/.test(phone)) {
      errors.phone = "Phone number is invalid.";
    }
    if (!message) {
      errors.message = "Message is required.";
    }

    // If errors exist, set them and stop form submission
    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors);
      return;
    }

    // Set loading to true and reset form fields
    setLoading(true);

    // Simulate form submission with a delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form fields
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");

    // Show success message
    setSuccessMessage("Your inquiry has been registered successfully!");
    setLoading(false);

    setTimeout(() => {
      setSuccessMessage("");
      onClose(); // Close the form after a short delay
    }, 3000);
  };

  // Handle input change and clear corresponding error message
  const handleChange = (setter, fieldName) => (e) => {
    const { value } = e.target;
    setter(value);

    // Clear error message if the field is valid
    if (fieldName === "name" && value) {
      setErrorMessages((prev) => ({ ...prev, name: undefined }));
    }
    if (fieldName === "email") {
      setErrorMessages((prev) => ({
        ...prev,
        email: value && /\S+@\S+\.\S+/.test(value) ? undefined : prev.email,
      }));
    }
    if (fieldName === "phone") {
      setErrorMessages((prev) => ({
        ...prev,
        phone: value && /^\+?\d{10,15}$/.test(value) ? undefined : prev.phone,
      }));
    }
    if (fieldName === "message" && value) {
      setErrorMessages((prev) => ({ ...prev, message: undefined }));
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-6">
              Interested in our services or have a question? Reach out to us,
              and we'll be happy to assist you.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span>123 Luxury Lane, Hyderabad, Telangana 500001</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <span>info@saipragathi.com</span>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="space-y-4">
              <div>
                <label className="block mb-1">
                  Your Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={handleChange(setName, "name")}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errorMessages.name && (
                  <div className="text-red-600 text-sm mt-1">
                    {errorMessages.name}
                  </div>
                )}
              </div>
              <div>
                <label className="block mb-1">
                  Your Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={handleChange(setEmail, "email")}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errorMessages.email && (
                  <div className="text-red-600 text-sm mt-1">
                    {errorMessages.email}
                  </div>
                )}
              </div>
              <div>
                <label className="block mb-1">
                  Your Phone <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={handleChange(setPhone, "phone")}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errorMessages.phone && (
                  <div className="text-red-600 text-sm mt-1">
                    {errorMessages.phone}
                  </div>
                )}
              </div>
              <div>
                <label className="block mb-1">
                  Your Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={handleChange(setMessage, "message")}
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errorMessages.message && (
                  <div className="text-red-600 text-sm mt-1">
                    {errorMessages.message}
                  </div>
                )}
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-black text-white p-2 rounded-md ${
                  loading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-primary-dark"
                }`}
              >
                {loading ? <Loader className="animate-spin" /> : "Send Message"}
              </button>
              {successMessage && (
                <div className="text-green-600 text-sm mt-2">
                  {successMessage}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
