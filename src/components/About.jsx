"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaBook,
  FaLaptopCode,
  FaBrain,
  FaUserAlt,
  FaProjectDiagram,
  FaAward,
} from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { useTheme } from "next-themes";

const cardData = [
  {
    title: "My Studies",
    desc: "3rd-year BCA student passionate about technology and problem-solving.",
    icon: <FaBook className="w-8 h-8 text-purple-400" />,
    img: "/about_assets/study.png",
  },
  {
    title: "What I Know",
    desc: "Basics of MERN Stack, web development fundamentals, and database concepts.",
    icon: <FaLaptopCode className="w-8 h-8 text-cyan-400" />,
    img: "/about_assets/know.png",
  },
  {
    title: "What I Learn",
    desc: "Currently exploring full-stack development, React, Node.js, AI tools, and Next.js.",
    icon: <FaBrain className="w-8 h-8 text-pink-400" />,
    img: "/about_assets/learn.jpeg",
  },
  {
    title: "My Skills & Frameworks",
    desc: "React, Node.js, Express, MongoDB, Next.js, Tailwind, Redux, Firebase, and REST APIs And Many Other frameworks and library i have used.",
    icon: <GiSkills className="w-8 h-8 text-green-400" />,
    img: "/about_assets/skills.jpeg",
  },
  {
    title: "Projects",
    desc: "Lms website , Doctors Appointment , Movie Booking , Ecommerce Web, Blog Platform.",
    icon: <FaProjectDiagram className="w-8 h-8 text-orange-400" />,
    img: "/about_assets/projects.png",
  },
  {
    title: "Achievements",
    desc: "Solved Many DSA problems, completed 5+ mern Stack with advance technology projects.",
    icon: <FaAward className="w-8 h-8 text-red-400" />,
    img: "/about_assets/achivements.jpeg",
  },
  {
    title: "Personal Side",
    desc: "Creative, hardworking, quick learner who enjoys sketching, traveling, and Cooking and creating new things.",
    icon: <FaUserAlt className="w-8 h-8 text-yellow-400" />,
    img: "/about_assets/cartoon.png",
  },
];

// Framer Motion Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutMe = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const currentTheme = mounted && (theme === "system" ? systemTheme : theme);

  // Card colors
  const cardBg = currentTheme === "dark" ? "bg-gray-900/80" : "bg-white/90";
  const cardBorder =
    currentTheme === "dark" ? "border-gray-700" : "border-gray-200";
  const cardShadow =
    currentTheme === "dark"
      ? "shadow-lg shadow-cyan-500/20"
      : "shadow-lg shadow-cyan-400/30";
  const titleColor = currentTheme === "dark" ? "text-white" : "text-gray-900";
  const descColor = currentTheme === "dark" ? "text-gray-300" : "text-gray-700";

  return (
    <section className="w-full py-20 px-6 md:px-12 transition-colors duration-500">
      {/* Title */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className={`text-4xl md:text-5xl font-extrabold ${titleColor}`}>
          About <span className="text-cyan-400">Me</span>
        </h2>
        <p className={`mt-4 text-lg ${descColor}`}>
          A small journey about my studies, skills, projects, and passions in a
          fun way.
        </p>
      </div>

      {/* Card Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
      >
        {cardData.map((card, idx) => (
          <motion.div
            key={idx}
            variants={cardVariant}
            whileHover={{ scale: 1.07 }}
            className={`relative p-6 rounded-3xl backdrop-blur-md flex flex-col items-center text-center group transition-all duration-500
              ${cardBg} border ${cardBorder} hover:border-cyan-400/50 ${cardShadow}`}
            style={{
              clipPath:
                "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
            }}
          >
            {/* Icon */}
            <div className="mb-4 transform group-hover:scale-110 transition-transform">
              {card.icon}
            </div>

            {/* Title */}
            <h3 className={`text-2xl font-bold mb-2 ${titleColor}`}>
              {card.title}
            </h3>

            {/* Description */}
            <p className={`text-sm mb-4 ${descColor}`}>{card.desc}</p>

            {/* Image */}
            <Image
              width={100}
              height={100}
              src={card.img}
              alt={card.title}
              className="w-24 h-24 rounded-full object-cover ring-4 shadow-lg group-hover:scale-105 transition-all"
              style={{
                borderColor:
                  currentTheme === "dark"
                    ? "rgba(6, 182, 212, 0.2)"
                    : "rgba(6, 182, 212, 0.3)",
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AboutMe;
