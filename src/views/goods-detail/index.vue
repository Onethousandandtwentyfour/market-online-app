<template>
  <div class="goods-detail-outer">
    <detail-navbar />
    <vue-better-scroll
      class="page-inner"
      :pull-up="false"
      :pull-down="false"
      :show-back-top-min="-windowInnerWidth"
      @pullingDown="pullingDown"
    >
      <detail-swiper :data-source="swiperDataSource" />
      <detail-card :data-source="goodsDetail" />
      <detail-seller :data-source="goodsDetail" />
      <div style="width:100%;height:100vh;background:rgba(25,0,0,0.1)"></div>
    </vue-better-scroll>
    <detail-tabbar />
  </div>
</template>
<script>
import DetailNavbar from "./childComponents/detail-navbar";
import DetailSwiper from "./childComponents/detail-swiper";
import DetailCard from "./childComponents/detail-card";
import DetailSeller from "./childComponents/detail-seller";
import DetailTabbar from "./childComponents/detail-tabbar";
import VueBetterScroll from "@/components/content/vue-better-scroll";
// api
import { queryGoodsDetailByIdAsync } from "@/network/modal/goods-detail";
export default {
  name: "goods-detail",
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailCard,
    DetailSeller,
    DetailTabbar,
    VueBetterScroll
  },
  data() {
    return {
      goodsDetail: null
    };
  },
  computed: {
    swiperDataSource() {
      return (
        (!!this.goodsDetail && [
          {
            acm: this.goodsDetail?.pic ?? "",
            image: this.goodsDetail?.pic ?? ""
          }
        ]) ||
        []
      );
    },
    windowInnerWidth() {
      return window.innerWidth;
    }
  },
  mounted() {},
  // activated() {
  //   const { type, id } = this.$route.query;
  //   console.log(`type:${type}`, `id:${id}`);
  //   this.queryGoodsDetailByIdExe({ type, id }).then(data => {
  //     this.goodsImgs = data;
  //   });
  // },
  // deactivated() {
  //   this.goodsImgs = [];
  // },
  methods: {
    //查询订单详情
    async queryGoodsDetailByIdExe(params) {
      let resp = [];
      try {
        resp = await queryGoodsDetailByIdAsync(params);
      } catch (err) {
        console.warn("queryGoodsDetailByIdExe err", err);
      } finally {
        return resp;
      }
    },
    pullingDown(next) {
      const { type, id } = this.$route.query;
      this.queryGoodsDetailByIdExe({ type, id })
        .then(data => {
          this.goodsDetail = data;
        })
        .then(() => {
          this.$nextTick(() => {
            next();
          });
        });
    }
  }
};
</script>
<style lang="less" scoped>
.goods-detail-outer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(240, 240, 240);

  .page-inner {
    width: 100%;
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
}
</style>
00
