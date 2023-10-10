import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './assets/main.scss'
// import 'reset-css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia()) // show pinia dev tools in extentions
app.use(router)

app.mount('#app')
