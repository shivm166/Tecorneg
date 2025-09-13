import React from "react";
import Button from "../../components/common/Button";

const HireNow = () => {
  return (
    <div className="font-sans text-white py-12">
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
            <Button
              text="HIRE NOW"
              className="bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold py-2 rounded-lg hover:opacity-90 transition shadow-amber-600"
            >
              HIRE NOW
            </Button>
          </div>
        </div>

        {/* Right Column: Larger Infinity Image with Animated Ball */}
        <div className="flex-1 flex justify-center items-center relative">
          {/* Infinity Image */}
          <img
            src="/infinite.jpg"
            alt="Infinity"
            className="w-96 h-96 sm:w-[28rem] sm:h-[28rem] lg:w-[36rem] lg:h-[36rem] object-contain"
          />

          {/* SVG Overlay for Ball Animation */}
          <svg
            viewBox="0 0 400 200"
            className="absolute w-96 h-96 sm:w-[28rem] sm:h-[28rem] lg:w-[36rem] lg:h-[36rem] top-0 left-0"
          >
            {/* Transparent Infinity Path */}
            <path
              id="infinityPath"
              d="M 50 100 C 50 50, 150 50, 200 100 S 350 150, 350 100 250 50, 200 100 50 150, 50 100"
              fill="none"
              stroke="transparent"
              strokeWidth="16"
            />

            {/* Ball */}
            <circle r="12" fill="#FFD700" filter="url(#shadow)">
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

            {/* Shadow filter */}
            <filter id="shadow" x="-20%" y="-20%" width="150%" height="150%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.5" />
            </filter>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HireNow;
