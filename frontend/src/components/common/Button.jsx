import React from 'react';

const Button = ({ text = 'Get a quote', onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        py-2.5 px-6 
        rounded-full
        text-white 
        font-bold 
        text-lg
        whitespace-nowrap
        bg-gradient-to-r 
        from-orange-300 
        to-red-400
        hover:from-orange-600 
        hover:to-red-300
        active:translate-y-0.5 
        active:shadow-inner
        shadow-[0_4px_6px_rgba(0,0,0,0.1),_0_2px_4px_rgba(0,0,0,0.06)]
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default Button;