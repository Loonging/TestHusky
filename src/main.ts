import { createApp } from 'vue'
import App from './App.vue'
//挂载 Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(ElementPlus).mount('#app')
