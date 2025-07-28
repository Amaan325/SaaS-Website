import React from "react";
import Logo from "../../assets/Default.png";
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:gap-16 text-left">
        {/* Brand Section */}
        <div className="md:w-1/3 mb-10 md:mb-0">
          <div className="flex items-center gap-3 mb-4">
            <img src={Logo} alt="Brand" className="w-10 h-10" />
          </div>
          <p className="text-sm text-gray-400">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website.
          </p>
          <div className="flex gap-4 mt-6 text-gray-400 text-xl mt-20">
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
            <FaYoutube />
          </div>
        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 flex-1 pl-62">
          {/* Product */}
          <div>
            <h4 className="font-semibold mb-3">Product</h4>
            <ul className="text-sm space-y-2 text-gray-400">
              <li>Features</li>
              <li>Integrations</li>
              <li>Updates</li>
              <li>FAQ</li>
              <li>Pricing</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="text-sm space-y-2 text-gray-400">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Manifesto</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="text-sm space-y-2 text-gray-400">
              <li>Examples</li>
              <li>Community</li>
              <li>Guides</li>
              <li>Docs</li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="text-sm space-y-2 text-gray-400">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
