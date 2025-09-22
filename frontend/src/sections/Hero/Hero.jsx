import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Button from "../../components/common/Button";

// --- Count Animation Hook ---
const useCountAnimation = (targetValue, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const start = 0;
    const end = parseInt(targetValue, 10);
    if (isNaN(end)) {
      setCount(targetValue);
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
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, targetValue, duration]);

  return { count, ref };
};

// --- Stat Counter ---
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

// --- Hero Stats ---
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
      className="py-8 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0C1226]/90 border-4 border-[#24c8ff] rounded-xl shadow-lg overflow-hidden"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-white opacity-80 mb-1 sm:mb-2">
              {stat.title}
            </h3>
            <StatCounter targetValue={stat.value} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// --- Laptop Illustration (REVISED) ---
const LaptopIllustration = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 2, ease: "easeOut" }}
    viewport={{ once: true }}
    // Removed fixed heights to allow the container to be flexible
    className="w-full flex items-center justify-center overflow-hidden"
  >
    <img
      src="/tecorengHero.png"
      alt="Laptop Illustration"
      // KEY CHANGE: h-auto makes the height scale proportionally with the width
      className="w-full h-auto object-contain max-w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px]"
    />
  </motion.div>
);

// --- Hero Section (REVISED) ---
const Hero = ({ className }) => {
  return (
    <section
      className={`relative pt-10 text-white overflow-hidden flex flex-col justify-center px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {/* KEY CHANGE:
        - Removed `min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen`
        - This prevents the section from having a massive, fixed height that doesn't
          scale with extreme browser minimization. The height will now be determined by the content.
        - Changed `justify-between` to `justify-center` to better vertically align content.
      */}

      {/* Content + Illustration */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-grow z-10 pt-16 sm:pt-20 pb-10 sm:pb-16 ">
        {/*
          KEY CHANGE:
          - Changed `justify-between` to `justify-center` to keep content centered
            on both mobile and desktop views, which handles the 25% zoom more gracefully.
        */}

        {/* Left Side (Text + Button) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-start text-left w-full md:w-auto mb-10 md:mb-0"
        >
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-extrabold leading-tight mb-4 sm:mb-6"
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
            <Button
              text="GET STARTED"
              className="bg-gradient-to-r from-orange-400 to-red-500 text-white font-poppins py-2 px-4 rounded-md sm:py-3 sm:px-6 sm:rounded-lg hover:opacity-90 transition shadow-amber-600"
            >GET STARTED</Button>
          </motion.div>
        </motion.div>

        {/* Right Side (Illustration) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-auto flex justify-center"
        >
          <LaptopIllustration />
        </motion.div>
      </div>

      {/* Stats Section at Bottom */}
      <div className="w-full flex justify-center pb-6 sm:pb-10 z-20 ">
        <HeroStats />
      </div>
    </section>
  );
};

export default Hero;