import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // Get rid of the CORS error
    proxy: {
      "/api": {
        target: "https://threads-clone-backend-fqmz.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: "build", // Specify the desired output directory
  },
});
