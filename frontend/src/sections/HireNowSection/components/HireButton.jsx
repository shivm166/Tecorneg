import React from 'react';

const HireButton = ({ children, ...props }) => {
  return (
    <button 
      className="bg-gradient-to-r from-orange-600 to-red-400 hover:from-orange-400 hover:to-red-600 
                 text-white font-bold py-3 px-8 rounded-lg shadow-lg 
                 transition-all duration-300 ease-in-out text-lg"
      {...props}
    >
      {children}
    </button>
  );
};

export default HireButton;