"use client";
import { FC } from "react";
import Link from "next/link";
import { FaBriefcase, FaArrowLeft } from "react-icons/fa";
import Header from "../components/Header";

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    role: "Senior Software Developer",
    company: "Synechron",
    period: "04/2022 - Present",
    description: [
      "Architected and enhanced a mobile device protection & insurance platform for Asurion, revolutionizing the claim filing and smartphone replacement journey for millions of customers.",
      "Designed and implemented robust administrative dashboards that empowered call-center agents to handle high-volume inbound & outbound operations with precision and speed.",
      "Partnered with cross-functional leaders including Architects and BAs to define the long-term strategic roadmap, driving seamless delivery of mission-critical features.",
    ],
  },
  {
    role: "Software Developer",
    company: "Synechron",
    period: "11/2019 - 04/2022",
    description: [
      "Engineered responsive, high-performing web applications for Asurion Insurance and Vodafone, supporting global trade-in and trade-up programs.",
      "Enabled customers to seamlessly exchange old devices (trade-in) or upgrade to newer models (trade-up), boosting retention and customer satisfaction.",
      "Built dynamic and responsive email templates, improving engagement and communication across multiple devices and platforms.",
    ],
  },
];

const About: FC = () => {
  return (
    <>
      <section
        id="experience"
        className="py-20 bg-gradient-to-b from-white to-gray-50 min-h-screen"
      >
        <Header />
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-4xl font-extrabold text-center mb-16">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">
              Experience
            </span>
          </h2>

          {/* Timeline */}
          <div className="relative border-l-4 border-orange-500 pl-6 space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl p-8 relative group transition-all duration-500 ease-out 
                         hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]
                         hover:border hover:border-red-400 hover:bg-gradient-to-r hover:from-white hover:to-orange-50 cursor-pointer"
              >
                {/* Timeline Dot */}
                <span
                  className="absolute -left-4 top-6 w-8 h-8 flex items-center justify-center 
                               bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-full shadow-md 
                               group-hover:scale-110 group-hover:shadow-lg transition-transform duration-300"
                >
                  <FaBriefcase />
                </span>

                {/* Role & Company */}
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {exp.role}{" "}
                  <span className="text-indigo-600">@ {exp.company}</span>
                </h3>

                {/* Period */}
                <p className="text-sm text-gray-500 font-medium mb-4">
                  {exp.period}
                </p>

                {/* Description */}
                <ul className="list-disc pl-5 space-y-3 text-gray-700 leading-relaxed">
                  {exp.description.map((point, i) => (
                    <li
                      key={i}
                      className="transition-all duration-300 group-hover:text-gray-900 group-hover:translate-x-1"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
