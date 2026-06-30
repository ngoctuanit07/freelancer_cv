import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Đổi thành './' để kích hoạt đường dẫn tương đối cho toàn bộ dự án
})