<template>
  <div class="goods-detail-outer">
    <detail-navbar />
    <detail-swiper :data-source="swiperDataSource" />
    <detail-card :data-source="goodsDetail" />
    <detail-seller :data-source="goodsDetail" />
  </div>
</template>
<script>
import DetailNavbar from "./childComponents/detail-navbar";
import DetailSwiper from "./childComponents/detail-swiper";
import DetailCard from "./childComponents/detail-card";
import DetailSeller from "./childComponents/detail-seller";

// api
import { queryGoodsDetailByIdAsync } from "@/network/modal/goods-detail";
export default {
  name: "goods-detail",
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailCard,
    DetailSeller
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
    }
  },
  mounted() {
    const { type, id } = this.$route.query;
    console.log(`type:${type}`, `id:${id}`);
    this.queryGoodsDetailByIdExe({ type, id }).then(data => {
      this.goodsDetail = data;
    });
  },
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
}
</style>
00
