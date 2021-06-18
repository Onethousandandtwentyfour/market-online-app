import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import SwiperPlugin from "@/util/swiper";
import ImgMixin from "@/util/mixins/img-mixin";

Vue.use(SwiperPlugin);

Vue.config.productionTip = false;

Vue.mixin(ImgMixin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
