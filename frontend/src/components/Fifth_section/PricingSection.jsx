import React from "react";

const plans = [
  {
    name: "Free",
    price: "$0",
    buttonText: "Get started for free",
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "20GB storage",
      "Integrations",
      "Basic support",
    ],
    isPopular: false,
    dark: false,
    height: "h-[400px]", // Shortest
  },
  {
    name: "Pro",
    price: "$9",
    buttonText: "Sign up now",
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
    isPopular: true,
    dark: true,
    height: "h-[500px]", // Medium
  },
  {
    name: "Business",
    price: "$19",
    buttonText: "Sign up now",
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
    isPopular: false,
    dark: false,
    height: "h-[600px]", // Tallest
  },
];

const PricingSection = () => {
  return (
    <section className="py-16 bg-white text-black">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-wide mb-2 text-black">
          Boost your productivity
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          A more effective way <br />
          <span className="text-black">to track progress</span>
        </h2>
        <p className="text-gray-800 mt-4 max-w-xl mx-auto mb-9">
          Effortlessly turn your ideas into a fully functional, responsive,
          no-code SaaS website in just minutes with the set of free components
          for Framer.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 justify-center items-end"> {/* Changed to items-end */}
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`w-full max-w-sm rounded-xl shadow-lg flex flex-col justify-between p-6 relative ${plan.height} ${
              plan.dark
                ? "bg-black text-white"
                : "bg-white text-black border border-gray-200"
            }`}
          >
            {plan.isPopular && (
              <span className="absolute top-4 right-4 bg-gray-800 text-white text-xs px-2 py-1 rounded-full">
                Most Popular
              </span>
            )}

            <div>
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold mb-2">
                {plan.price}
                <span className="text-sm font-normal">/monthly</span>
              </div>
            </div>

            <div className="flex flex-col justify-between flex-grow mt-4">
              <button
                className={`w-full py-2 mb-6 text-sm font-medium rounded-md ${
                  plan.dark
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-black text-white hover:bg-gray-900"
                }`}
              >
                {plan.buttonText}
              </button>

              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span>✔️</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;