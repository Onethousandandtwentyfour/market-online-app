import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

// 路由懒加载
const Home = () => import("@/views/home");
const User = () => import("@/views/user");
const Category = () => import("@/views/category");
const Cart = () => import("@/views/cart");

const GoodsDetail = () => import("@/views/goods-detail");

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home",
    meta: {
      title: "加载中..."
    }
  },
  {
    path: "/home",
    component: Home,
    meta: {
      title: "首页"
    }
  },
  {
    path: "/user",
    component: User,
    meta: {
      title: "我的"
    }
  },
  {
    path: "/category",
    component: Category,
    meta: {
      title: "分类"
    }
  },
  {
    path: "/cart",
    component: Cart,
    meta: {
      title: "购物车"
    }
  },
  {
    path: "/goods-detail",
    component: GoodsDetail,
    meta: {
      title: "商品详情"
    }
  }
];

const router = new VueRouter({
  routes
});

const whitelist = {};
router.beforeEach((to, from, next) => {
  if (!Object.values(whitelist).includes(to.path)) {
    //非白名单路由
    if (!store.state.loginTokan) {
      //未登录
      next(whitelist.login);
      return;
    }
  }
  document.title = to.matched
    .map(item => item.meta.title)
    .filter(item => item)
    .join("-");
  next();
});

export default router;
