import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import SwiperPlugin from "@/util/swiper";
import ImgMixin from "@/util/mixins/img-mixin";
import CustomDirective from "@/common/customDirective";
Vue.use(SwiperPlugin);
Vue.use(CustomDirective);
Vue.mixin(ImgMixin);

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
