import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest:        "#8B5E3C",
        "forest-dark": "#6B4528",
        "forest-light":"#A97D57",
        ivory:         "#F7F3EC",
        "ivory-dark":  "#EDE8DF",
        terracotta:    "#C4714A",
        gold:          "#C9A84C",
        "gold-light":  "#D4B97A",
        "gold-dark":   "#A8863A",
        amber:         "#8B5E3C",
        saffron:       "#925712",
        charcoal:      "#2C2C2C",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        inter:     ["var(--font-inter)", "system-ui", "sans-serif"],
        heading:   ["var(--font-cormorant)", "Georgia", "serif"],
        body:      ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-forest": "linear-gradient(135deg, #8B5E3C 0%, #6B4528 100%)",
        "gradient-gold": "linear-gradient(135deg, #C9A84C 0%, #8B5E3C 100%)",
        "gradient-ivory": "linear-gradient(180deg, #F7F3EC 0%, #EDE8DF 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out",
        "fade-in": "fadeIn 0.4s ease-out",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
    },
  },
  plugins: [],
};
export default config;
