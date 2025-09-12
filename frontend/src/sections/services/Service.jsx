import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// SVG assets to replace react-icons/fa
const ReactIcon = ({ size = 20, className = "" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size} fill="currentColor">
        <path d="M472.1 278.4L372.2 467.5c-4.5 7.8-11.8 12.5-19.9 12.5H160.7c-8.1 0-15.4-4.7-19.9-12.5L50.2 278.4c-4.5-7.8-4.5-17.2 0-25.1L140.8 91.2c4.5-7.8 11.8-12.5 19.9-12.5h191.6c8.1 0 15.4 4.7 19.9 12.5l90.6 162.1c4.5 7.8 4.5 17.2 0 25.1zM256 312c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z" />
    </svg>
);
const NodeJsIcon = ({ size = 20, className = "" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={size} height={size} fill="currentColor">
        <path d="M0 256c0 123.7 100.3 224 224 224s224-100.3 224-224S347.7 32 224 32 0 132.3 0 256zm192.5 106.3c15.8 4.7 31.8 6.4 48.7 6.4 46.1 0 76.5-13.6 100.9-40.4 20.3-22.9 30.5-54.1 30.5-93.7 0-48.4-17.7-88.8-53.1-120.5-35.4-31.7-85.1-47.5-148.9-47.5-23.7 0-47.9 2.5-72.6 7.6l-50.5 8.9v-7.6h-76.3v178.6c-4.4-6.4-8.8-13.3-13.3-20.9-25.3-43.2-38-95.2-38-155.8v-72.3H89.4v303.8h78.8V214.5l42.3 7.6c36.4 6.5 68.2 18.2 95.3 35.1 27.2 16.9 40.8 38.6 40.8 65.4 0 23.3-8.8 39.8-26.4 49.3-17.6 9.5-40.1 14.2-67.6 14.2-18.7 0-37.4-2.1-56.1-6.3-28.5-6.4-42.8-16.7-42.8-31 0-11.4 5.3-19.1 16-23.3 10.7-4.2 24.3-6.3 40.8-6.3 37.9 0 56.9 14.6 56.9 43.8 0 16.5-6.8 28.3-20.5 35.5-13.7 7.2-31.3 10.8-52.9 10.8-16.1 0-30.8-1.5-44.1-4.5z" />
    </svg>
);
const FigmaIcon = ({ size = 20, className = "" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={size} height={size} fill="currentColor">
        <path d="M225.4 32C101.4 32 0 133.4 0 257.4s101.4 225.4 225.4 225.4c48.8 0 94.6-15.5 133.2-44.5l-6.4-6.4c-28.9 21.2-64.8 34.1-103.8 34.1-90.1 0-163.4-73.3-163.4-163.4S135.3 94 225.4 94c39.2 0 75.3 13.5 104.2 35.1l7.3-7.3C320.1 84.4 275.6 66 225.4 66zM277.6 166.4c-32 0-58.4 26.4-58.4 58.4s26.4 58.4 58.4 58.4 58.4-26.4 58.4-58.4-26.4-58.4-58.4-58.4z" />
    </svg>
);
const MobileAltIcon = ({ size = 20, className = "" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={size} height={size} fill="currentColor">
        <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-88 472c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16z" />
    </svg>
);
const CheckCircleIcon = ({ size = 20, className = "" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size} fill="currentColor">
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-20 376c-4.4 0-8.8-1.5-12.4-4.5L108 273.6c-7.4-6-8.2-17.2-2.2-24.6l24-29.3c6-7.4 17.2-8.2 24.6-2.2l84.4 68.6 150.3-210.6c4.9-6.9 14.1-8.5 21.6-3.8l29.4 18.7c7.4 4.7 9.8 14.6 5.1 22.4l-180.2 250c-2.3 3.3-5.8 5.6-9.8 6.7-4.1 1.1-8.4.8-12.4 0z" />
    </svg>
);
const PaintBrushIcon = ({ size = 20, className = "" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size} fill="currentColor">
        <path d="M470.8 458.2L352.7 340.2c4.4-1.2 8.7-2.6 13-4.2l70.6-70.6c2.5-2.5 2.5-6.5 0-9L412 216c-2.5-2.5-6.5-2.5-9 0l-70.6 70.6c-1.6 4.3-3 8.6-4.2 13L22.6 498.4c-4.5 4.5-4.5 11.8 0 16.3l25.8 25.8c4.5 4.5 11.8 4.5 16.3 0L470.8 458.2zM212.1 63.8c-1.2-4.4-.7-9 .9-12.5l70.6-70.6c2.5-2.5 6.5-2.5 9 0l46.7 46.7c2.5 2.5 2.5 6.5 0 9l-70.6 70.6c-3.6 1.6-8.1 2.1-12.5.9-4.4-1.2-8.3-3.6-11.2-6.5L212.1 63.8z" />
    </svg>
);
const BullhornIcon = ({ size = 20, className = "" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width={size} height={size} fill="currentColor">
        <path d="M633 138.2L423.8 24.3c-15.5-8.5-34.1-8.5-49.6 0L145.4 138.2c-15.5 8.5-24.6 24.8-24.6 42.4v132.8c0 17.6 9.1 33.9 24.6 42.4l228.8 113.9c15.5 8.5 34.1 8.5 49.6 0l209.2-104c15.5-8.5 24.6-24.8 24.6-42.4V180.6c0-17.6-9.1-33.9-24.6-42.4zM54.4 208.5L0 208.5v95.2h54.4c8.8 0 16-7.2 16-16v-63.2c0-8.8-7.2-16-16-16z" />
    </svg>
);

const services = [
    {
        title: "Web Development",
        details: "We build responsive and scalable websites using modern frameworks.",
        mainIcon: ReactIcon,
        mainColor: "bg-sky-500 text-white",
        tech: [
            { icon: ReactIcon, name: "React", color: "bg-sky-500 text-white" },
            { icon: NodeJsIcon, name: "Node.js", color: "bg-green-600 text-white" },
            { icon: FigmaIcon, name: "Figma", color: "bg-pink-500 text-white" },
            { icon: CheckCircleIcon, name: "QA", color: "bg-green-400 text-white" },
        ],
    },
    {
        title: "Mobile App Development",
        details: "Cross-platform mobile apps with seamless UI & performance.",
        mainIcon: MobileAltIcon,
        mainColor: "bg-purple-500 text-white",
        tech: [
            { icon: MobileAltIcon, name: "Mobile", color: "bg-purple-500 text-white" },
            { icon: ReactIcon, name: "React", color: "bg-sky-500 text-white" },
            { icon: NodeJsIcon, name: "Node.js", color: "bg-green-600 text-white" },
            { icon: FigmaIcon, name: "Figma", color: "bg-orange-500 text-white" },
        ],
    },
    {
        title: "Graphics Design",
        details: "Creative designs that make your brand stand out.",
        mainIcon: PaintBrushIcon,
        mainColor: "bg-pink-500 text-white",
        tech: [
            { icon: PaintBrushIcon, name: "Design", color: "bg-pink-500 text-white" },
            { icon: FigmaIcon, name: "Figma", color: "bg-red-500 text-white" },
            { icon: ReactIcon, name: "React", color: "bg-sky-500 text-white" },
            { icon: BullhornIcon, name: "Marketing", color: "bg-yellow-500 text-black" },
        ],
    },
    {
        title: "UI/UX Design",
        details: "User-centric interfaces with engaging user experience.",
        mainIcon: FigmaIcon,
        mainColor: "bg-indigo-500 text-white",
        tech: [
            { icon: FigmaIcon, name: "Figma", color: "bg-pink-600 text-white" },
            { icon: ReactIcon, name: "React", color: "bg-sky-500 text-white" },
            { icon: PaintBrushIcon, name: "Design", color: "bg-indigo-500 text-white" },
            { icon: CheckCircleIcon, name: "QA", color: "bg-green-500 text-white" },
        ],
    },
    {
        title: "Quality Assurance (QA)",
        details: "End-to-end testing for flawless product delivery.",
        mainIcon: CheckCircleIcon,
        mainColor: "bg-green-500 text-white",
        tech: [
            { icon: CheckCircleIcon, name: "QA", color: "bg-green-500 text-white" },
            { icon: NodeJsIcon, name: "Node.js", color: "bg-green-700 text-white" },
            { icon: ReactIcon, name: "React", color: "bg-sky-500 text-white" },
            { icon: BullhornIcon, name: "Marketing", color: "bg-yellow-500 text-black" },
        ],
    },
    {
        title: "Digital Marketing",
        details: "Boost your online presence with targeted campaigns.",
        mainIcon: BullhornIcon,
        mainColor: "bg-yellow-500 text-black",
        tech: [
            { icon: BullhornIcon, name: "Marketing", color: "bg-yellow-500 text-black" },
            { icon: FigmaIcon, name: "Figma", color: "bg-pink-500 text-white" },
            { icon: ReactIcon, name: "React", color: "bg-sky-500 text-white" },
            { icon: PaintBrushIcon, name: "Design", color: "bg-purple-500 text-white" },
        ],
    },
];

const Service = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <div className=" py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-white font-sans">
            <div className="w-full max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-left w-full">
                    Services We Offer
                </h2>
                <p className="text-white font-light leading-relaxed mb-4 tracking-tight text-left w-full max-w-2xl">
                    We offer a full range of web app development services that make things better for enterprises and companies we work with. Our team of dedicated mobile app developers fulfils your diverse business requirements through a number of services. We specialise in the following services:
                </p>
            </div>
            <div className="w-full max-w-7xl mx-auto space-y-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                        className={`w-full relative border border-gray-600 rounded-xl p-4 cursor-pointer transition-all duration-300
                            md:hover:bg-gradient-to-r md:hover:from-blue-700 md:hover:to-slate-800
                            md:hover:border-blue-500 md:hover:shadow-md md:hover:shadow-blue-500/20
                            ${hovered === index ? "md:py-10" : "md:py-5"} py-5`}
                    >
                        {/* Top Row: Icon + Title */}
                        <div className="flex items-center gap-3">
                            <div
                                className={`w-9 h-9 flex items-center justify-center rounded-full ${service.mainColor}`}
                            >
                                <service.mainIcon size={18} />
                            </div>
                            <span className="ml-1 text-lg font-semibold tracking-wide">
                                {service.title}
                            </span>
                        </div>

                        {/* Hover Content: Details + Tech Icons */}
                        <AnimatePresence>
                            {hovered === index && (
                                <motion.div
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    className="mt-6 hidden md:flex flex-col md:flex-row md:items-center justify-between gap-6 w-full"
                                >
                                    <p className="text-gray-300 w-full md:w-1/2 mb-4 md:mb-0">{service.details}</p>
                                    <div className="flex flex-wrap gap-4 justify-end md:w-1/2">
                                        {service.tech.map(({ icon: Icon, color, name }, i) => (
                                            <div key={i} className="flex flex-col items-center gap-2">
                                                <div
                                                    className={`w-12 h-12 flex items-center justify-center rounded-full ${color}`}
                                                >
                                                    <Icon size={20} />
                                                </div>
                                                <span className="text-gray-200 text-xs">{name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;