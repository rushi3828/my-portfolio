"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "/home" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  // { name: "Portfolio", href: "#portfolio" },
  { name: "Resume", href: "/Rushi_Sanap_resume.pdf", external: true },
  // { name: "Blog", href: "#blog" },
  { name: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full fixed top-0 left-0 bg-white shadow-md z-50"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl font-bold text-gray-900"
          >
            My<span className="text-red-600">Portfolio</span>
          </motion.div>

          {/* Nav Menu */}
          <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group transition text-gray-700 hover:text-red-600"
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="relative group transition text-gray-700 hover:text-red-600"
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Language Switch */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex gap-4 text-sm text-gray-500"
          >
            <button className="hover:text-red-600 transition">FRA</button>
            <button className="hover:text-red-600 transition">FER</button>
            <button className="text-red-600 font-bold">ENG</button>
          </motion.div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
