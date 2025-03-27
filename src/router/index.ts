import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
// import Home from ;


//處理路徑與 Vue 實體元件
const routes: Array<RouteRecordRaw> = [
    {
        path: '/', //根路由 (用於巢狀路由)
        children: [
            // {
            //     path: '/',
            //     name: 'home',
            //     component: () => import('../views/pages/home/Home.vue'),
            //     ../views/pages/home/Home.vue
            // },
            // {
            //     path: '/experience',
            //     name: 'experience',
            //     component: () => import('@/views/pages/experience/Experience.vue') //動態載入
            // },
            // {
            //     path: '/project',
            //     name: 'project',
            //     component: () => import('@/views/pages/project/Project.vue')
            // }
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(), //路由模式
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 };
    }
});

//每次路由變更前執行
router.beforeEach((to, from, next) => {
    next();
});

export default router;

//