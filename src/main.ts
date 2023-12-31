import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './interceptor/axios.js'

import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap"
import i18n from './components/i18n.ts'

const app = createApp(App)

// app.config.globalProperties.host = 'http://localhost:5223'

app.use(createPinia())
app.use(router)
app.use(i18n);

app.mount('#app');

