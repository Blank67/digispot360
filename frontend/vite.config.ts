import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@fonts": "/src/fonts",
      "@pages": "/src/pages",
      "@utils": "/src/utils",
      "@hoc": "/src/hoc",
    },
  },
  envPrefix: "VITE_",
});
