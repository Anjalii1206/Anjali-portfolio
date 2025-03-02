import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "BACHELOR'S OF ENGINEERING (CSE)",
    institution: "Chitkara University, Baddi, Himachal Pradesh",
    duration: "Sept 2021 - Present",
    details: "GPA: 9.23/10",
  },
  {
    title: "INTERMEDIATE",
    institution: "Holy Child Public School, Rewari, Haryana",
    details: "Percentage: 70%",
  },
  {
    title: "MATRICULATION",
    institution: "Holy Child Public School, Rewari, Haryana",
    details: "CGPA: 10/10",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 px-6">
      
      {/* Title Animation */}
      <motion.h2
        className="text-5xl text-center font-bold text-white mb-18"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Education
      </motion.h2>

      <motion.div 
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1, 
            transition: { staggerChildren: 0.3 } 
          },
        }}
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg backdrop-blur-lg bg-white/10 shadow-lg border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-purple-300">{edu.title}</h3>
            <p className="text-gray-300">{edu.institution}</p>
            {edu.duration && <p className="text-gray-400">{edu.duration}</p>}
            <p className="text-gray-300 font-medium">{edu.details}</p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Education;
