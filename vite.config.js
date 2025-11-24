// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-portfolio/',     // GitHub 저장소 이름
  build: {
    outDir: 'docs',              // ← 여기서 docs로 빌드
  },
});
