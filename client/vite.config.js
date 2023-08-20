import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  // build: {
  //   manifest: true,
  //   rollupOptions: {
  //     input: './src/main.jsx'
  //   }
  // },
  plugins: [react()],

  server: {
    proxy: {
      "/api/products": {
        target: "http://localhost:8000",
        changeOrigin: true,
        secure: false
      }
    }
  }
})
