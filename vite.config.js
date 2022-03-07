import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import host from 'vite-plugin-host'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    VitePWA({
      name: 'Pokedex-vite',
      themeColor: '#DF0101',
      msTileColor: '#BDBDBD',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: '#DF0101',
  
      // configuração do workbox plugin
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        // swSrc é necessário para o modo injectManifest.
        swSrc: 'src/registerServiceWorker.js',
        // ...outras opções do WorkBox...
      }
    }),
    host()
  ],
})
