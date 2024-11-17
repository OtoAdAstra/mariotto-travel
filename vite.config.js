import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enable global test functions (like test, expect)
    environment: "jsdom", // Simulate browser-like environment
    setupFiles: "./setup.js", // Load this file before tests
  },
});
