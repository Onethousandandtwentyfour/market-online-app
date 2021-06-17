<template>
  <div class="page-outer">
    <nav-bar bg-color="rgb(255,0,0)">
      <template #center>
        <div class="home-nav-bar">哇哈哈商城</div>
      </template>
    </nav-bar>
    <swiper ref="mySwiper" :options="swiperOptions">
      <template v-for="item of banner">
        <swiper-slide :key="item.acm">
          <div
            class="swiper-img-box"
            :style="LoadNetworkImgToBg(item.image)"
          ></div>
        </swiper-slide>
      </template>
    </swiper>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar";
//api
import { queryHomeData } from "@/network/modal/home";
//util
import { LoadNetworkImgToBg } from "@/util";
export default {
  name: "home",
  components: {
    NavBar
  },
  data() {
    return {
      swiperOptions: {
        direction: "horizontal",
        observer: true,
        loop: true,
        autoplay: true
      },
      banner: [],
      recommend: [],
      keywords: []
    };
  },
  computed: {
    LoadNetworkImgToBg() {
      return imgName => {
        return LoadNetworkImgToBg(imgName);
      };
    }
  },
  async created() {
    try {
      const { banner, recommend, keywords } = await queryHomeData();
      this.banner = banner?.list ?? this.banner;
      this.recommend = recommend?.list ?? this.recommend;
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

  .swiper-img-box {
    width: 100vw;
    height: calc(100vw * 390 / 750);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
