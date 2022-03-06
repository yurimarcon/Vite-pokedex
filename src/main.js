import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'
import './registerServiceWorker'

import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
})

const app = createApp(App);
app.use(router);

app.mount('#app')
