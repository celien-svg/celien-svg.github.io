import { createRouter, createWebHistory } from "vue-router"

import HomePage from "../pages/HomePage.vue"
import SkillsPage from "../pages/SkillsPage.vue"
import SkillDetailPage from "../pages/SkillsDetailPage.vue"
import AboutPage from "../pages/AboutPage.vue"
import ContactPage from "../pages/ContactPage.vue"

const routes = [
    { path: "/", name: "home", component: HomePage },
    { path: "/competences", name: "skills", component: SkillsPage },
    { path: "/competences/:id", name: "skill-detail", component: SkillDetailPage },
    { path: "/a-propos", name: "about", component: AboutPage },
    { path: "/contact", name: "contact", component: ContactPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
