import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Front-end",
    techs: [
      { name: "HTML", icon: "/icons/html.png" },
      { name: "CSS", icon: "/icons/css-3.png" },
      { name: "JavaScript", icon: "/icons/js.png" },
      { name: "React", icon: "/icons/react.png" },
      { name: "Tailwind", icon: "/icons/tailwind-css.png" },
      { name: "Bootstrap", icon: "/icons/bootstrap.png" },
    ],
  },
  {
    category: "Backend",
    techs: [
      { name: "Node.js", icon: "/icons/node-js.png" },
      { name: "Express.js", icon: "/icons/express-js.png" },
    ],
  },
  {
    category: "Databases",
    techs: [
      { name: "MongoDB", icon: "/icons/mongo-db.png" },
      { name: "My SQL", icon: "/icons/my-sql.png" },
    ],
  },
  {
    category: "DevOps & Tools",
    techs: [
      { name: "Git", icon: "/icons/git.png" },
    ],
  },
];

const Skills = () => {
  return (
    <section className="text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-7xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Skills
        </motion.h2>

        {skills.map((section, index) => (
          <motion.div
            key={section.category}
            className="mb-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-400 mb-4">
              {section.category}
            </h3>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }, 
                },
              }}
            >
              {section.techs.map((tech) => (
                <motion.div
                  key={tech.name}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
                  <p className="text-white mt-2">{tech.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
