import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://hetalbdawda.github.io/whisk-and-bean/
  base: '/whisk-and-bean/',
  plugins: [react()],
})
