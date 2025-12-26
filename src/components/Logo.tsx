interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "w-9 h-9",
    md: "w-10 h-10 sm:w-12 sm:h-12",
    lg: "w-12 h-12"
  };

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeClasses[size]} ${className}`}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="50%" stopColor="hsl(280, 70%, 60%)" />
          <stop offset="100%" stopColor="hsl(25, 95%, 52%)" />
        </linearGradient>
        <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(280, 60%, 55%)" />
        </linearGradient>
        <filter id="logoGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Background circle with gradient border */}
      <circle
        cx="24"
        cy="24"
        r="22"
        fill="url(#logoGradient)"
        className="drop-shadow-md"
      />
      
      {/* Inner white circle */}
      <circle
        cx="24"
        cy="24"
        r="19"
        fill="white"
      />
      
      {/* Sigma symbol - stylized math symbol */}
      <path
        d="M16 14L28 14L28 17L20 17L24 24L20 31L28 31L28 34L16 34L16 31L22.5 24L16 17L16 14Z"
        fill="url(#innerGradient)"
        filter="url(#logoGlow)"
      />
      
      {/* Small decorative plus signs */}
      <circle cx="33" cy="16" r="1.5" fill="hsl(var(--primary))" opacity="0.7" />
      <circle cx="36" cy="20" r="1" fill="hsl(280, 70%, 60%)" opacity="0.5" />
      
      {/* Decorative arc */}
      <path
        d="M34 28C34 28 36 26 36 24C36 22 34 20 34 20"
        stroke="url(#innerGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}
