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
        mist: "#F4F6F8",
        ok: "#1B8A4A",
        mac: {
          red: "#FF5F56",
          yellow: "#FFBD2E",
          green: "#27C93F",
        },
        track: "#F1F5F9",
        surface: "#F8FAFC",
        preview: "#F7F9FC",
        sea: {
          deep: "#00122A",
          cyan: "#20E0F0",
          amber: "#FDBD03",
          violet: "#A400F3",
        },
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
        cta: "0 4px 12px rgba(0, 49, 83, 0.2)",
        "cta-gold": "0 6px 16px rgba(182, 143, 117, 0.3)",
        lift: "0 12px 32px rgba(0, 49, 83, 0.08)",
        modal: "0 20px 60px rgba(0, 0, 0, 0.1)",
        modal: "0 28px 80px rgba(0, 49, 83, 0.08), 0 6px 20px rgba(0, 49, 83, 0.04)",
        bento: "0 20px 40px rgba(0, 0, 0, 0.08)",
        orb: "inset 0 0 48px rgba(255, 255, 255, 0.45), 0 30px 70px rgba(0, 49, 83, 0.12)",
        status: "0 0 0 3px rgba(27, 138, 74, 0.18), 0 0 8px rgba(27, 138, 74, 0.7)",
      },
      backgroundImage: {
        "orb-glass":
          "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.96), rgba(0,49,83,0.16) 46%, rgba(0,49,83,0.62) 78%)",
        "orb-arc":
          "conic-gradient(from 210deg, rgba(182,143,117,0) 0deg, rgba(182,143,117,0.9) 48deg, rgba(182,143,117,0) 96deg, rgba(182,143,117,0) 360deg)",
        "work-grid":
          "linear-gradient(to right, rgba(226,232,240,0.9) 1px, transparent 1px), linear-gradient(to bottom, rgba(226,232,240,0.9) 1px, transparent 1px)",
        "cockpit-glow":
          "radial-gradient(circle at 78% 18%, rgba(182,143,117,0.42), transparent 36%), radial-gradient(circle at 18% 88%, rgba(255,255,255,0.14), transparent 42%)",
        "sandbox-grid":
          "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
        "sandbox-vignette":
          "radial-gradient(ellipse at 50% 38%, rgba(255,255,255,0.07), transparent 46%), radial-gradient(ellipse at 50% 100%, rgba(0,12,24,0.55), transparent 58%)",
      },
      borderRadius: {
        card: "12px",
      },
      keyframes: {
        ripple: {
          "0%": { transform: "scale(1)", opacity: "0.55" },
          "100%": { transform: "scale(2.6)", opacity: "0" },
        },
      },
      animation: {
        ripple: "ripple 1.8s ease-out infinite",
      },
    },
  },
  plugins: [],
}
