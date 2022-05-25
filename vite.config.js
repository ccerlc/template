import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const path = require('node:path');

const { getThemeVariables } = require('antd/dist/theme');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: getThemeVariables({
          compact: true // 开启紧凑模式
        }),
        javascriptEnabled: true
      }
    }
  }
});
