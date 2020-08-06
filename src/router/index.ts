import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import YouTubeSearch from '../views/YouTubeSearch.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/YouTubeSearch',
        name: 'YouTubeSearch',
        component: YouTubeSearch
    }
]

const router = new VueRouter({
    routes
})

export default router
