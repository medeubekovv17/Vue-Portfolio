import Vue from 'vue'
import VueRouter from "vue-router"
import Cover from '../components/Cover.vue'
import Section from "../components/Section.vue"
import MySkills from "../components/MySkills.vue"
import Contacts from "../components/Contacts.vue"
import Portfolio from "../components/Portfolio.vue"

Vue.use(VueRouter);

export default new VueRouter ({
    routes: [
        {
            path: '/main',
            component: Cover
        },
        {
            path: '/section',
            component: Section
        },
        {
            path: '/myskills',
            component: MySkills
        },
        {
            path: '/contacts',
            component: Contacts
        },
        {
            path: '/portfolio',
            component: Portfolio
        }
    ],
    mode: 'history'
})