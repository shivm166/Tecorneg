import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ---- ICONS ----
const MobileIcon = ({ className = "" }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    fill="currentColor"
  >
    <path d="M304 0H80C35.8 0 0 35.8 0 80v352c0 44.2 35.8 80 80 80h224c44.2 0 80-35.8 80-80V80c0-44.2-35.8-80-80-80zM192 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zM336 400H48V80c0-17.6 14.4-32 32-32h224c17.6 0 32 14.4 32 32v320z" />
  </svg>
);

const WebIcon = ({ className = "" }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
    fill="currentColor"
  >
    <path d="M640 464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V160h640v304zM552 0H88C39.4 0 0 39.4 0 88v56h640V88c0-48.6-39.4-88-88-88zM448 80c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z" />
  </svg>
);

const DesignIcon = ({ className = "" }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
  >
    <path d="M362.7 19.3c-25-25-65.5-25-90.5 0L54.6 236.9c-12.5 12.5-19.5 29.5-19.5 47.3V448c0 35.3 28.7 64 64 64H228c17.8 0 34.8-7 47.3-19.5L492.7 240c25-25 25-65.5 0-90.5L362.7 19.3zM96 464c-8.8 0-16-7.2-16-16V320h80v144H96zm128 0V320h80v128c0 8.8-7.2 16-16 16h-64z" />
  </svg>
);

const MarketingIcon = ({ className = "" }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    fill="currentColor"
  >
    <path d="M576 80v352c0 26.5-21.5 48-48 48H96c-26.5 0-48-21.5-48-48V80C48 53.5 69.5 32 96 32h432c26.5 0 48 21.5 48 48zm-64 0H128v352h384V80zm-192 64c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64z" />
  </svg>
);

const IOTIcon = ({ className = "" }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    fill="currentColor"
  >
    <path d="M576 432c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h512c17.7 0 32 14.3 32 32zM528 224a144 144 0 100 288 144 144 0 100-288zM448 368a48 48 0 1196 0 48 48 0 11-96 0zM368 0c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-4.4-3.6-8-8-8zM240 0c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-4.4-3.6-8-8-8zM112 0c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-4.4-3.6-8-8-8zM240 160c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8s8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM112 160c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8s8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM368 160c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8s8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM48 200h480c4.4 0 8-3.6 8-8s-3.6-8-8-8H48c-4.4 0-8 3.6-8 8s3.6 8 8 8z" />
  </svg>
);

// ---- Data ----
const specializations = [
  {
    title: "Web Development",
    icon: WebIcon,
    description:
      "We build high-performance, user-friendly websites and web applications. Our solutions are designed to be responsive, secure, and scalable.",
  },
  {
    title: "UI/UX & Graphics Design",
    icon: DesignIcon,
    description:
      "We create intuitive interfaces and impactful graphics that captivate your audience and drive engagement.",
  },
  {
    title: "Digital Marketing",
    icon: MarketingIcon,
    description:
      " From SEO and content creation to social media campaigns and PPC, we help you reach your audience, generate leads, and grow your brand.",
  },
  {
    title: "Internet of Things",
    icon: IOTIcon,
    description:
      " Our expertise in smart devices, sensors, and data analytics helps businesses optimize operations, enhance security, and create new opportunities.",
  },
  {
    title: "Mobile App Development",
    icon: MobileIcon,
    description:
      " Our development process focuses on performance, security, and a stunning user experience to bring your ideas to life.",
  },
];

// ---- Component ----
const Specialization = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const prevIndex = (index - 1 + specializations.length) % specializations.length;
  const nextIndex = (index + 1) % specializations.length;

  const goPrev = () => {
    setIndex(prevIndex);
    setDirection(-1);
  };
  const goNext = () => {
    setIndex(nextIndex);
    setDirection(1);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      zIndex: 0,
    }),
  };

  const Card = ({ item, active, onClick }) => {
    const Icon = item.icon;
    return (
      <motion.div
        onClick={onClick}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        custom={direction}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`cursor-pointer rounded-2xl shadow-lg border text-center p-6 sm:p-8
          ${active
            ? "bg-white text-black border-white h-96 w-96 sm:w-96 md:w-96 lg:w-[28rem] sm:h-96 md:h-96 lg:h-[28rem]" // Center card bigger
            : "bg-white text-black border-white/20 w-72 sm:w-80 md:w-80 lg:w-80"} // Prev/Next cards
        `}
      >
        <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 text-black">
          <Icon className="w-full h-full" />
        </div>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3">{item.title}</h3>
        <p className={`text-sm sm:text-base ${active ? "font-bold text-black" : "text-gray-700"}`}>
          {item.description}
        </p>
      </motion.div>
    );
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-black">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto mb-8 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif font-extrabold mb-4 text-white">
            Our Specialization
          </h2>
          <p className="text-sm sm:text-base lg:text-lg font-light max-w-3xl text-white mx-auto sm:mx-0">
            We offer a full range of web app development services that make things
            better for enterprises and companies we work with. Our team of
            dedicated mobile app developers fulfils your diverse business
            requirements through a number of services. We specialize in
            the following services:
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="hidden lg:block">
            <Card item={specializations[prevIndex]} active={false} onClick={goPrev} />
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={index} custom={direction}>
              <Card item={specializations[index]} active={true} />
            </motion.div>
          </AnimatePresence>
          <div className="hidden lg:block">
            <Card item={specializations[nextIndex]} active={false} onClick={goNext} />
          </div>
        </div>
        {/* Mobile and Tablet navigation buttons */}
        <div className="mt-8 flex justify-center gap-4 lg:hidden">
          <button
            onClick={goPrev}
            className="bg-gray-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center"
          >
            &lt;
          </button>
          <button
            onClick={goNext}
            className="bg-gray-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Specialization;
