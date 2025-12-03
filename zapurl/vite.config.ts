import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from '@vitejs/plugin-react'
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://3.108.254.115:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  // Environment variables starting with VITE_ will be exposed to client
  define: {
    __API_BASE_URL__: JSON.stringify(process.env.VITE_API_BASE_URL || '')
  }
})
