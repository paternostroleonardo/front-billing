import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Invoices from '@/views/Invoices.vue'
import Register from '@/views/Register.vue'
import NewInvoice from '@/views/CreateInvoice.vue'

const routes: Array<RouteRecordRaw> = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    { path: '/register', component: Register },
    { path: '/invoices', component: Invoices },
    {path: '/NewInvoice', component: NewInvoice},
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
