import React from "react";
import HireButton from "./components/HireButton";

const HireNow = () => {
  return (
    <div className=" font-sans text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Column: Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            Transfer your <br />
            enterprise with digital <br />
            innovation
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-white opacity-90 max-w-2xl mx-auto lg:mx-0">
            Your success as a market innovator reflects our strides as a unified
            partner. Committed to assisting you in attaining excellence through
            our solutions, we boost a team of adept professionals and dynamic
            facilitators. Our steadfast commitment to a collaborative strategy,
            coupled with agile methodologies, propels business expansion. Rely
            on our strategic insights and development processes, and we will
            fuel your concepts to manifest as groundbreaking disruptions.
          </p>

          <div>
            <HireButton>HIRE NOW</HireButton>
          </div>
        </div>

        {/* Right Column: Infinity Animation with 3D look */}
        <div className="flex-1 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 200"
            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
          >
            {/* Infinity Path */}
            <path
              id="infinityPath"
              d="M 50 100 C 50 50, 150 50, 200 100 S 350 150, 350 100 250 50, 200 100 50 150, 50 100"
              fill="none"
              stroke="url(#metalGradient)"
              strokeWidth="16"
              strokeLinecap="round"
              filter="url(#shadow)"
            />

            {/* Gradient for metallic 3D effect */}
            <defs>
              <linearGradient id="metalGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="50%" stopColor="#d1d9ff" />
                <stop offset="30%" stopColor="#6ec3f4" />
                <stop offset="70%" stopColor="#9b5de5" />
                <stop offset="100%" stopColor="#ff7eb3" />
              </linearGradient>

              {/* Shadow for depth */}
              <filter id="shadow" x="-20%" y="-20%" width="150%" height="150%">
                <feDropShadow
                  dx="0"
                  dy="2"
                  stdDeviation="4"
                  floodColor="#000"
                  floodOpacity="0.5"
                />
              </filter>

              {/* Glossy gradient for sphere */}
              <radialGradient id="sphereGradient" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                <stop offset="40%" stopColor="#6ec3f4" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#1e3a8a" stopOpacity="1" />
              </radialGradient>
            </defs>

            {/* Moving Ball with 3D glossy look */}
            <circle r="12" fill="url(#sphereGradient)" filter="url(#shadow)">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                rotate="auto"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
              >
                <mpath href="#infinityPath" />
              </animateMotion>
            </circle>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HireNow;