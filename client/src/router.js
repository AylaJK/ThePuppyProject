import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  /* mode: "history", */ // Dissabled to allow file-system browsing of the app
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/dogs",
      name: "dogs",
      component: () => import(/* webpackChunkName: "dogs" */ "./views/Dogs.vue")
    },
    {
      path: "/dogs/:id",
      name: "dog",
      component: () => import(/* webpackChunkName: "dog" */ "./views/Dog.vue")
    }
  ]
});