import React, { useRef, useEffect, useState } from 'react';
import { FaPlay } from "react-icons/fa";

const Preview = () => {
  const videoRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  // Use the Intersection Observer API to play the video when it appears
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed) {
            videoRef.current.play();
            setHasPlayed(true);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is visible
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [hasPlayed]);

  // Function to handle the fullscreen request
  const handleFullscreen = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <>
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent" />

      {/* Preview Section */}
      <div className="w-full py-12">
        <div className="relative mx-auto max-w-7xl aspect-video rounded-3xl overflow-hidden bg-transparent">
          
          {/* Central Video Player */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] sm:w-[90%] sm:h-[90%] rounded-2xl shadow-2xl z-30 overflow-hidden">
            <video
              ref={videoRef}
              src="/preview.mp4"
              width="100%"
              height="100%"
              className="w-full h-full object-cover"
              muted
              playsInline
            />
          </div>

          {/* Fullscreen Button - now responsive */}
          <button 
            onClick={handleFullscreen}
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#222b4d] rounded-full flex items-center justify-center cursor-pointer transform hover:scale-110 transition-transform duration-300 z-40"
            aria-label="Toggle full screen"
          >
            <FaPlay className="text-white w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Preview;