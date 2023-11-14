import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,

    build: {
      outDir: "build", // Specify the desired output directory
    },

    // Get rid of the CORS error
    proxy: {
      "/api": {
        target: "https://threads-clone-backend-fqmz.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,

//     // Get rid of the CORS error
//     proxy: {
//       "/api": {
//         target: "http://localhost:5000",
//         changeOrigin: true,
//         secure: false,
//       },
//     },
//   },
// });
