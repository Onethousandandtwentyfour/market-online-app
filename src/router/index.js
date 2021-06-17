import Vue from "vue";
import VueRouter from "vue-router";

// 路由懒加载
const Home = () => import("@/views/home");
const User = () => import("@/views/user");
const Category = () => import("@/views/category");
const Cart = () => import("@/views/cart");

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/user",
    component: User
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/cart",
    component: Cart
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
