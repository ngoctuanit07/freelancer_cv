import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Sửa thành '/' vì bạn đang dùng tên miền tùy chỉnh
})