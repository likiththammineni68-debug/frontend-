import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Read ngrok host from environment (set NGROK_URL or VITE_NGROK_URL)
const NGROK_URL = process.env.NGROK_URL || process.env.VITE_NGROK_URL || '';

export default defineConfig({
  base: '/', // required for Vercel deployment

  plugins: [react()],

  optimizeDeps: {
    exclude: ['lucide-react'],
  },

  server: {
    host: '0.0.0.0', // allow external access
    port: 5175,
    strictPort: true,
    // allow both localhost and an optional ngrok host
    allowedHosts: [
      'localhost',
      ...(NGROK_URL ? [NGROK_URL] : []),
    ],
  },

  preview: {
    host: '0.0.0.0',
    port: 5175,
    strictPort: true,
    allowedHosts: [
      'localhost',
      ...(NGROK_URL ? [NGROK_URL] : []),
    ],
  },

  build: {
    outDir: 'dist',
  },
})