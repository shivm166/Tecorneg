"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaCloudUploadAlt,
  FaChartLine,
  FaTools,
} from "react-icons/fa";

export default function DevelopmentProcess() {
  const steps = [
    {
      title: "Research and Analysis",
      description:
        "Idea, Concept research, analyzing client needs, and preparing the roadmap.",
      icon: <FaSearch className="text-2xl md:text-3xl text-blue-400" />,
    },
    {
      title: "Design",
      description:
        "System architecture, UI/UX mockups, and creating prototypes for approval.",
      icon: <FaPencilRuler className="text-2xl md:text-3xl text-pink-400" />,
    },
    {
      title: "Development",
      description:
        "Building the application features, database coding, and APIs integration.",
      icon: <FaCode className="text-2xl md:text-3xl text-green-400" />,
    },
    {
      title: "Testing",
      description:
        "Quality assurance, fixing bugs, and ensuring smooth performance.",
      icon: <FaBug className="text-2xl md:text-3xl text-yellow-400" />,
    },
    {
      title: "Deployment",
      description: "Launching the app into production environments.",
      icon: <FaCloudUploadAlt className="text-2xl md:text-3xl text-purple-400" />,
    },
    {
      title: "Evaluation",
      description:
        "Performance monitoring, collecting user feedback, and implementing fixes.",
      icon: <FaChartLine className="text-2xl md:text-3xl text-indigo-400" />,
    },
    {
      title: "Maintenance",
      description:
        "Regular updates, bug fixes, security patches, and complete support.",
      icon: <FaTools className="text-2xl md:text-3xl text-red-400" />,
    },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Ball movement
  const y = useTransform(scrollYProgress, [0, 1], [0, steps.length * 200]);

  const x = useTransform(
    scrollYProgress,
    [0, 1 / 6, 2 / 6, 3 / 6, 4 / 6, 5 / 6, 1],
    [-100, 100, -100, 100, -100, 100, -100]
  );

  return (
    <div
      ref={containerRef}
      className="text-white bg-secondary py-12 px-4 sm:px-6 md:px-10 lg:px-16 min-h-screen relative"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">
        Our Development Process
      </h2>

      {/* 3D Ball */}
      <motion.div
        style={{ y, x }}
        className="absolute top-20 left-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full 
                   bg-gradient-to-br from-pink-400 via-red-500 to-purple-600 
                   shadow-[0_8px_20px_rgba(255,0,150,0.6)] z-20"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-t from-transparent to-white/30"></div>
      </motion.div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto space-y-10 md:space-y-16 relative">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`flex items-center ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            } justify-center`} // 👉 Mobile always center
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <div className="relative w-full sm:w-4/5 md:max-w-md">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-[#1c2a4a] py-6 px-6 md:py-8 md:px-8 shadow-md hover:shadow-xl relative overflow-hidden rounded-xl"
                style={{
                  clipPath:
                    index % 2 === 0
                      ? "polygon(0 10%, 100% 0, 100% 100%, 0 100%)"
                      : "polygon(0 0, 100% 10%, 100% 100%, 0 100%)",
                }}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-[#0f1b33] p-2 md:p-3 rounded-full shadow-lg"
                  >
                    {step.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
