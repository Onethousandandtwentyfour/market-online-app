// 路由懒加载
const Home = () => import("@/views/home");
const User = () => import("@/views/user");
const Category = () => import("@/views/category");
const Cart = () => import("@/views/cart");
const GoodsDetail = () => import("@/views/goods-detail");

//demo
const CustomDirective = () => import("@/views/demo");

export default [
  {
    path: "",
    redirect: "/example",
    meta: {
      title: "加载中..."
    }
  },
  {
    path: "/example",
    component: CustomDirective,
    meta: {
      title: "功能示例",
      showTabbar: false
    }
  },
  {
    path: "/home",
    component: Home,
    meta: {
      title: "首页",
      showTabbar: true
    }
  },
  {
    path: "/user",
    component: User,
    meta: {
      title: "我的",
      showTabbar: true
    }
  },
  {
    path: "/category",
    component: Category,
    meta: {
      title: "分类",
      showTabbar: true
    }
  },
  {
    path: "/cart",
    component: Cart,
    meta: {
      title: "购物车",
      showTabbar: true
    }
  },
  {
    path: "/goods-detail",
    component: GoodsDetail,
    meta: {
      title: "商品详情",
      noCaches: true
    }
  }
];
