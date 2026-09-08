import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0C0D12",
          subtle: "#12141C",
          card: "#161824",
          cardHover: "#1C1F2E",
        },
        ubuntu: {
          orange: "#E95420",
          orangeLight: "#FF6B35",
          orangeDark: "#C33C0D",
          orangeSubtle: "rgba(233, 84, 32, 0.12)",
          aubergine: "#77216F",
          aubergineDark: "#2C001E",
          aubergineLight: "#9B388D",
          dark: "#0C0D12",
          surface: "#161824",
          surfaceHover: "#1D2030",
          warmGrey: "#AEA79F",
          muted: "#8C867F",
        },
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          subtle: "rgba(255, 255, 255, 0.05)",
          orange: "rgba(233, 84, 32, 0.35)",
          aubergine: "rgba(119, 33, 111, 0.35)",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Ubuntu",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        mono: [
          '"Ubuntu Mono"',
          '"JetBrains Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        "ubuntu-orange": "0 4px 20px -2px rgba(233, 84, 32, 0.25)",
        "ubuntu-soft": "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "ubuntu-gradient": "linear-gradient(135deg, #E95420 0%, #FF6B35 50%, #77216F 100%)",
        "ubuntu-subtle-glow": "radial-gradient(circle at 50% 0%, rgba(233, 84, 32, 0.1) 0%, rgba(119, 33, 111, 0.05) 50%, transparent 80%)",
      },
    },
  },
  plugins: [],
};

export default config;
