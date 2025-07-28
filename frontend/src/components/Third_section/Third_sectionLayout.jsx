import React from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Third_sectionLayout = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-[#a4b7ff] min-h-screen overflow-hidden">
      <motion.img
        src="/pyramidd1.png"
        alt="Top Right"
        className="absolute top-50 right-0 w-28 sm:w-36 md:w-44 opacity-80 pointer-events-none z-20"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.img
        src="/torus.png"
        alt="Bottom Left"
        className="absolute bottom-110 left-0 w-28 sm:w-36 md:w-44 opacity-80 pointer-events-none z-20"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <Product />
    </div>
  );
};

export default Third_sectionLayout;
