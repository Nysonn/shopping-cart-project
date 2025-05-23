import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function DesktopNav() {
  const activeStyle = "text-white font-bold";
  const inactiveStyle = "text-gray-800 hover:text-white transition-colors duration-200";

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Products", to: "/products" },
    { name: "Contact", to: "/contact" },
    { name: "About Us", to: "/about" }
  ];

  return (
    <nav className="hidden lg:flex gap-8 items-center" role="navigation">
      <motion.ul 
        className="flex gap-8 items-center text-base"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        animate="visible"
      >
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <NavLink to={item.to} className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
              <span className="relative py-2">
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </span>
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}
