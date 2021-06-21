<template>
  <swiper ref="mySwiper" :options="swiperOptions" v-if="dataSource.length > 0">
    <template v-for="item of dataSource">
      <swiper-slide :key="item.acm">
        <div
          class="swiper-img-box bg-contain"
          :style="loadNetworkImgToBgComp(item.image)"
        ></div>
      </swiper-slide>
    </template>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  name: "detail-swiper",
  props: {
    dataSource: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      swiperOptions: {
        direction: "horizontal",
        observer: true,
        observeParents: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false //触摸后停止自动关东
        },
        loop: this.dataSource.length > 1,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  }
};
</script>
<style lang="less" scoped>
.swiper-img-box {
  width: 100vw;
  height: 100vw;
}
</style>
