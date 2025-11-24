// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/react-portfolio/',   // ← 이미 있던 거 그대로 유지
  build: {
    outDir: 'docs',            // ✅ dist 대신 docs 로 빌드
  },
});
