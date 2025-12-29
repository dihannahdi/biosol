import React from "react";

interface BioLogoProps {
  className?: string;
  size?: number;
}

export function BioLogo({ className = "", size = 48 }: BioLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background rounded square */}
      <rect width="48" height="48" rx="12" fill="#10B981" />
      
      {/* DNA Helix + Plant combined icon */}
      <g transform="translate(12, 10)">
        {/* Left DNA strand */}
        <path
          d="M 4 2 Q 6 8, 4 14 Q 2 20, 4 26"
          stroke="#064E3B"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Right DNA strand */}
        <path
          d="M 20 2 Q 18 8, 20 14 Q 22 20, 20 26"
          stroke="#064E3B"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* DNA connections (rungs) */}
        <line x1="6" y1="5" x2="18" y2="5" stroke="#064E3B" strokeWidth="1.5" opacity="0.8" />
        <line x1="5" y1="10" x2="19" y2="10" stroke="#064E3B" strokeWidth="1.5" opacity="0.8" />
        <line x1="6" y1="15" x2="18" y2="15" stroke="#064E3B" strokeWidth="1.5" opacity="0.8" />
        <line x1="5" y1="20" x2="19" y2="20" stroke="#064E3B" strokeWidth="1.5" opacity="0.8" />
        <line x1="6" y1="25" x2="18" y2="25" stroke="#064E3B" strokeWidth="1.5" opacity="0.8" />
        
        {/* Plant leaves - left */}
        <path
          d="M 8 10 Q 2 12, 1 16 Q 0 18, 4 18"
          fill="#064E3B"
          opacity="0.9"
        />
        
        {/* Plant leaves - right */}
        <path
          d="M 16 10 Q 22 12, 23 16 Q 24 18, 20 18"
          fill="#064E3B"
          opacity="0.9"
        />
        
        {/* Small DNA nodes */}
        <circle cx="6" cy="5" r="1.5" fill="#064E3B" />
        <circle cx="18" cy="5" r="1.5" fill="#064E3B" />
        <circle cx="5" cy="10" r="1.5" fill="#064E3B" />
        <circle cx="19" cy="10" r="1.5" fill="#064E3B" />
        <circle cx="6" cy="15" r="1.5" fill="#064E3B" />
        <circle cx="18" cy="15" r="1.5" fill="#064E3B" />
        <circle cx="5" cy="20" r="1.5" fill="#064E3B" />
        <circle cx="19" cy="20" r="1.5" fill="#064E3B" />
      </g>
    </svg>
  );
}

export default BioLogo;
