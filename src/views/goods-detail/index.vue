<template>
  <div class="goods-detail-outer">
    <detail-navbar />
    <detail-swiper />
  </div>
</template>
<script>
import DetailNavbar from "./childComponents/detail-navbar";
import DetailSwiper from "./childComponents/detail-swiper";
export default {
  name: "goods-detail",
  components: {
    DetailNavbar,
    DetailSwiper
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.goods-detail-outer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
00
