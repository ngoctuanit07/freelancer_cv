import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/freelancer_cv/', // Thêm dòng này trùng với tên repository của bạn
})