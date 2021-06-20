<template>
  <nav-bar class="nav-bar-box">
    <template #left>
      <div
        class="nav-back-btn iconfont icon-Icon-fanhui"
        @click="routeBack"
      ></div>
    </template>
    <template #center>
      <div class="nav-center">
        <template v-for="(item, index) of navbarTitle">
          <div
            :class="{ actived: index == current }"
            :data-index="index"
            @click="navClick"
            :key="item.text"
          >
            {{ item.text }}
          </div>
        </template>
      </div>
    </template>
  </nav-bar>
</template>
<script>
import NavBar from "@/components/common/navbar";
export default {
  name: "detail-navbar",
  components: {
    NavBar
  },
  data() {
    return {
      current: 0,
      navbarTitle: [
        { text: "商品" },
        { text: "参数" },
        { text: "评论" },
        { text: "推荐" }
      ]
    };
  },
  methods: {
    navClick(ev) {
      const { index } = ev.currentTarget.dataset;
      this.current = index * 1;
    },
    routeBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.nav-bar-box {
  .nav-back-btn {
    padding: 0 4vw;
    position: relative;
    font-size: 25px;
    color: var(--normal-color);
  }

  .nav-center {
    padding: 0 20vw 0 0;
    font-size: 13px;
    white-space: nowrap;
    display: flex;
    justify-content: space-evenly;
  }

  .actived {
    color: var(--normal-color);
  }
}
</style>
