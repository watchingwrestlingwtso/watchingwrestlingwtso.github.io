import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For user sites (your case), base should be '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
