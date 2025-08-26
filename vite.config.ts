import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // For username.github.io
  // If deploying to https://username.github.io/my-site/, set: base: "/my-site/"
});
