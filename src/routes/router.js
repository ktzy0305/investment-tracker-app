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
      path: "/cats",
      name: "cats",
      component: () => import("../views/Cats.vue")
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
    },
    {
      path: "/p2p",
      name: "p2p",
      component: () => import("../views/P2P.vue")
    },
    {
      path: "/transactions",
      name: "tranasctions",
      component: () => import("../views/Transactions.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue")
    }
  ]
})

export default router;