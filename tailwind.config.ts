import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: '#999999',
        black: '#000000',
        white: '#FFFFFF',
        WhisperWhite: '#FFFFFF26',
        jetBlack: '#141414',
        lightGray: '#CCCCCC',
        darkGray: '#666666',
        orange: '#FF6D51'
      },
      backgroundImage: {
        studioGradient: 'linear-gradient(96.34deg, #FF4E83 0.62%, #FFBB54 97.92%)',
        roundedTextGradient: 'linear-gradient(135deg, #FF4E83 0%, #FFBB54 100%)',
        quickServeGradient: 'linear-gradient(135deg, #FF4E83 0%, #FFBB54 100%)',
        stepsGradient: 'linear-gradient(289.56deg, #FF7E7E 1.48%, #F05F82 100%)',
        lineBreakerGradient: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 53.75%, rgba(255, 255, 255, 0) 100%)',     },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
export default config;