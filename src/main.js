import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Định nghĩa các route tại đây
        // Ví dụ:
        // { path: '/', component: Home },
        // { path: '/about', component: About },
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
