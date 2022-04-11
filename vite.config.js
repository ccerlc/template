import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const { getThemeVariables } = require('antd/dist/theme');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
})
