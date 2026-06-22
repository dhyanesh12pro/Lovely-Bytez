import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        chilli: "#D51E2A",
        charcoal: "#161616",
        cream: "#FFF7EC",
        crunch: "#F6B73C",
        tomato: "#FF6B5C",
        leaf: "#3E8F58",
        ink: "#25201C"
      },
      boxShadow: {
        soft: "0 22px 70px rgba(22, 22, 22, 0.14)",
        glow: "0 0 70px rgba(246, 183, 60, 0.2)"
      },
      borderRadius: {
        brand: "8px"
      },
      keyframes: {
        steam: {
          "0%": { transform: "translate3d(0, 12px, 0) scale(0.9)", opacity: "0" },
          "30%": { opacity: "0.26" },
          "100%": { transform: "translate3d(18px, -70px, 0) scale(1.35)", opacity: "0" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        steam: "steam 6s ease-in-out infinite",
        float: "float 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
