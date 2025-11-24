// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 저장소 이름과 일치하도록 base 경로 설정
  base: '/react-portfolio/', 
})