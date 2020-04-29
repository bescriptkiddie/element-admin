import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/ListArticle'
import Create from '../views/CreateArticle'
import Edit from '../views/EditArticle'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        redirect: '/articles/index',
    },
    {
        path: '/articles/index',
        name: 'list-article',
        component: List
    },
    {
        path: '/articles/create',
        name: 'create-article',
        component: Create
    },
    {
        path: '/articles/:id/edit',
        name: 'edit-article',
        component: Edit
    }
]

const router = new VueRouter({
    routes
})

export default router
