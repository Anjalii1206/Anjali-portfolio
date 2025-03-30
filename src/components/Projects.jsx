import React from "react";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa6";
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";

const projects = [
  {
    name: "COFFERS CUBE",
    description: "A Full-Stack Food Delivery Platform",
    details:
      "Coffers Cube is a feature-rich online food delivery system built using the MERN stack, designed to provide users with a smooth food ordering experience. It integrates Stripe for secure payments, ensuring a reliable transaction process. Users can add items to their cart, place orders seamlessly, and track them in real time. The platform also includes a dedicated restaurant management system, allowing restaurants to manage menus, update availability, and handle customer orders efficiently.",
    techStack: "ReactJs, Node.js, Express, MongoDB, Stripe",
    image: Project1,
    github: "https://github.com/Anjalii1206/Coffers_Cube",
  },
  {
    name: "CODE FUSION",
    description: "Real-Time Collaborative Code Editor",
    details:
      "Code Fusion is a real-time collaborative coding platform designed for developers to write, edit, and execute code together seamlessly. The platform supports live code execution, syntax highlighting, and multi-language support, making it ideal for pair programming, interviews, and team-based coding projects. Code Fusion enhances productivity and enables efficient code collaboration from anywhere.",
    techStack: "ReactJs, Node.js, Express, Socket.io, Monaco Editor",
    image: Project2,
    github: "https://github.com/Anjalii1206/CodeFusion",
  },
  {
    name: "URBAN UTOPIA",
    description: "A Modern E-commerce Platform",
    details:
      "Urban Utopia is a feature-rich e-commerce platform built using JavaScript, HTML, and Tailwind CSS. It provides a seamless shopping experience with a user-friendly interface, dynamic product listings, and local storage-based cart management. The platform includes an admin inventory system for product management and a user dashboard with cart functionality, ensuring a smooth and efficient shopping experience.",
    techStack: "JavaScript, HTML, Tailwind CSS, Local Storage",
    image: Project3,
    github: "https://github.com/your-username/urban-utopia",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center mt-15 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Projects
        </motion.h2>

        <div className="space-y-20"> 
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`flex flex-col md:flex-row items-center gap-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-semibold mb-6">{project.name}</h3>
                <p className="text-xl text-red-400">{project.description}</p>
                <p className="text-lg mt-4 text-gray-300">{project.details}</p>
                <p className="mt-4 font-semibold text-white">Tech Stack:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.split(", ").map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-400 text-white px-3 py-1 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Right: Project Image & GitHub Link */}
              <motion.div
                className="md:w-1/2 flex flex-col items-center justify-center gap-4"
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="w-full max-w-md shadow-lg rounded-lg"
                  whileHover={{ scale: 1.25 }}
                  transition={{ duration: 0.3 }}
                />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 mt-7 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-700 transition-all duration-300"
                >
                  <FaLink className="text-lg" /> View on GitHub
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
