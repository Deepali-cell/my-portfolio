"use client";
import React, { useState, useEffect } from "react";

const Background = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const generatedDots = Array.from({ length: 50 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
    }));
    setDots(generatedDots);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Base */}
      <div
        className="absolute inset-0 
                   dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-800 dark:to-gray-900
                   bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100
                   bg-[length:400%_400%] animate-gradient"
      ></div>

      {/* Floating Blobs */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 
                   rounded-full filter blur-3xl opacity-25 
                   dark:bg-blue-700 bg-blue-400 animate-blob"
      ></div>
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 
                   rounded-full filter blur-3xl opacity-25 
                   dark:bg-cyan-700 bg-cyan-300 animate-blob animation-delay-2000"
      ></div>
      <div
        className="absolute top-1/2 left-1/2 w-72 h-72 
                   rounded-full filter blur-2xl opacity-20 
                   dark:bg-slate-700 bg-slate-200 
                   -translate-x-1/2 -translate-y-1/2"
      ></div>

      {/* Subtle Dots */}
      {dots.map((dot, idx) => (
        <div
          key={idx}
          className="absolute rounded-full animate-twinkle
                     dark:bg-gray-400 bg-gray-500"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            top: `${dot.top}%`,
            left: `${dot.left}%`,
            opacity: 0.25,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Background;
