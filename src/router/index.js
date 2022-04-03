import Vue from 'vue'
import VueRouter from 'vue-router'
import onLogin from '../views/onLogin.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'login',
    component: onLogin
}, ]

const router = new VueRouter({
    routes
})

export default router