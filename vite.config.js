import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    allowedHosts: [
      'devserver-main--funny-cendol-dfa8fd.netlify.app' // Host de tu preview
    ]
  }
})
