/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#003153",
          gold: "#b68f75",
        },
        ink: "#1E293B",
        copy: "#475569",
        muted: "#64748B",
        chip: "#F0F5FF",
        line: "#E2E8F0",
        track: "#F1F5F9",
        surface: "#F8FAFC",
      },
      fontFamily: {
        sans: [
          '"PingFang SC"',
          '"HarmonyOS Sans"',
          '"Microsoft YaHei"',
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 2px 4px rgba(0, 0, 0, 0.02)",
        soft: "0 4px 20px rgba(0, 49, 83, 0.04)",
        lift: "0 12px 32px rgba(0, 49, 83, 0.08)",
        modal: "0 20px 60px rgba(0, 0, 0, 0.1)",
        orb: "inset 0 0 48px rgba(255, 255, 255, 0.45), 0 30px 70px rgba(0, 49, 83, 0.12)",
      },
      backgroundImage: {
        "orb-glass":
          "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.96), rgba(0,49,83,0.16) 46%, rgba(0,49,83,0.62) 78%)",
        "orb-arc":
          "conic-gradient(from 210deg, rgba(182,143,117,0) 0deg, rgba(182,143,117,0.9) 48deg, rgba(182,143,117,0) 96deg, rgba(182,143,117,0) 360deg)",
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
}
