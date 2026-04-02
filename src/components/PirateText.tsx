import React from 'react';

interface PirateTextProps {
  className?: string;
}

export const PirateText: React.FC<PirateTextProps> = ({ className = '' }) => {
  return (
    <span className={`inline-flex items-center ${className}`}>
      P
      <span className="relative inline-block w-[0.4em] mx-[0.05em]">
        <span className="absolute -inset-y-1 left-0 skew-x-[15deg] text-[#7100FF]">I</span>
      </span>
      RATE
    </span>
  );
};
