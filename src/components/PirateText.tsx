import React from 'react';

interface PirateTextProps {
  className?: string;
}

export const PirateText: React.FC<PirateTextProps> = ({ className = '' }) => {
  return (
    <span className={`inline-flex items-center ${className}`} aria-label="Pirate">
      <span aria-hidden="true">
        P<span className="text-[#7100FF] inline-block skew-x-[-15deg] font-black mx-[1px]">I</span>RATE
      </span>
    </span>
  );
};
