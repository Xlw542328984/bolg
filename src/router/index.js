import { createRouter, createWebHistory } from 'vue-router'

import home from '../views/home/index.vue'

const name = '海绵宝宝的博客'

const routes = [
    {
        path: '/',
        name: home,
        component: home,
        meta: {
            title: '首页-' + name
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior() {
        return { top: 0 }

    },
    routes
})

export default router