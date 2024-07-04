import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Resolve the base directory from import.meta.url
const __dirname = new URL('.', import.meta.url).pathname;

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
})
