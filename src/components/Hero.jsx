import React from "react";
import { motion } from "framer-motion";
import Profile from "../assets/Profile.jpg";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import Anjali25 from "../assets/Anjali25.pdf";

const Hero = () => {
  return (
    <div className="mt-40 container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <section className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="max-w-4xl text-left">
          <motion.h1
            className="text-purple-400 font-semibold font-mono mb-5"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            Hi, my name is
          </motion.h1>
          <motion.h2
            className="text-5xl sm:text-7xl font-bold text-white mb-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Anjali Verma
          </motion.h2>
          <motion.h3
            className="text-4xl sm:text-6xl font-bold text-gray-400 mb-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Building the web, better.
          </motion.h3>
          <motion.p
            className="text-gray-400 max-w-xl font-semibold text-lg mb-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            Innovating the web with purpose and precision. As a full-stack
            engineer, I create accessible, user-friendly digital experiences
            that leave a lasting impact.
          </motion.p>

          <motion.div
            className="flex gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            <a
              href="#contact"
              className="inline-block px-8 py-4 border border-purple-400 text-purple-400 rounded-lg text-lg font-semibold transition-all duration-300 hover:text-green-400 hover:border-white"
            >
              Get In Touch
            </a>
            <a
              href={Anjali25}
              download="Anjali_Resume.pdf"
              className="inline-block px-8 py-4 border border-purple-400 text-purple-400 rounded-lg text-lg font-semibold transition-all duration-300 hover:text-green-400 hover:border-white"
            >
              Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div className="flex gap-7 mb-8 text-gray-400">
            {[
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/anjali-verma-32b270224/",
                color: "hover:text-blue-600",
                xStart: -50,
              },
              {
                icon: <FaGithub />,
                link: "https://github.com/Anjalii1206",
                color: "hover:text-red-600",
                xStart: 50,
              },
              {
                icon: <SiLeetcode />,
                link: "https://leetcode.com/u/Anjali_1206/",
                color: "hover:text-yellow-400",
                xStart: -50,
              },
              {
                icon: <FaXTwitter />,
                link: "https://x.com/anjaliv1206",
                color: "hover:text-white",
                xStart: 50,
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, ease: "easeOut", delay: 0 }}
                whileHover={{ x: 5, scale: 1.5, rotate: 9 }}
                whileTap={{ scale: 0.9, delay: 0 }}
                className={`text-3xl transition-all duration-300 ${item.color}`}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right Profile Image */}
        <motion.div
          className="mt-10 md:mt-0 flex justify-center md:justify-end w-full md:w-auto"
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={Profile}
            alt="Anjali Verma"
            className="w-40 h-40 md:w-100 md:h-100 rounded-full object-cover"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
