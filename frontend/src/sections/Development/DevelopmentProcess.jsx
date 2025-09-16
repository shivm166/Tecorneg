"use client";
import { motion } from "framer-motion";

export default function DevelopmentProcess() {
  const steps = [
    {
      title: "Research and Analysis",
      description:
        "Idea, Concept research, analyzing client needs, and preparing the roadmap.",
    },
    {
      title: "Design",
      description:
        "System architecture, UI/UX mockups, and creating prototypes for approval.",
    },
    {
      title: "Development",
      description:
        "Building the application features, database coding, and APIs integration.",
    },
    {
      title: "Testing",
      description:
        "Quality assurance, fixing bugs, and ensuring smooth performance.",
    },
    {
      title: "Deployment",
      description: "Launching the app into production environments.",
    },
    {
      title: "Evaluation",
      description:
        "Performance monitoring, collecting user feedback, and implementing fixes.",
    },
    {
      title: "Maintenance",
      description:
        "Regular updates, bug fixes, security patches, and complete support.",
    },
  ];

  return (
    <div
      className="text-white py-12 px-4 sm:px-6 md:px-10 lg:px-16 min-h-screen relative overflow-hidden"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left mb-10 md:mb-16">
        Our Development Process
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="py-6 px-6 md:py-8 md:px-8 rounded-3xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(93.98deg, rgb(38, 66, 107) 3.93%, rgba(0, 23, 56, 0.42) 97.99%)",
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 8px 10px",
              }}
            >
              <div className="flex items-start gap-3 md:gap-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="p-2 md:p-3 rounded-full shadow-lg bg-gradient-to-r from-blue-400 to-blue-600 flex-shrink-0"
                >
                  <img
                    src={
                      step.title === "Design"
                        ? "https://tecoreng.com/_next/static/media/Design.8f887f30.webp"
                        : step.title === "Development"
                          ? "https://tecoreng.com/_next/static/media/Development.8d074c15.webp"
                          : step.title === "Testing"
                            ? "https://tecoreng.com/_next/static/media/TestingN.96b15640.webp"
                            : step.title === "Deployment"
                              ? "https://tecoreng.com/_next/static/media/Deployment.764287e6.webp"
                              : step.title === "Evaluation"
                                ? "https://tecoreng.com/_next/static/media/Evaluation.b6ba0e9d.webp"
                                : step.title === "Maintenance"
                                  ? "https://tecoreng.com/_next/static/media/Maintenance.f5f233ad.webp"
                                  : "https://tecoreng.com/_next/static/media/kickOff.1c1198b2.webp"
                    }
                    alt="Step Icon"
                    className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full"
                  />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
