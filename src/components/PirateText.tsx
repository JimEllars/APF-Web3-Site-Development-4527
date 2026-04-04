import React from 'react';

interface PirateTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
}

export const PirateText: React.FC<PirateTextProps> = ({ className = '', ...props }) => {
  return (
    <span className={`inline-flex items-center ${className}`} aria-label="Pirate" {...props}>
      <span aria-hidden="true">
        P<span className="text-[#7100FF] inline-block skew-x-[15deg] scale-x-110 font-black mx-[2px]">I</span>RATE
      </span>
    </span>
  );
};
