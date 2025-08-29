"use client";
import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUniversity,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center p-6 ">
      <div
        className="max-w-2xl w-full rounded-2xl p-8 shadow-lg
                      bg-black text-white dark:bg-white dark:text-black"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Contact Me
        </h2>

        {/* Contact Info */}
        <div className="space-y-4 mb-8">
          <p className="flex items-center gap-3 text-lg">
            <FaEnvelope className="text-purple-400" /> Email:{" "}
            <a
              href="mailto:deepalisingal19@gmail.com"
              className="font-semibold text-purple-400 hover:underline"
            >
              deepalisingal19@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-3 text-lg">
            <FaPhone className="text-purple-400" /> Phone:{" "}
            <a
              href="tel:+919255504828"
              className="font-semibold text-purple-400 hover:underline"
            >
              9255504828
            </a>
          </p>
          <p className="flex items-center gap-3 text-lg">
            <FaMapMarkerAlt className="text-purple-400" /> Location:{" "}
            <span className="font-semibold">Hisar, Haryana</span>
          </p>
          <p className="flex items-center gap-3 text-lg">
            <FaUniversity className="text-purple-400" /> Education:{" "}
            <span className="font-semibold">
              Chandigarh University, BCA 5th Sem, 3rd Year
            </span>
          </p>
          <p className="text-lg">
            Beginner web developer, eager to learn and improve skills.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/Deepali-cell"
            target="_blank"
            className="flex items-center gap-2 bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 px-4 py-2 rounded-xl transition text-white dark:text-black"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/deepali-singal-5b1a0a28a/"
            target="_blank"
            className="flex items-center gap-2 bg-blue-700 dark:bg-blue-200 hover:bg-blue-600 dark:hover:bg-blue-300 px-4 py-2 rounded-xl transition text-white dark:text-black"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        {/* Static Info Message */}
        <div className="mt-6 text-center text-gray-300 dark:text-gray-800">
          Feel free to reach out via email, phone, or connect on
          GitHub/LinkedIn.
        </div>
      </div>
    </section>
  );
};

export default Contact;
