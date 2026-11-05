import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages：https://lorraine-qml.github.io/resume-site/
// 路由走 Hash（#/works/...），刷新子页不依赖服务端 SPA fallback。
export default defineConfig({
  base: '/resume-site/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
})
