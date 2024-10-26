"use client";
const GradientArrow: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
    <svg
      width="24"
      height="15"
      viewBox="0 0 24 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
    >
      <path
        d="M2 2L12 12L22 2"
        stroke="url(#paint0_linear_1264_51)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1264_51"
          x1="2"
          y1="2"
          x2="10"
          y2="18"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF4E83" />
          <stop offset="1" stopColor="#FFBB54" />
        </linearGradient>
      </defs>
    </svg>
  );
  
  export default GradientArrow;
  