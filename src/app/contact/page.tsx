"use client";
import Link from "next/link";
import { ArrowLeft, Linkedin, Mail, FileDown } from "lucide-react";
import Header from "../components/Header";

export default function ContactCard() {
  return (
    <>
      <Header />
      <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 px-4">
        <div className="relative max-w-md w-full bg-white/70 backdrop-blur-lg shadow-2xl rounded-2xl p-8 text-center border border-gray-200 hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition duration-300">
          {/* Heading */}
          <h2 className="text-3xl font-extrabold text-gray-800 mb-3">
            Let’s Connect
          </h2>
          <p className="text-gray-600 text-base mb-6">
            Interested in having a chat? Download my resume, connect with me on
            LinkedIn, or send me an email directly.
          </p>

          {/* Buttons */}
          <div className="space-y-4">
            <a
              href="/Rushi_Sanap_resume.pdf" // Place resume.pdf in your public/ folder
              download
              className="flex items-center justify-center gap-3 w-full md:w-auto bg-red-600 text-white font-semibold px-6 py-4 rounded-xl shadow-lg hover:bg-red-700 transition duration-300"
            >
              <FileDown size={20} />
              Download CV
            </a>

            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              <Linkedin size={20} /> Connect on LinkedIn
            </a>

            <a
              href="mailto:yourmail@example.com"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gray-100 text-gray-800 font-semibold shadow hover:bg-gray-200 hover:scale-[1.02] transition"
            >
              <Mail size={20} /> Send Email
            </a>
          </div>

          {/* Footer */}
          <div className="mt-6 text-sm">
            <p className="text-blue-700 font-medium">
              Open to full-time and contract roles
            </p>
            <p className="text-green-600 font-medium">
              Available for interviews
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
