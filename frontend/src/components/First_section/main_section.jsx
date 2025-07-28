import React from "react";
import Visual from "../../assets/Visual.png";
import Cylinder from "../../assets/cylinder.png";
import Halftorus from "../../assets/halftorus.png";
import { motion } from "framer-motion";
import Navbar from "./navbar";

const MainSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#EAEEFE] to-[#748fda] min-h-screen ">
        <Navbar />

      {/* Navbar at top */}
      {/* <div className="px-20 pt-6 pb-2"> */}
      {/* </div> */}

      {/* Main content */}
      <div className="mt-6 px-20 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="max-w-xl space-y-6">
          <div className="flex items-center">
            <button className="text-md text-black px-2 py-1 border-2 border-gray-300 rounded">
              Version 2.0 is here
            </button>
          </div>

          <h1 className="text-[74px] font-bold leading-18 tracking-[-0.05em]">
            Pathway to <br /> Productivity
          </h1>

          <p className="text-gray-700 text-lg">
            Celebrate the joy of accomplishment with an <br />
            app designed to track your progress, motivate <br />
            your efforts, and celebrate your successes.
          </p>

          <div className="flex gap-4">
            <button className="bg-black text-white px-5 py-3 rounded hover:bg-gray-800 transition">
              Get for free
            </button>
            <button className="text-black font-medium flex items-center gap-1">
            Learn more <span className="text-lg">→</span>
          </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="relative mt-12 lg:mt-0 w-[648px] h-[500px]">
          {/* Cylinder (top-left) */}
          <img
            src={Cylinder}
            alt="Cylinder"
            className="absolute top-[-40px] left-[-50px] w-52 h-52 object-contain z-10"
          />

          {/* Main Visual */}
          <motion.img
            src={Visual}
            alt="Main visual"
            className="mt-6 w-[800px] h-[500px] object-contain z-0"
            animate={{ y: [0, -50, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Halftorus (bottom-right) */}
          <img
            src={Halftorus}
            alt="Halftorus"
            className="absolute bottom-[-120px] right-[-10px] w-52 h-52 object-contain z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
