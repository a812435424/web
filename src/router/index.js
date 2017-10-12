import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index/Index'
import Skills from '@/components/Index/Skills'
import Projects from '@/components/Index/Projects'

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
    }, {
        path: '/Projects',
        name: 'Projects',
        component: Projects
    }],
    linkActiveClass: 'active'
})