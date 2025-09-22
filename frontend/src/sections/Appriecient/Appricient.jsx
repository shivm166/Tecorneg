import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

// Sample data for your testimonial cards
const testimonials = [
  {
    name: 'Juan S Ortiz Salazar',
    company: 'Acme Corp',
    text: 'They were honest about their abilities from the beginning, have fantastic communication skills, and are overall a dream to work with! Myself and my team felt beyond confident of their abilities and that they were doing the work on a week to week basis just as they stated they would. I will definitely be looking to hiring Teceoreng first before considering anyone else on Upwork!!',
  },
  {
    name: 'Tim Loenders',
    company: 'BPOS LOENDERS GCV',
    text: 'Paresh worked out the infrastructure topology and did a fine job on that. He gave me insights about how to tackle setup that I didn’t have which saved the project time and money.',
  },
  {
    name: 'Denis Cartin',
    company: 'CTO, SaSFaa',
    text: 'They have good timing and quality in task solving. Their project management was outstanding. Always delivered on time and quickly replied to our needs and demands. The Communication was effective and running smoothly, with constant updates on the project’s progress. They also shared significant insights and suggestions for developing the project.',
  },
  {
    name: 'Sarah J. Thompson',
    company: 'Innovate Solutions',
    text: 'The team was incredibly professional and responsive. They took our vague ideas and transformed them into a beautiful and functional product. We are very happy with the final result and the support we received throughout the entire process.',
  },
  {
    name: 'Mike Chen',
    company: 'Global Ventures Inc.',
    text: 'Working with this team was a fantastic experience. They delivered ahead of schedule and the quality of their work exceeded our expectations. Their technical expertise is top-notch, and they are excellent communicators.',
  },
];

// Custom hook for screen size (can be in a separate file or here)
const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return screenSize;
};

const Appricient = () => {
  const controls = useAnimation();
  const sliderRef = useRef(null);
  const { width } = useScreenSize();
  const isMobile = width < 768;

  // The state now tracks the current card index on all screen sizes
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.card');
      if (!card) return;

      const cardWidth = card.offsetWidth;
      const cardMargin = 16;
      const moveDistance = cardWidth + cardMargin * 2;

      controls.start({
        x: -currentIndex * moveDistance,
        transition: {
          ease: 'easeInOut',
          duration: 0.5,
        },
      });
    }
  }, [currentIndex, controls, width]);

  return (
    <div className="text-white py-12 px-6">
      <h2 className="text-4xl font-bold mb-8 font-poppins text-gray-200 text-center">Appreciation from Clients</h2>
      <div className="relative overflow-hidden w-full max-w-5xl mx-auto">
        <motion.div
          ref={sliderRef}
          className="flex whitespace-nowrap space-x-8 md:space-x-4 lg:space-x-8"
          animate={controls}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`
                card flex-shrink-0 w-full sm:w-[calc(100%/2-2rem)] lg:w-[calc(100%/3-2rem)]
                h-[350px] p-6 rounded-[25px]
                custom-card-bg custom-card-shadow
                border border-opacity-30
                relative group transition-transform duration-300 transform
                hover:scale-[1.03] hover:shadow-[0_0_10px_#66fcf1]
              `}
            >
              <div className="absolute inset-0 rounded-[25px] border border-transparent transition-all
                group-hover:border-white group-hover:border-opacity-10
                group-hover:shadow-[inset_0_0_15px_#66fcf1]
                group-hover:bg-opacity-5"></div>
              <h3 className="text-lg font-extrabold text-white mb-1">{testimonial.name}</h3>
              <p className="text-white text-sm font-bold mb-4">{testimonial.company}</p>
              <p className="text-white whitespace-normal text-sm">{testimonial.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer
              ${currentIndex === index ? 'bg-[#66fcf1]' : 'bg-gray-600'}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Appricient;