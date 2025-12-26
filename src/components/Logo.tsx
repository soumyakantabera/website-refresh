interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "w-9 h-9",
    md: "w-10 h-10 sm:w-12 sm:h-12",
    lg: "w-14 h-14"
  };

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeClasses[size]} ${className} transition-all duration-300 hover:scale-105 cursor-pointer`}
    >
      <defs>
        <linearGradient id="modernGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(280, 65%, 55%)" />
        </linearGradient>
      </defs>
      
      {/* Clean rounded square background */}
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx="12"
        fill="url(#modernGradient)"
      />
      
      {/* Elegant S letter - stylized for Sucheta */}
      <path
        d="M24 10C18.5 10 14 13.5 14 18C14 22 17 24 21 25.5C25.5 27.2 28 28.5 28 31C28 33.5 25.5 35 23 35C19.5 35 17 33 16 30L12 32C13.5 36.5 18 39 23 39C28.5 39 34 35.5 34 30C34 25.5 30.5 23.5 26 21.5C22 20 20 18.5 20 17C20 15 22 13 24.5 13C27 13 29 14.5 30 17L34 15C32.5 11.5 28.5 10 24 10Z"
        fill="white"
        opacity="0.95"
      />
      
      {/* Subtle accent dot */}
      <circle
        cx="37"
        cy="11"
        r="3"
        fill="white"
        opacity="0.6"
      />
    </svg>
  );
}
