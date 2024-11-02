import { createRouter, createWebHashHistory } from "vue-router"

// 路由规则
const routes = [
    {
        // main 组件
        path: '/',
        name: 'main',
        component: () => import("@/views/Main.vue")
    }
]


// 导出路由配置
const router = createRouter({
    // 设置路由模式
    history: createWebHashHistory(),
    // 设置路由
    routes,
})

export default router;