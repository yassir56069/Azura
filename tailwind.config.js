/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class', // Tells tailwind we are using a manual .dark class
  theme: {
    extend: {
      colors: {
        // Now pointing to CSS variables instead of hardcoded hex values
        void: "rgb(var(--color-void) / <alpha-value>)",
        panel: "rgb(var(--color-panel) / <alpha-value>)",
        panelLight: "rgb(var(--color-panel-light) / <alpha-value>)",
        gold: {
          DEFAULT: "rgb(var(--color-gold) / <alpha-value>)",
          light: "rgb(var(--color-gold-light) / <alpha-value>)",
          dim: "rgb(var(--color-gold-dim) / <alpha-value>)",
        },
        ivory: "rgb(var(--color-ivory) / <alpha-value>)",
        ivoryDim: "rgb(var(--color-ivory-dim) / <alpha-value>)",
        teal: {
          DEFAULT: "rgb(var(--color-teal) / <alpha-value>)",
          light: "rgb(var(--color-teal-light) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: 0.55, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.25)" },
        },
        riseIn: {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        drawLine: {
          "0%": { strokeDashoffset: 1 },
          "100%": { strokeDashoffset: 0 },
        },
      },
      animation: {
        pulseGlow: "pulseGlow 2.8s ease-in-out infinite",
        riseIn: "riseIn 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};