import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index/Index'
import Skills from '@/components/Index/Skills'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: Index
    }, {
        path: '/Skills',
        name: 'Skills',
        component: Skills
    }],
    linkActiveClass: 'active'
})