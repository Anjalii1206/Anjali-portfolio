import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion"; 
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-lg bg-white/10 border border-white/20 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-12 w-12" />
        </div>

        <div className="hidden sm:flex gap-8 text-lg relative">
          {["Home", "Education", "Skills", "Projects", "Contact"].map((item) => (
            <div key={item} className="relative">
              <a
                href={`#${item.toLowerCase()}`}
                className={`text-white transition duration-300 ${active === item ? "text-white" : "hover:text-underline"}`}
                onClick={() => setActive(item)}
              >
                {item}
              </a>
              {active === item && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 h-[2.5px] bg-red-500 w-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="sm:hidden ">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden w-full bg-white/10 border-white/10 text-white text-semibold text-2xl flex flex-col items-center gap-3 py-3">
          {["Home", "Education", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`transition duration-300 ${
                active === item ? "text-yellow-300" : "text-white"
              } hover:underline underline-offset-4 decoration-red-500`}
              onClick={() => {
                setIsOpen(false);
                setActive(item);
              }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
