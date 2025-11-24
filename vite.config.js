// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 💡 핵심 수정 사항: base 옵션을 저장소 이름으로 설정
  base: '/react-portfolio/', 
});