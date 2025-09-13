import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Button from "../../components/common/Button";


// A custom hook to handle the counting animation logic
const useCountAnimation = (targetValue, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const start = 0;
    const end = parseInt(targetValue, 10);
    if (isNaN(end)) {
      setCount(targetValue); // Set to string value directly
      return;
    }

    let startTime = null;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const newValue = Math.min(progress / duration, 1) * end;
      setCount(Math.floor(newValue));

      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end); // Ensure the final value is exactly the target
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, targetValue, duration]);

  return { count, ref };
};

// Stat Counter Component
const StatCounter = ({ targetValue }) => {
  const { count, ref } = useCountAnimation(targetValue);
  const isString = isNaN(parseInt(targetValue, 10));

  return (
    <p
      ref={ref}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#24c8ff]"
    >
      {isString ? targetValue : `${count}${targetValue.slice(-1)}`}
    </p>
  );
};

// Stats Component
const HeroStats = () => {
  const stats = [
    { title: "Successful Projects", value: "100+" },
    { title: "Repeated Client", value: "80%" },
    { title: "Years in industry", value: "9+" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-8 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0C1226]/90 border-4 border-[#24c8ff] rounded-xl shadow-lg"
    >
      <div className="grid grid-cols-3 gap-6 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-white opacity-80 mb-1 sm:mb-2 ">
              {stat.title}
            </h3>
            <StatCounter targetValue={stat.value} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Laptop Illustration (Hero Image)
const LaptopIllustration = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 1, scale: 1.25 }}
    transition={{ duration: 2, ease: "easeOut" }}
    viewport={{ once: true }}
    className="w-full h-72 sm:h-80 md:h-96 lg:h-[420px] flex items-center justify-center"
  >
    <img
      src="/tecorengHero.png"
      alt="Laptop Illustration"
      className="w-full h-full object-contain max-w-[500px] sm:max-w-[600px] lg:max-w-[700px]"
    />
  </motion.div>
);

// Hero Section
const Hero = ({ className }) => {
  return (
    <section
      className={`relative pt-10 text-white overflow-hidden min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen flex flex-col justify-between px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {/* Content + Illustration */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 flex-grow z-10 pt-16 sm:pt-20 pb-10 sm:pb-16">
        {/* Left Side (Text + Button) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-start text-left w-full md:w-1/2"
        >
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6"
          >
            Web & Mobile App <br />
            Development <br />
            Company
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Button text="GET STARTED" className="bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold py-2 px-4 rounded-md sm:py-3 sm:px-6 sm:rounded-lg hover:opacity-90 transition shadow-amber-600">Get Started</Button>
          </motion.div>
        </motion.div>

        {/* Right Side (Illustration Overlay - animated) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <LaptopIllustration />
        </motion.div>
      </div>

      {/* Stats Section at Bottom */}
      <div className="w-full flex justify-center pb-6 sm:pb-10 z-20">
        <HeroStats />
      </div>
    </section>
  );
};

export default Hero;