"use client";
import React from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const PortFolio: React.FC = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center pt-24 md:pt-28"
      style={{ backgroundImage: "url('/back-grd-img.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-white">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col gap-6 text-center md:text-left"
        >
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="uppercase tracking-widest text-sm text-gray-300"
          >
            — Hello
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
          >
            I’m <span className="text-red-500">Rushikesh Sanap</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-md mx-auto md:mx-0 leading-relaxed text-gray-200 text-sm sm:text-base"
          >
            I am a Frontend Developer passionate about engineering modern,
            high-performing web applications using React, Next.js, TypeScript,
            and diverse CSS frameworks. I thrive on designing elegant,
            user-friendly interfaces and delivering seamless, intuitive digital
            experiences.
          </motion.p>

          <motion.a
            href="/Rushi_Sanap_resume.pdf"
            download
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-5 py-3 bg-red-600 text-white font-medium rounded-lg shadow-lg hover:bg-red-700 transition w-fit mx-auto md:mx-0 text-sm sm:text-base"
          >
            <Download size={18} /> Download CV
          </motion.a>
        </motion.div>

        {/* Right Image + Circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col justify-center items-center gap-8 relative"
        >
          {/* Profile Image */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-gray-200"
          >
            <img
              src="./Rushi.png"
              alt="Rushi"
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Circles Below Image */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a
              href="/Rushi_Sanap_resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center rounded-full bg-yellow-500 text-black font-bold border border-black hover:scale-105 transition transform text-sm"
            >
              Resume
            </a>
            <a
              href="/about"
              className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center rounded-full bg-red-500 text-black font-bold border border-black hover:scale-105 transition transform text-sm"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center rounded-full bg-cyan-400 text-black font-bold border border-black hover:scale-105 transition transform text-sm"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>

      {/* Side text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.7 }}
        className="absolute right-6 bottom-20 hidden md:block rotate-90 origin-bottom-right text-gray-300 text-sm tracking-widest"
      >
        Scroll Down
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.7 }}
        className="absolute left-6 bottom-10 flex gap-4 text-gray-300"
      >
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <i className="lab la-github text-2xl hover:text-white transition"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <i className="lab la-linkedin text-2xl hover:text-white transition"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <i className="lab la-twitter text-2xl hover:text-white transition"></i>
        </a>
      </motion.div>
    </section>
  );
};

export default PortFolio;
