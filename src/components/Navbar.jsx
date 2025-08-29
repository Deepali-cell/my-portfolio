"use client";
import Link from "next/link";
import { ToogleButton } from "@/components/ToogleButton";
import { Menu, X, Home, FolderGit2, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    {
      href: "/projects",
      label: "Projects",
      icon: <FolderGit2 className="w-4 h-4" />,
    },
    { href: "/contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur-md shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_-2px_rgba(255,255,255,0.1)] transition-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Dstack
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1 hover:text-primary transition-colors group"
              >
                {link.icon}
                <span className="group-hover:underline">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <ToogleButton />
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-accent"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {isOpen && (
          <div className="md:hidden mt-2 flex flex-col gap-4 p-4 border-t border-border bg-background shadow-lg rounded-lg animate-fadeIn">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
