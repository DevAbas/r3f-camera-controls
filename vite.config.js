import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/r3f-camera-controls/",
  build: {
    // Allow larger bundles before showing warnings
    chunkSizeWarningLimit: 2000,

    rollupOptions: {
      // Silences harmless "eval" warnings from 3rd-party libs
      onwarn(warning, warn) {
        if (warning.message.includes("eval")) return;
        warn(warning);
      },

      // Split heavy libraries into separate chunks to shrink main.js
      output: {
        manualChunks: {
          three: ["three"],
          fiber: ["@react-three/fiber"],
          drei: ["@react-three/drei"],
          leva: ["leva"],
        },
      },
    },
  },
});
