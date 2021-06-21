<template>
  <div class="page-outer">
    <nav-bar bg-color="var(--normal-color)">
      <template #center>
        <div class="home-nav-bar">哇哈哈商城</div>
      </template>
    </nav-bar>
    <vue-better-scroll
      ref="bsscroll"
      class="page-inner"
      :pull-up="true"
      :pull-down="true"
      :has-more-data="showNoMoreData"
      :show-back-top-min="showBackTopMin"
      :show-top-fixed-min="showBackTopMin"
      @pullingDown="pullingDown"
      @pullingUp="pullingUp"
    >
      <home-swiper :data-source="banner" />
      <recommend-view :data-source="recommend" />
      <feature-view />
      <controller-tabbar
        ref="ct_ins_1"
        :title="categoryDataSource.title"
        @change="cateGoryChange"
      />
      <goods-list :dataSource="goodsListDataSource" />
      <template #topfixed>
        <controller-tabbar
          ref="ct_ins_2"
          :title="categoryDataSource.title"
          @change="cateGoryChange"
        />
      </template>
    </vue-better-scroll>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar";
import HomeSwiper from "./childComponents/home-swiper";
import RecommendView from "./childComponents/recommend-view";
import FeatureView from "./childComponents/feature-view";
import ControllerTabbar from "@/components/content/controller-tabbar";
import GoodsList from "@/components/content/goods/list";
import VueBetterScroll from "@/components/content/vue-better-scroll";
//api
import {
  queryHomeBannerAndRecommendDataAsync,
  queryHomeCategotyDataAsync
} from "@/network/modal/home";

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    ControllerTabbar,
    GoodsList,
    VueBetterScroll
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
          pop: { isMax: false, page: 0, dataSource: [] },
          news: { isMax: false, page: 0, dataSource: [] },
          sell: { isMax: false, page: 0, dataSource: [] }
        },
        currentShowKey: ""
      },
      goodsItemClickHandler: null
    };
  },
  computed: {
    goodsListDataSource() {
      return (
        this.categoryDataSource.data[this.categoryDataSource.currentShowKey]
          ?.dataSource ?? []
      );
    },
    showNoMoreData() {
      return (
        this.categoryDataSource.data[this.categoryDataSource.currentShowKey]
          ?.isMax ?? false
      );
    },
    showBackTopMin() {
      const fullW = window.innerWidth;
      return ((fullW * 390) / 750 + 114 + (fullW * 220) / 300) * -1;
    }
  },
  created() {
    this.queryHomeBannerAndRecommendDataTri();
    this.goodsItemClickHandler = ({ itemId }) => {
      const { currentShowKey } = this.categoryDataSource;
      this.$router.push({
        path: "/goods-detail",
        query: {
          type: currentShowKey,
          id: itemId
        }
      });
    };
    this.$bus.$on("goodsItemClick", this.goodsItemClickHandler);
  },
  beforeDestroy() {
    this.$bus.$off("goodsItemClick", this.goodsItemClickHandler);
  },
  methods: {
    //触发--查询首页banner及recommend数据
    async queryHomeBannerAndRecommendDataTri() {
      try {
        const {
          banner,
          recommend
        } = await queryHomeBannerAndRecommendDataAsync();
        this.banner = banner?.list ?? this.banner;
        this.recommend = recommend?.list ?? this.recommend;
      } catch (err) {
        console.log("queryHomeBannerAndRecommendDataTri err", err);
      }
    },
    //执行-请求查询分类数据
    async queryHomeCategotyDataByTypeExe(params, type = "load") {
      try {
        !params.hasOwnProperty("size") && (params["size"] = 6);
        const resp = await queryHomeCategotyDataAsync(params);
        //数据加载成功后再page++
        this.categoryDataSource.data[params.type].page++;
        //有数据就push
        if (resp.data.length > 0) {
          if ("reset" === type) {
            this.categoryDataSource.data[params.type].dataSource = resp.data;
          } else {
            this.categoryDataSource.data[params.type].dataSource.push(
              ...resp.data
            );
          }
        }
        //是否还有更多数据--本次响应数据length小于size,且当前page*size大于total
        this.categoryDataSource.data[params.type].isMax =
          resp.data.length < params.size ||
          this.categoryDataSource.data[params.type].page * params.size >
            resp.total;
        console.log(
          `${params.type}下第${params.page}页,每页${params.size}条,共${resp.total}条数据`,
          this.categoryDataSource.data[params.type].isMax
            ? "没有更多数据"
            : "还有数据"
        );
      } catch (err) {
        console.log("queryHomeCategotyDataByTypeExe err", err);
        this.categoryDataSource.data[params.type].isMax = true;
      } finally {
        return this.categoryDataSource.data[params.type].isMax;
      }
    },
    //触发-查询分类数据-分页
    async queryHomeCategotyDataByTypeTri(type = "load") {
      if (!this.categoryDataSource.currentShowKey) return;
      const currentShowKey = this.categoryDataSource.currentShowKey,
        currentData = this.categoryDataSource.data[currentShowKey];
      if (currentData.isMax) {
        console.log(`类别-${currentShowKey}-的数据已达最大`);
        return;
      }
      const params = {
        type: this.categoryDataSource.currentShowKey,
        page: currentData.page + 1
      };
      return this.queryHomeCategotyDataByTypeExe(params, type);
    },
    //切换分类
    cateGoryChange(ev) {
      const { key, index } = ev;
      !!ev && (this.categoryDataSource.currentShowKey = key);
      this.$refs.ct_ins_1.currentIndex = index * 1;
      this.$refs.ct_ins_2.currentIndex = index * 1;

      this.$nextTick(() => {
        this.$refs.bsscroll.resetBsPullState();
      });
    },
    //触发下拉
    pullingDown(next) {
      const ckey = this.categoryDataSource.currentShowKey;
      if (!ckey) {
        console.log("初始化---");
        const firstKey = this.categoryDataSource.title[0].key;
        for (const item of this.categoryDataSource.title) {
          this.queryHomeCategotyDataByTypeExe(
            {
              type: item.key,
              page: 1
            },
            "reset"
          ).then(() => {
            if (firstKey === item.key) {
              this.categoryDataSource.currentShowKey = firstKey;
              this.$nextTick(() => {
                next();
              });
            }
          });
        }
      } else {
        Object.assign(this.categoryDataSource.data[ckey], {
          page: 0,
          isMax: false
        });
        console.warn(
          `${ckey}重置到${this.categoryDataSource.data[ckey].page}页`
        );
        this.queryHomeCategotyDataByTypeTri("reset").then(() => {
          this.$nextTick(() => {
            next();
          });
        });
      }
    },
    //触发上拉
    pullingUp(next) {
      this.queryHomeCategotyDataByTypeTri().then(isMax => {
        next(isMax);
      });
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
    flex: 1;
    font-size: 16px;
    color: rgb(255, 255, 255);
  }

  .page-inner {
    width: 100%;
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
}
</style>
