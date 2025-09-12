// src/sections/WhyChooseUs/WhyChooseUs.jsx
import React from "react";
import { motion } from "framer-motion";
import Button from "../../components/common/Button";

// Define the image URLs
const images = {
  reportingAnalysis: "https://tecoreng.com/_next/static/media/Reporting-Analysis-web.495ca138.webp",
  onTimeDelivery: "https://tecoreng.com/_next/static/media/On-Time-Delivery-web.1dff7f31.webp",
  seamlessCommunication: "https://tecoreng.com/_next/static/media/SeamlessCommunicationWeb.1f75d8f0.webp",
  postLaunchSupport: "https://tecoreng.com/_next/static/media/game-icons-sands-of-time-web.b861aa2e.webp",
};

// Update the features array to use URLs and empty strings
const features = [
  {
    icon: images.reportingAnalysis,
    title: "Reporting & Analysis",
    delay: 0.2,
  },
  {
    icon: images.onTimeDelivery,
    title: "On-Time Delivery",
    delay: 0.3,
  },
  {
    icon: images.seamlessCommunication,
    title: "Seamless Communication",
    delay: 0.4,
  },
  {
    icon: images.postLaunchSupport,
    title: "Post Launch Support",
    delay: 0.5,
  },
  {
    icon: "", // Blank icon for this card
    title: "Agile Methodology",
    delay: 0.6,
  },
  {
    icon: "", // Blank icon for this card
    title: "Certified Experts",
    delay: 0.7,
  },
  {
    icon: "", // Blank icon for this card
    title: "Budget Friendly",
    delay: 0.8,
  },
  {
    icon: "", // Blank icon for this card
    title: "100% Client Expectation",
    delay: 0.9,
  },
];

const WhyChooseUs = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading and Description */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
          className="text-left mb-12"
        >
          <h2 className="text-6xl sm:text-5xl lg:text-6xl font-extrabold mb-6 outlined-text">
            WHY TECORENG FOR YOUR NEXT <br /> PROJECT
          </h2>
          <p className="text-lg sm:text-xl font-light leading-relaxed mb-8 max-w-3xl font-serif">
            Introducing Technical Core Engineers (TCE), the intersection of
            technology and innovation. At TCE, we excel in delivering
            exceptional IT services customized to fulfill your development
            requirements. Harnessing our expertise and enthusiasm, we breathe
            life into your ideas. Backed by a team of seasoned developers with
            extensive knowledge in various programming technologies, our
            dedication is unwavering, ensuring the delivery of outstanding
            results. Our mission is straightforward: decode the language of
            binary and transform it into extraordinary digital solutions that
            empower your business.
          </p>
          <Button text="GET IN TOUCH">GET IN TOUCH</Button>
        </motion.div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: feature.delay,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="bg-[#0C1226] border border-blue-600/40 rounded-xl p-6 flex flex-col items-center space-y-4
                         hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full"
              >
                {/* Conditionally render based on whether the icon is a URL string */}
                {feature.icon.startsWith("http") && (
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-full object-cover rounded-full"
                  />
                )}
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;