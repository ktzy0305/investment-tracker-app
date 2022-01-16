import Vue from "vue"
import VueRouter from "vue-router"
import store from "../store"

Vue.use(VueRouter)
const ifAuthenticated = (to, from, next) => {
  if (store.getters["account/isLoggedIn"]) {
    next()
  }
  else{
    next("/login")
  }
}

// Create a vue router instance
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
      component: () => import("../views/Market.vue"),
      beforeEnter: ifAuthenticated
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import("../views/Portfolio.vue"),
      beforeEnter: ifAuthenticated
    },
    {
      path: "/p2p",
      name: "p2p",
      component: () => import("../views/P2P.vue")
    },
    {
      path: "/transactions",
      name: "tranasctions",
      component: () => import("../views/Transactions.vue"),
      beforeEnter: ifAuthenticated
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue")
    }
  ]
})

export default router;