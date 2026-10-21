import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// 子路径部署：域名/lorraine-resume/
// 路由走 Hash（#/works/...），刷新子页不依赖服务端 SPA fallback。
export default defineConfig({
  base: '/lorraine-resume/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
})
