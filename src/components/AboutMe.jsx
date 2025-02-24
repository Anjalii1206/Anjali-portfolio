import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <>
    <section id="about-me" className="mt-30 py-16 px-6 text-left mb-20">
      
      {/* About Me Title - Rises Up when scrolled into view */}
      <motion.h2
        className="text-7xl font-bold text-white mb-18"
        initial={{ opacity: 0, y: 50 }}  
        whileInView={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.8, ease: "easeOut" }}  
        viewport={{ once: true, amount: 0.3 }} 
      >
        About Me
      </motion.h2>

      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, y: -30 }} 
        whileInView={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} 
        viewport={{ once: true, amount: 0.3 }} 
      >
        <p className="text-gray-300 text-xl mb-14 text-left">
          Hi there! I'm <span className="text-purple-400 font-semibold">Anjali Verma</span>, a Full-Stack Developer specializing in the MERN Stack. My passion lies in developing efficient web applications, managing SQL & MongoDB databases, and ensuring seamless deployment. I am committed to creating dynamic, scalable, and user-centric web applications using modern technologies.
        </p>
        <p className="text-gray-300 text-xl">
          Looking forward to sharpening my skills in a challenging environment. I guarantee enthusiasm in work and fulfilling my projects with inexpressible effort.
        </p>
      </motion.div>
      
    </section>
  </>
  );
};

export default AboutMe;
