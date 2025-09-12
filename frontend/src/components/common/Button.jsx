import React from 'react';

const Button = ({ text = 'Hire Now', onClick, className = '', variant = 'filled' }) => {
  const baseClasses = `
    py-3 px-8
    rounded-full
    font-bold
    font-serif
    text-lg
    whitespace-nowrap
    transition transform duration-200 ease-in-out
    active:translate-y-0.5
    active:shadow-inner
  `;

  const variantClasses =
    variant === 'filled'
      ? `text-white bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500
         hover:from-orange-600 hover:to-orange-500
         
         shadow-[0_6px_12px_rgba(0,0,0,0.25)]`
      : `bg-transparent text-orange-500 border border-orange-500
         hover:bg-orange-500 hover:text-white`;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
