// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 💡 [필수 수정] GitHub 저장소 이름과 일치하는 base 경로 설정
  base: '/react-portfolio/', 
});