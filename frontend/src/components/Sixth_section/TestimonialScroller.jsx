import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex Rivera",
    handle: "@jamietechguru00",
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
  },
  {
    name: "Casey Jordan",
    handle: "@caseyj",
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
  },
  {
    name: "Jordan Patels",
    handle: "@jpateeldesign",
    text: "Adopting this app for our team has streamlined our project management and improved communication.",
  },
  {
    name: "Josh Smith",
    handle: "@jsmith",
    text: "Our team's productivity has skyrocketed since we started using this tool.",
  },
  {
    name: "Taylor Kim",
    handle: "@taylorkimm",
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts.",
  },
  {
    name: "Sam Dawson",
    handle: "@dawsontechtips",
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
  },
  {
    name: "Morgan Lee",
    handle: "@morganleewhiz",
    text: "This app has completely transformed how I manage my projects and deadlines.",
  },
  {
    name: "Riley Smith",
    handle: "@rileysmith1",
    text: "The customizability and integration capabilities of this app are top-notch.",
  },
  {
    name: "Casey Harper",
    handle: "@casey09",
    text: "Its user-friendly interface and robust features support our diverse needs.",
  },
];

const repeatedTestimonials = [...testimonials, ...testimonials];

const TestimonialScroller = () => {
  return (
    <div className="relative h-[700px] bg-white px-4 md:px-20 py-8 overflow-hidden">
      {/* Header */}
      <div className="relative z-30 text-center mb-12">
        <p className="text-xs uppercase tracking-wide text-black">
          Testimonials
        </p>
        <p className="text-black font-bold text-4xl tracking-tighter mt-4 max-w-xl mx-auto">
          What our users say
        </p>
      </div>

      {/* Fade Overlays for better UX */}
      <div className="absolute top-28 left-0 right-0 h-24 bg-gradient-to-b from-white to-white/0 pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-white/0 pointer-events-none z-10" />

      {/* Scrolling Testimonials */}
      <div
        className="relative z-20 h-[500px] overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        }}
      >
        <motion.div
          animate={{ y: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 13,
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-20">
            {repeatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-4 rounded-xl h-44 w-full flex flex-col items-center justify-between text-center"
                style={{
                  marginTop: `${Math.random() * 60}px`,
                  marginBottom: `${Math.random() * 40}px`,
                }}
              >
                <p className="text-sm text-black mb-3 italic">
                  “{testimonial.text}”
                </p>
                <div className="flex items-center space-x-3 mt-auto justify-center">
                  <img
                    src={`https://i.pravatar.cc/40?img=${index}`}
                    alt={testimonial.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="text-sm text-left">
                    <div className="font-semibold text-black">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500">{testimonial.handle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialScroller;
