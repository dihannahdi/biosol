import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Biotech-inspired earth & nature palette
        forest: {
          50: "#f0fdf0",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        soil: {
          50: "#faf8f5",
          100: "#f3efe8",
          200: "#e6ddd0",
          300: "#d4c5af",
          400: "#bea78a",
          500: "#a88e6d",
          600: "#9b7d5e",
          700: "#81664f",
          800: "#6a5444",
          900: "#574639",
          950: "#2e241d",
        },
        moss: {
          50: "#f4f9f4",
          100: "#e5f2e6",
          200: "#cde5cf",
          300: "#a6d0aa",
          400: "#78b47d",
          500: "#569a5c",
          600: "#437c48",
          700: "#38633c",
          800: "#305033",
          900: "#29422c",
          950: "#132415",
        },
        microbe: {
          50: "#f0fdfb",
          100: "#ccfbf3",
          200: "#99f6e8",
          300: "#5eead9",
          400: "#2dd4c3",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },
        carbon: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-medium": "float 6s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "cell-divide": "cellDivide 5s ease-in-out infinite",
        "gradient-flow": "gradientFlow 12s ease infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-12px) rotate(2deg)" },
          "66%": { transform: "translateY(-6px) rotate(-1deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        cellDivide: {
          "0%, 100%": { transform: "scale(1) rotate(0deg)" },
          "25%": { transform: "scale(1.2) rotate(90deg)" },
          "50%": { transform: "scale(0.9) rotate(180deg)" },
          "75%": { transform: "scale(1.1) rotate(270deg)" },
        },
        gradientFlow: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bio-mesh": `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        "dots-pattern": `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2314b8a6' fill-opacity='0.08'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
      },
    },
  },
  plugins: [],
};

export default config;
