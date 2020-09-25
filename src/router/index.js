import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/user",
    name: "User",
    component: () =>import( "@/views/User/User.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
