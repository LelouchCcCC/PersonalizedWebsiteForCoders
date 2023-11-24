import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import eslint from "vite-plugin-eslint";
import ReactivityTransform from '@vue-macros/reactivity-transform/vite';
import { loadEnv } from 'vite'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig(({ mode })=>{
  const env = loadEnv(mode, process.cwd());
  return{
    plugins: [
    vue(), 
    eslint({ lintOnStart: true, cache: false }), //be a good programmer 
    ReactivityTransform(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports:["vue", "vue-router"],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    // host: 'localhost', // 只能本地访问
    host: '0.0.0.0', // 局域网别人也可访问
    port: Number(env.VITE_APP_PORT),
    // 运行时自动打开浏览器
    // open: true,
    proxy: {
      [env.VITE_APP_BASE_API]: {
        target: env.VITE_APP_SERVICE_API,
        changeOrigin: true,
        rewrite: (path) => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), ''),
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
      // find: '@',
      // replacement:path.resolve('./src'),
    }
  },
  // global css
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/color.scss";@import "@/styles/theme.scss";`,
      },
    },
  },
  }
  
})
