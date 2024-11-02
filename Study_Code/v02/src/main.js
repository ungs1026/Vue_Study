import { createApp } from 'vue'
import App from './App.vue'
import GlobalChild from '@/components/GlobalChild.vue'

const app = createApp(App)

app.component('GlobalChild', GlobalChild)

app.mount('#app')
