import React from "react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#c6d2f8] py-20 text-center relative overflow-hidden pb-32">
      {/* Left 3D shape */}
      <motion.img
        src="/ff.png"
        alt="Left Shape"
        className="absolute top-0 left-20 w-44 md:w-72"
        animate={{ y: [0, 30, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Right 3D shape */}
      <motion.img
        src="/gg.png"
        alt="Right Shape"
        className="absolute top-30 right-24 w-32 md:w-72"
        animate={{ y: [0, 30, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Sign up for free today
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-black text-white px-6 py-2 rounded-md font-medium">
            Get for free
          </button>
          <button className="text-black font-medium flex items-center gap-1">
            Learn more <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
