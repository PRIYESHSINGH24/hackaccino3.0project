import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        warning: {
          DEFAULT: "hsl(38, 92%, 50%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        // Custom coder theme colors
        coder: {
          background: "#0D0D0D",
          foreground: "#E0E0E0",
          primary: "#00A8E8",
          secondary: "#BB86FC",
          accent: "#18FFFF",
          green: "#00FF7F",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 5px rgba(0, 168, 232, 0.5), 0 0 10px rgba(0, 168, 232, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 15px rgba(0, 168, 232, 0.8), 0 0 20px rgba(0, 168, 232, 0.5)",
          },
        },
        "rotate-3d": {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        "matrix-bg": {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
        "text-shimmer": {
          "0%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "rotate-3d": "rotate-3d 15s linear infinite",
        "matrix-bg": "matrix-bg 15s ease infinite",
        "text-shimmer": "text-shimmer 3s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "coder-grid":
          "linear-gradient(rgba(24, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(24, 255, 255, 0.05) 1px, transparent 1px)",
        shimmer: "linear-gradient(90deg, transparent, rgba(0, 168, 232, 0.5), transparent)",
      },
      backgroundSize: {
        "grid-pattern": "30px 30px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

