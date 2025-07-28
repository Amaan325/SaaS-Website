import React from "react";

const FourthSection = () => {
  return (
    <div className="w-full bg-white">

      {/* Main Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 py-16">
        {/* Tagline */}
        <div className="text-xs font-medium bg-gray-100 text-black px-3 py-1 rounded-full mb-4">
          Everything you need
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Streamlined for easy <br /> <span className="text-gray-900">management</span>
        </h1>

        {/* Subheading */}
        <p className="text-base text-gray-600 max-w-xl mb-12">
          Enjoy customizable lists, team work tools, and smart tracking all in one place. 
          Set tasks, get reminders, and see your progress simply and quickly.
        </p>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-2xl p-6 max-w-sm text-center">
            <img src="/pp.png" alt="Integration" className="w-[324px] h-[324px] mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Integration ecosystem</h3>
            <p className="text-gray-600 text-sm">
              Enhance your productivity by connecting with your favorite tools, 
              keeping all your essentials in one place.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-2xl p-6 max-w-sm text-center">
            <img src="/cube-helix1.png" alt="Goal setting" className="w-[324px] h-[324px] mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Goal setting and tracking</h3>
            <p className="text-gray-600 text-sm">
              Define and track your goals, breaking down objectives into achievable 
              tasks to keep your targets in sight.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
