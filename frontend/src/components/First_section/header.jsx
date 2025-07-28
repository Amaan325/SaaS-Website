import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="bg-black w-full text-white flex items-center justify-center gap-2 p-4">
      <p>
        <span className="text-white/60">
          This page is included in a free SaaS Website kit.
        </span>
      </p>
      <p> View the complete Kit.</p>
      <FaArrowRight className="inline ml-2 text-white" />
    </div>
  );
};

export default Header;
