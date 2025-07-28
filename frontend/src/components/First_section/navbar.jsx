import React from "react";
import Logo from "../../assets/Default.png";
import Logo2 from "../../assets/Vector.png";

const Navbar = () => {
  return (
    <div className="p-6 flex justify-between items-center">
      {/* Left Section: Logo and Framer Text */}
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="h-12 w-auto" />
        <p className="text-gray-500 ">made by</p>
        <img src={Logo2} alt="Logo2" className="h-5 w-auto" />
        <p className="font-bold ">Framer</p>
      </div>

      {/* Right Section: Navigation and Button */}
      <div className="flex items-center gap-6">
        <nav className="hidden sm:flex items-center gap-4 text-gray-700 font-medium">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Features
          </a>
          <a href="#" className="hover:underline">
            Customers
          </a>
          <a href="#" className="hover:underline">
            Updates
          </a>
          <a href="#" className="hover:underline">
            Help
          </a>
        </nav>
        <button className="bg-black text-white text-sm px-4 py-2 rounded hover:bg-gray-900 transition">
          Get for Free
        </button>
      </div>
    </div>
  );
};

export default Navbar;
