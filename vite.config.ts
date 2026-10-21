import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// EdgeOne Pages / 自定义域名根路径部署用 "/"。
// 若挂到子目录（如 example.com/resume/），改为 base: '/resume/'。
// 注意：SPA 深链（/works/*）不要用 base: './'，刷新后相对资源会解析错路径。
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
})
