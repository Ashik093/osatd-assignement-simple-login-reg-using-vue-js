import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () =>
    import ('../views/HomeView.vue')
const DashboardView = () =>
    import ('../views/DashboardView.vue')
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        name: 'home',
        component: HomeView
    }, {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardView
    }]
})

export default router