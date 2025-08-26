/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0d0d0d",
        card: "rgba(255,255,255,0.06)",
        ring: "rgba(255,255,255,0.2)"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.25)"
      },
      backdropBlur: {
        xs: "2px"
      }
    }
  },
  plugins: []
}
