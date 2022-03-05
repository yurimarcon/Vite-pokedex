import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'
import './registerServiceWorker'

const app = createApp(App);
app.use(router);

app.mount('#app')
