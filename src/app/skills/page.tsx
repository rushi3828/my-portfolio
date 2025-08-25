import React from "react";
import { FaReact, FaHtml5, FaBootstrap, FaJsSquare } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiAntdesign,
  SiRedux,
  SiStyledcomponents,
} from "react-icons/si";
import Header from "../components/Header";

const skills = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <FaReact className="text-sky-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-900" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-400" />,
      },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
      { name: "Material UI", icon: <FaBootstrap className="text-blue-500" /> },
      { name: "Ant Design", icon: <SiAntdesign className="text-red-500" /> },
      {
        name: "Styled Components",
        icon: <SiStyledcomponents className="text-pink-500" />,
      },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Communication", icon: "💬" },
      { name: "Teamwork", icon: "🤝" },
      { name: "Problem Solving", icon: "🧩" },
      { name: "Adaptability", icon: "⚡" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚀" },

      { name: "SQL", icon: "🗄️" },
    ],
  },
  {
    category: "Learning & Exploring",
    skills: [
      { name: "React Native", icon: "📱" },
      { name: "AWS / Cloud", icon: "☁️" },
      { name: "AI / ML", icon: "🤖" },
      { name: "Data Visualization", icon: "📊" },
      { name: "Rust", icon: "📊" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <>
      <Header />
      <section className="py-12 px-6 mt-10">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>

        {/* Responsive Premium Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr">
          {skills.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-md bg-white hover:shadow-2xl hover:-translate-y-1 transition border border-gray-100 hover:border-indigo-400"
            >
              <h3 className="font-semibold text-xl mb-4 text-gray-900">
                {category.category}
              </h3>
              <ul className="space-y-3 text-gray-700">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-lg">{skill.icon}</span> {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
