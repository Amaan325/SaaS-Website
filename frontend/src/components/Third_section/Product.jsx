import React from "react";
import { LuLeaf } from "react-icons/lu";
import { GoGoal } from "react-icons/go";
import { FaLock } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import ProductImage from "../../assets/product.png"

const ProductSection = () => {
  const integrationBlocks = [
    {
      icon: <LuLeaf size={24} className="text-black mb-2" />,
      title: "Analytics Integration",
      description:
        "Connect seamlessly with analytics tools to track user behavior and performance.",
    },
    {
      icon: <GoGoal size={24} className="text-black mb-2" />,
      title: "Payment Gateway",
      description:
        "Set and track goals with manageable task breakdowns. Behaviour and Customers.",
    },
    {
      icon: <FaLock size={24} className="text-black mb-2" />,
      title: "CRM Support",
      description:
        "Sync data with CRMs like Salesforce to manage your leads and customers.",
    },
    {
      icon: <CiBellOn size={24} className="text-black mb-2" />,
      title: "Marketing Tools",
      description:
        "Link up with email marketing platforms to boost your campaigns.",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-white to-[#a4b7ff] min-h-screen overflow-hidden">
      {/* Floating Images with Motion */}
      

      {/* Top Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 py-16 relative z-10">
        <p className="text-sm text-black font-medium mb-4">
          Boost your productivity
        </p>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          A more effective way <br /> to track progress
        </h1>
        <p className="text-base text-gray-700 max-w-xl mb-8">
          Effortlessly turn your ideas into a fully functional, responsive,
          no-code SaaS website in just minutes with the set of free components
          for Framer.
        </p>

        <img src={ProductImage} alt="Product" className="w-full max-w-7xl z-10" />
      </div>

      {/* Integration Ecosystem Section */}
      <div className="-mt-20 px-6 lg:px-20 py-1 z-10 relative mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {integrationBlocks.map((block, index) => (
            <div key={index} className="rounded-lg p-6 transition text-left">
              <div className="mb-2">{block.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{block.title}</h3>
              <p className="text-black text-sm mb-4">{block.description}</p>
              <button className="text-black text-sm hover:underline">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
