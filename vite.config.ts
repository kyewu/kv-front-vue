import { fileURLToPath, URL } from 'node:url'
import VueRouter from 'unplugin-vue-router/vite'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Layouts from 'vite-plugin-vue-layouts'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    VueRouter({
      dts: './typed-router.d.ts',
      routesFolder: 'src/pages'
    }),
    vue({
      script: {
        propsDestructure: true,
        defineModel: true
      }
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      imports: ['vue', VueRouterAutoImports, '@vueuse/core', 'pinia']
    }),
    Components({
      resolvers: [
        IconsResolver({
          prefix: 'i'
        })
      ]
    }),
    Layouts({
      LayoutsDirs: 'src/layouts',
      defaultLayout: 'default'
    }),
    Icons({
      autoInstall: true,
      defaultStyle: 'display: inline-block'
    }),
    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
