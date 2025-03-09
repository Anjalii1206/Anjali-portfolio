import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.footer
      ref={ref}
      className="mt-10 text-white py-6"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
    >
      <hr className="mb-10 text-gray-500" />
      <div className="container mx-auto flex flex-col items-center justify-center">
        {/* Social Links */}
        <motion.div
          className="flex gap-6 mb-4 text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0 }}
        >
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/anjali-verma-32b270224/", color: "hover:text-blue-500" },
            { icon: <FaGithub />, link: "https://github.com/Anjalii1206", color: "hover:text-red-600" },
            { icon: <SiLeetcode />, link: "https://leetcode.com/u/Anjali_1206/", color: "hover:text-yellow-400" },
            { icon: <FaXTwitter />, link: "https://x.com/anjaliv1206", color: "hover:text-white" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-3xl ${item.color} transition-all duration-300`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0 }}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-sm text-white text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.1, delay: 0 }}
        >
          <p>&copy; {new Date().getFullYear()} Anjali Verma. Made with ❤️ by Anjali.</p>
          <motion.span
            className="text-center block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }} 
          >
            vermanjali721@gmail.com
          </motion.span>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
