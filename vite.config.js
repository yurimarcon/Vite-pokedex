import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import host from 'vite-plugin-host'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    VitePWA({
      workbox: {
        cleanupOutdatedCaches: false  
      }  
    }), 
    host()
  ],
})
