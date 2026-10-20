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
        device: {
          frame: "#1C1C1E",
          island: "#0A0A0A",
          gloss: "#2C2C2E",
        },
        sea: {
          deep: "#00122A",
          navy: "#0A192F",
          mist: "#8892B0",
          frost: "#CCD6F6",
          glow: "#E6F1FF",
          cyan: "#20E0F0",
          mint: "#64FFDA",
          amber: "#FDBD03",
          violet: "#A400F3",
        },
        glass: {
          fill: "rgba(255, 255, 255, 0.03)",
          hover: "rgba(255, 255, 255, 0.05)",
          line: "rgba(255, 255, 255, 0.1)",
          soft: "rgba(255, 255, 255, 0.08)",
          chip: "rgba(255, 255, 255, 0.06)",
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
        float: "0 8px 24px rgba(0, 49, 83, 0.08)",
        cta: "0 4px 12px rgba(0, 49, 83, 0.2)",
        "cta-gold": "0 6px 16px rgba(182, 143, 117, 0.3)",
        lift: "0 12px 32px rgba(0, 49, 83, 0.08)",
        modal: "0 20px 60px rgba(0, 0, 0, 0.1)",
        modal: "0 28px 80px rgba(0, 49, 83, 0.08), 0 6px 20px rgba(0, 49, 83, 0.04)",
        bento: "0 20px 40px rgba(0, 0, 0, 0.08)",
        orb: "inset 0 0 48px rgba(255, 255, 255, 0.45), 0 30px 70px rgba(0, 49, 83, 0.12)",
        status: "0 0 0 3px rgba(27, 138, 74, 0.18), 0 0 8px rgba(27, 138, 74, 0.7)",
        "mint-glow": "0 0 18px rgba(100, 255, 218, 0.22)",
        "mint-dot": "0 0 8px rgba(100, 255, 218, 0.9)",
        "gold-glow": "0 0 18px rgba(182, 143, 117, 0.28)",
        "gold-phone": "0 0 18px rgba(182, 143, 117, 0.45)",
        "gold-breathe": "0 0 0 0 rgba(182, 143, 117, 0.2)",
      },
      backgroundImage: {
        "arch-glow":
          "radial-gradient(ellipse at 50% 20%, rgba(100, 255, 218, 0.12), transparent 55%)",
        "orbit-glow":
          "radial-gradient(circle at 50% 48%, rgba(182, 143, 117, 0.14), transparent 52%)",
        "nest-beam":
          "linear-gradient(to top, rgba(0, 229, 255, 0), #00E5FF, rgba(0, 229, 255, 0))",
        "orb-glass":
          "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.96), rgba(0,49,83,0.16) 46%, rgba(0,49,83,0.62) 78%)",
        "orb-arc":
          "conic-gradient(from 210deg, rgba(182,143,117,0) 0deg, rgba(182,143,117,0.9) 48deg, rgba(182,143,117,0) 96deg, rgba(182,143,117,0) 360deg)",
        "work-grid":
          "linear-gradient(to right, rgba(226,232,240,0.9) 1px, transparent 1px), linear-gradient(to bottom, rgba(226,232,240,0.9) 1px, transparent 1px)",
        "cockpit-glow":
          "radial-gradient(circle at 78% 18%, rgba(182,143,117,0.42), transparent 36%), radial-gradient(circle at 18% 88%, rgba(255,255,255,0.14), transparent 42%)",
        "sandbox-grid":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "sandbox-vignette":
          "radial-gradient(ellipse at 50% 38%, rgba(255,255,255,0.06), transparent 46%), radial-gradient(ellipse at 50% 100%, rgba(0,12,24,0.45), transparent 58%)",
      },
      borderRadius: {
        card: "12px",
      },
      keyframes: {
        ripple: {
          "0%": { transform: "scale(1)", opacity: "0.55" },
          "100%": { transform: "scale(2.6)", opacity: "0" },
        },
        "corner-pulse": {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
        "scan-line": {
          "0%": { top: "12%", opacity: "0" },
          "8%": { opacity: "0.85" },
          "92%": { opacity: "0.85" },
          "100%": { top: "88%", opacity: "0" },
        },
        "frame-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(182, 143, 117, 0)" },
          "50%": { boxShadow: "0 0 0 3px rgba(182, 143, 117, 0.18)" },
        },
        "flow-up": {
          "0%": { bottom: "-10px", top: "auto", opacity: "0" },
          "20%": { opacity: "1" },
          "80%": { opacity: "1" },
          "100%": { bottom: "100%", top: "auto", opacity: "0" },
        },
        "flow-down": {
          "0%": { top: "-10px", opacity: "0" },
          "20%": { opacity: "1" },
          "80%": { opacity: "1" },
          "100%": { top: "100%", opacity: "0" },
        },
        "radar-pulse": {
          "0%": { opacity: "0.7", transform: "translate(-50%, -50%) scale(0.88)" },
          "100%": { opacity: "0", transform: "translate(-50%, -50%) scale(1.28)" },
        },
        "dash-flow": {
          to: { "stroke-dashoffset": "-24" },
        },
        "dash-down": {
          to: { "stroke-dashoffset": "20" },
        },
        "link-dot": {
          "0%": { left: "0%", opacity: "0" },
          "15%": { opacity: "1" },
          "85%": { opacity: "1" },
          "100%": { left: "100%", opacity: "0" },
        },
        "flow-right": {
          "0%": { left: "-20%", opacity: "0" },
          "20%": { opacity: "1" },
          "80%": { opacity: "1" },
          "100%": { left: "100%", opacity: "0" },
        },
        "flow-left": {
          "0%": { right: "-20%", left: "auto", opacity: "0" },
          "20%": { opacity: "1" },
          "80%": { opacity: "1" },
          "100%": { right: "100%", left: "auto", opacity: "0" },
        },
        "nest-rise": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "20%": { opacity: "1" },
          "80%": { opacity: "1" },
          "100%": { transform: "translateY(-7rem)", opacity: "0" },
        },
        breathe: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(182, 143, 117, 0.22)" },
          "70%": { boxShadow: "0 0 0 10px rgba(182, 143, 117, 0)" },
        },
      },
      animation: {
        ripple: "ripple 2s ease-out infinite",
        "corner-pulse": "corner-pulse 2.2s ease-in-out infinite",
        "scan-line": "scan-line 2.8s ease-in-out infinite",
        "frame-glow": "frame-glow 2.4s ease-in-out infinite",
        "flow-up": "flow-up 1.4s linear infinite",
        "flow-down": "flow-down 1.6s linear infinite",
        "radar-pulse": "radar-pulse 2.8s ease-out infinite",
        "dash-flow": "dash-flow 1.2s linear infinite",
        "dash-down": "dash-down 1.5s linear infinite",
        "link-dot": "link-dot 1.8s linear infinite",
        "flow-right": "flow-right 2s linear infinite",
        "flow-left": "flow-left 2s linear infinite",
        "flow-right-fast": "flow-right 1s linear infinite",
        "flow-left-fast": "flow-left 1s linear infinite",
        "nest-rise": "nest-rise 2s ease-in-out infinite",
        breathe: "breathe 3s ease-out infinite",
      },
    },
  },
  plugins: [],
}
