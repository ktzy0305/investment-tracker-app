import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

// Create a vue router instance with routes to Login, Home and Portfolio
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue")
    },
    {
        path: "/market",
        name: "market",
        component: () => import("../views/Market.vue")
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import("../views/Portfolio.vue")
    }
  ]
})

export default router;