import Vue from "vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  install() {
    Vue.component("swiper", swiper);
    Vue.component("swiper-slide", swiperSlide);
  }
};
