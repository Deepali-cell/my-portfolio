"use client";
import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { useTheme } from "next-themes";

const skillBadges = ["React", "Node", "JavaScript", "CSS", "HTML"];

const HeroSection = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const badgeClass =
    mounted && currentTheme === "dark"
      ? "bg-gradient-to-r from-purple-600 to-cyan-400 text-white"
      : "bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-400 text-black";

  // Dynamic colors for glow
  const glowColors =
    mounted && currentTheme === "dark"
      ? "linear-gradient(135deg, #ffffff, #00d4ff)" // White + Cyan for dark
      : "linear-gradient(135deg, #6a00ff, #00bfff)"; // Blue + Purple for light

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500">
      <div className="relative z-10 flex flex-col md:flex-row items-center md:justify-between w-full max-w-6xl px-6 md:px-12">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Deepali
            </span>
          </h1>

          {/* Learning Phase */}
          <p
            className={`text-lg md:text-xl max-w-md font-medium transition-colors duration-500 ${
              mounted && currentTheme === "dark"
                ? "text-gray-300"
                : "text-gray-700"
            }`}
          >
            A{" "}
            <span
              className={`font-semibold transition-colors duration-500 ${
                mounted && currentTheme === "dark"
                  ? "text-cyan-400"
                  : "text-blue-600"
              }`}
            >
              <Typewriter
                words={[
                  "MERN Stack Developer (Learning Phase)",
                  "Full Stack Enthusiast",
                  "AI & Web Exploring",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
            <br />
            Building modern and responsive web solutions while mastering MERN
            stack.
          </p>

          {/* Skill Badges */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-4">
            {skillBadges.map((skill, idx) => (
              <span
                key={idx}
                className={`px-3 py-1 rounded-full font-semibold text-sm shadow-md transition-transform hover:scale-110 ${badgeClass}`}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6">
            <a href="/projects">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 via-cyan-500 to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition transform">
                View My Work
              </button>
            </a>
            <a href="/contact">
              <button className="px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition">
                Contact Me
              </button>
            </a>
          </div>
        </div>

        {/* Right Section: Neon Hexagon */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <div
            className="hexagon-frame flex items-center justify-center relative"
            style={{ "--glow-colors": glowColors }}
          >
            <Image
              src="/profile_pic.png"
              alt="Profile"
              width={250}
              height={250}
              className="z-10"
            />
          </div>
        </div>
      </div>

      {/* CSS for Neon Glow Gradient */}
      <style jsx>{`
        .hexagon-frame {
          width: 400px;
          height: 400px;
          clip-path: polygon(
            25% 5%,
            75% 5%,
            100% 50%,
            75% 95%,
            25% 95%,
            0% 50%
          );
          background: #0e0e0e;
          position: relative;
        }

        /* Inner Glow */
        .hexagon-frame::before {
          content: "";
          position: absolute;
          inset: 0;
          clip-path: inherit;
          background: var(--glow-colors);
          filter: blur(25px);
          z-index: -1;
          opacity: 0.8;
        }

        /* Outer Border Glow */
        .hexagon-frame::after {
          content: "";
          position: absolute;
          inset: -15px;
          clip-path: inherit;
          background: var(--glow-colors);
          filter: blur(40px);
          z-index: -2;
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
