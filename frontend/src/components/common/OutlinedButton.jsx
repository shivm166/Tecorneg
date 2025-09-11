import React from 'react';

const OutlinedButton = ({ text, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex-shrink-0
        py-2 px-4 md:py-2 md:px-5
        rounded-full 
        text-white 
        font-bold 
        text-lg
        whitespace-nowrap
        bg-transparent 
        border 
        border-white
        hover:bg-gradient-to-r 
        hover:from-orange-600 
        hover:to-red-300 
        hover:text-white
        transition-colors 
        duration-300
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default OutlinedButton;