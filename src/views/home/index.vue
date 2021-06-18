<template>
  <div class="page-outer">
    <nav-bar bg-color="rgb(255,0,0)">
      <template #center>
        <div class="home-nav-bar">哇哈哈商城</div>
      </template>
    </nav-bar>
    <home-swiper :data-source="banner" />
    <recommend-view :data-source="recommend" />
    <feature-view :data-source="dKeyword" />
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar";
import HomeSwiper from "./childComponents/home-swiper";
import RecommendView from "./childComponents/recommend-view";
import FeatureView from "./childComponents/feature-view";
//api
import { queryHomeData } from "@/network/modal/home";

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data() {
    return {
      banner: [],
      recommend: [],
      dKeyword: [],
      keywords: []
    };
  },

  async created() {
    try {
      const { banner, recommend, dKeyword, keywords } = await queryHomeData();
      this.banner = banner?.list ?? this.banner;
      this.recommend = recommend?.list ?? this.recommend;
      this.dKeyword = dKeyword?.list ?? this.dKeyword;
      this.keywords = keywords?.list ?? this.keywords;
    } catch (err) {
      console.log("err", err);
    }
  }
};
</script>
<style lang="less" scoped>
.page-outer {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  .home-nav-bar {
    font-size: 16px;
    color: rgb(255, 255, 255);
  }
}
</style>
