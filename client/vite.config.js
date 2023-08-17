import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  build: {
    manifest: true,
    rollupOptions: {
      input: './src/main.jsx'
    }
  },

  server: {
    proxy: {
      "/api/products": "http://localhost:5173"
    }
  },
  plugins: [react()]
})
