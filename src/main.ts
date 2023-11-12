import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap"
import i18n from './components/i18n.ts'

// vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)

app.config.globalProperties.host = 'https://localhost:7222'

const vuetify = createVuetify({
    components,
    directives,
  })

app.use(vuetify)
app.use(createPinia())
app.use(router)
app.use(i18n);

app.mount('#app');

