import React from 'react';
import clsx from 'clsx';

const Button = ({ children, onClick, className, transparentOutline }) => {
  return (
    <button
      className={clsx(
        "border-none p-0 cursor-pointer transition-transform duration-150 ease-in-out active:translate-y-[2px] font-serif",
        // Apply rounded-full to the outer button if the className contains it.
        className && className.includes('rounded-full') ? 'rounded-full' : 'rounded-[15px]',
        // Conditional background and border logic
        !transparentOutline && "bg-[#701d04]",
        transparentOutline && "border-2 border-white",
      )}
      onClick={onClick}
    >
      <span
        className={clsx(
          "flex items-center justify-center py-[9px] px-[23px] text-white transform translate-y-[-4px] h-[58px] text-[29px] leading-[30px] uppercase font-poppins",
          // Apply rounded-full to the inner span if the className contains it.
          className && className.includes('rounded-full') ? 'rounded-full' : 'rounded-[15px]',
          // Conditional gradient and offset logic
          !transparentOutline && "bg-gradient-to-r from-[#f47b55] to-[#ff3d00]",
          transparentOutline && "!translate-y-0",
          className
        )}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;