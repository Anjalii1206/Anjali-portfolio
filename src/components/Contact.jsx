import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className="text-white py-12 px-6"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="max-w-xl mx-auto text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2 className="text-2xl mt-15 font-bold text-purple-400">What's Next?</h2>
        <h1 className="text-4xl font-extrabold mt-2">Get In Touch</h1>
        <p className="mt-4 text-gray-500 text-xl">
          Let’s Chat! Whether you have a question, a project idea, or just want
          to connect, I’m always happy to hear from you. Drop me a message, and
          I’ll be in touch soon!
        </p>
      </motion.div>

      <motion.form
        className="max-w-lg mx-auto mt-8 p-6 rounded-lg shadow-lg font-medium text-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        {["name", "email", "message"].map((field, index) => (
          <motion.div
            key={field}
            className="mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.3 * index }}
          >
            <label className="block text-gray-200 mb-2" htmlFor={field}>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            {field === "message" ? (
              <textarea
                id={field}
                rows="4"
                className="w-full px-4 py-2 rounded-md bg-gray-400 text-black border border-gray-600 focus:outline-none focus:border-blue-400"
                placeholder={`Type your ${field}...`}
              ></textarea>
            ) : (
              <input
                type={field === "email" ? "email" : "text"}
                id={field}
                className="w-full px-4 py-2 rounded-md bg-gray-400 text-black border border-gray-600 focus:outline-none focus:border-blue-400"
                placeholder={`Enter your ${field}`}
              />
            )}
          </motion.div>
        ))}

        <motion.button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-md font-medium transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Say Hello
        </motion.button>
      </motion.form>
    </motion.section>
  );
};

export default Contact;

