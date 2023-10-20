import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import eslint from "vite-plugin-eslint";
import ReactivityTransform from '@vue-macros/reactivity-transform/vite';


// https://vitejs.dev/config/
export default defineConfig({
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
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
