import React from "react";
import { motion } from "framer-motion";

const images = [
  "/celestia1.png",
  "/echo1.png",
  "/pulse1.png",
  "/quantum1.png",
  "/acme1.png",
  "/apex1.png",
];

const repeatedImages = Array.from({ length: 4 }, () => images).flat();

const Sliding = () => {
  return (
    <div className="relative mt-16 overflow-hidden w-full h-32 bg-white">
      {/* Fade overlays */}
      <div className="absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 60,
        }}
      >
        {[...repeatedImages, ...repeatedImages].map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="w-32 h-24 object-contain mr-8"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Sliding;
