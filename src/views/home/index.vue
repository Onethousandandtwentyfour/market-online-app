<template>
  <div class="page-outer">
    <nav-bar bg-color="rgb(255,0,0)">
      <template #center>
        <div class="home-nav-bar">哇哈哈商城</div>
      </template>
    </nav-bar>
    <div class="page-inner">
      <home-swiper :data-source="banner" />
      <recommend-view :data-source="recommend" />
      <feature-view />
      <controller-tabbar
        :title="categoryDataSource.title"
        @change="cateGoryChange"
      />
      <goods-list :dataSource="goodsListDataSource" />
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar";
import HomeSwiper from "./childComponents/home-swiper";
import RecommendView from "./childComponents/recommend-view";
import FeatureView from "./childComponents/feature-view";
import ControllerTabbar from "@/components/content/controller-tabbar";
import GoodsList from "@/components/content/goods/list";
//api
import { queryHomeData, queryHomeDataByType } from "@/network/modal/home";

//debug data
const PopTotalData = require("./debug/pop.json");
const NewsTotalData = require("./debug/news.json");
const SellTotalData = require("./debug/sell.json");

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    ControllerTabbar,
    GoodsList
  },
  data() {
    return {
      banner: [],
      recommend: [],
      categoryDataSource: {
        title: [
          {
            text: "流行",
            key: "pop"
          },
          {
            text: "新款",
            key: "news"
          },
          {
            text: "精选",
            key: "sell"
          }
        ],
        data: {
          pop: { page: 0, dataSource: [] },
          news: { page: 0, dataSource: [] },
          sell: { page: 0, dataSource: [] }
        },
        currentShowKey: "pop"
      }
    };
  },
  computed: {
    goodsListDataSource() {
      return this.categoryDataSource.data[
        this.categoryDataSource.currentShowKey
      ].dataSource;
    }
  },
  created() {
    this.queryHomeDataAsync();
    this.queryHomeDataByTypeAsync("pop", 1);
  },
  methods: {
    async queryHomeDataAsync() {
      try {
        const { banner, recommend } = await queryHomeData();
        this.banner = banner?.list ?? this.banner;
        this.recommend = recommend?.list ?? this.recommend;
      } catch (err) {
        console.log("queryHomeDataAsync err", err);
      }
    },
    async queryHomeDataByTypeAsync(type, page) {
      this.categoryDataSource.data.pop.dataSource = PopTotalData;
      this.categoryDataSource.data.news.dataSource = NewsTotalData;
      this.categoryDataSource.data.sell.dataSource = SellTotalData;
      return;
      try {
        const resp = await queryHomeDataByType({ type, page });
      } catch (err) {
        console.log("queryHomeDataByTypeAsync err", err);
      }
    },
    cateGoryChange(ev) {
      const { key } = ev;
      !!ev && (this.categoryDataSource.currentShowKey = key);
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
  background: rgb(255, 255, 255);

  .home-nav-bar {
    font-size: 16px;
    color: rgb(255, 255, 255);
  }

  .page-inner {
    overflow: scroll;
    height: 100%;
    width: 100%;
    padding-bottom: 100px;
  }
}
</style>
