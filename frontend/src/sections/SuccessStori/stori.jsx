import React, { useRef, useState } from 'react';

// Reusable component for a single success story card with hover-to-play video
const SuccessStoryCard = ({ title, description, videoUrl }) => {
  // Create a ref to access the video DOM element directly
  const videoRef = useRef(null);
  // State to track if the mouse is hovering over the card
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Play the video when the mouse enters
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Pause the video when the mouse leaves
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    // The card now uses responsive widths with calc() for perfect spacing
    <div
      className="bg-[#131b32] rounded-xl overflow-hidden shadow-xl w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* The video container now takes up 65% of the card's height */}
      <div className="w-full h-[75%] bg-gray-700">
        <video
          ref={videoRef} // Attach the ref to the video element
          className="w-full h-full object-cover"
          src={videoUrl}
          loop
          muted
          playsInline
        />
      </div>

      {/* The text container takes up the remaining 35% of the card's height */}
      <div className="p-6 flex flex-col flex-grow h-[25%]">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

// Main component that holds all the success stories
const SuccessStories = () => {
  const stories = [
    {
      title: 'Betting Platform',
      description: 'Tecoverga’s Online Betting Platform revolutionizes how enthusiasts engage with betting, offering seamless experiences across sports, esports, casino games, and more.',
      videoUrl: '/BettingPlatform.mp4'
    },
    {
      title: 'Health and Wellness',
      description: 'Excitement fills the air as we proudly unveil our Health and Wellness Platform—a pivotal portal toward maximizing your health journey.',
      videoUrl: '/HelthandWellness.mp4'
    },
    {
      title: 'An E-Commerce',
      description: 'Delve into the world of our custom-designed E-commerce Platform, a true testament to Tecoverga’s meticulous craftsmanship.',
      videoUrl: 'E-Commerce.mp4'
    }
  ];

  return (
    <div className=" text-white py-16 px-4 sm:px-8 md:px-16">
      <h2 className="text-3xl sm:text-4xl font-poppins mb-12">
        Our Success Stories
      </h2>

      {/* The container now uses `items-stretch` to make all children the same height */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch gap-4 md:gap-8">
        {stories.map((story, index) => (
          <SuccessStoryCard
            key={index}
            title={story.title}
            description={story.description}
            videoUrl={story.videoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;