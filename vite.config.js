import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: "./public/manifest.json",
      registerType: "autoUpdate",
      includeAssets: ["./public/icon.ico", "./src/sw.js"],
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
      },
    }),
  ],
});
