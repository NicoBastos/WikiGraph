import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig((command) => {
  const config = {
    plugins: [react()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
      base: "",
    },
  };

  if (command !== "serve") {
    config.base = "/react-vite-gh-pages/";
  }

  return config;
});
