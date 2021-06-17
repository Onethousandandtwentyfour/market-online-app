import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

Vue.config.productionTip = false;
Vue.component("swiper", Swiper);
Vue.component("swiper-slide", SwiperSlide);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
