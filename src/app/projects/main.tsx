"use client";
import { FC, JSX } from "react";
import { useRouter } from "next/navigation";
import { FaRobot, FaUsers, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  icon: JSX.Element;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Smart Robotics WheelChair Using TouchScreen",
    description:
      "An innovative assistive mobility solution designed for differently-abled individuals. This smart wheelchair integrates touchscreen-based navigation with five intuitive modes—FRONT, BACK, LEFT, RIGHT, and STOP—empowering users with greater independence and ease of control.",
    icon: <FaRobot className="text-indigo-500 text-4xl" />,
  },
  {
    title: "Mahapanchayat Project",
    description:
      "A transformative digital governance platform modernizing traditional Gramsevak operations into fully paperless, efficient systems. Features include beneficiary tracking, taxation modules (home, water, road), family demographics management, and digital issuance of key certificates such as birth, marriage, and tax records.",
    icon: <FaUsers className="text-pink-500 text-4xl" />,
    link: "http://app.mahapanchayats.in/",
  },
];

const Projects: FC = () => {
  const router = useRouter();

  return (
    <section
      id="projects"
      className="py-20 min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Back Button */}
        <div className="flex justify-start mb-10">
          <button
            onClick={() => router.push("/")}
            className="cursor-pointer px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 
                       text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
          >
            ⬅ Back
          </button>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-14">
          Personal{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
            Projects
          </span>
        </h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-lg border border-gray-200 
                         shadow-xl rounded-2xl p-8 flex flex-col items-start text-left 
                         transition-all duration-300 hover:-translate-y-2 
                         hover:shadow-2xl hover:border-red-500 cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-4">{project.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-4 underline decoration-indigo-400 underline-offset-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-base mb-6">
                {project.description}
              </p>

              {/* External Link (only if project has link) */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-indigo-600 
                             hover:text-red-500 transition-all duration-300"
                >
                  Visit Project <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
