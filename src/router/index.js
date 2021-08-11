import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
});

const whitelist = {}; //路由白名单
router.beforeEach((to, _from, next) => {
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
