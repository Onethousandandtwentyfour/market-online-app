<template>
  <div class="bs-scroll-outer" v-bind="$attrs">
    <div ref="wrapper" class="wrapper">
      <div>
        <div class="pull-down-loading">
          <div v-show="beforePullDown">
            <span style="color:orange">释放开始刷新</span>
          </div>
          <div v-show="!beforePullDown">
            <div v-show="isPullingDown">
              <span style="color:deeppink">刷新中...</span>
            </div>
            <div v-show="!isPullingDown">
              <span style="color:green">刷新成功</span>
            </div>
          </div>
        </div>
        <slot name="default"></slot>
        <div class="no-more-data-tips">{{ showNoMoreDataText }}</div>
      </div>
    </div>
    <div v-show="showTopFixed" class="top-fixed">
      <slot name="topfixed"></slot>
    </div>
    <back-top v-if="showBackTop" @click.native="backTopClick" />
  </div>
</template>
<script>
import BackTop from "./back-top";
// plugin
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import PullDown from "@better-scroll/pull-down";
BScroll.use(PullDown);
BScroll.use(Pullup);
export default {
  name: "vue-better-scroll",
  inheritAttrs: false,
  components: {
    BackTop
  },
  props: {
    showBackTopByOuter: {
      type: Boolean,
      default: true
    },
    showBackTopMin: {
      type: Number,
      default: -250,
      validator(val) {
        return !isNaN(Number(val)) && val < 0;
      }
    },
    showTopFixedMin: {
      type: Number,
      default: -250,
      validator(val) {
        return !isNaN(Number(val)) && val < 0;
      }
    },
    hasMoreData: Boolean
  },
  data() {
    return {
      bsInstance: null,
      showBackTopByInner: false,
      showTopFixed: false,
      beforePullDown: true,
      isPullingDown: true
    };
  },
  computed: {
    showBackTop() {
      return this.showBackTopByOuter && this.showBackTopByInner;
    },
    showNoMoreDataText() {
      return this.hasMoreData ? "没有更多数据" : "请稍后...";
    }
  },
  mounted() {
    this.initBsInstance();
  },
  destroyed() {
    this.resetBsPullState();
  },
  methods: {
    //初始化bs
    initBsInstance() {
      this.bsInstance = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: 3,
        pullUpLoad: true,
        pullDownRefresh: true
      });
      this.bsInstance.on("scroll", this.scrollHandler);
      this.bsInstance.on("pullingUp", this.pullingUpHandler);
      this.bsInstance.on("pullingDown", this.pullingDownHandler);
      this.pullingDownHandler();
    },
    //重置better-scroll状态
    resetBsPullState() {
      this.bsInstance &&
        (this.bsInstance.finishPullDown(),
        this.bsInstance.finishPullUp(),
        this.bsInstance.refresh());
    },
    //回到顶部
    backTopClick() {
      this.bsInstance
        ? this.bsInstance.scrollTo(0, 0, 0)
        : console.log("this.bsInstance无效");
    },
    //滚动中回调
    scrollHandler({ y }) {
      // backtop
      y < this.showBackTopMin !== this.showBackTopByInner &&
        (this.showBackTopByInner = y < this.showBackTopMin);
      //topfixed
      y < this.showTopFixedMin !== this.showTopFixed &&
        (this.showTopFixed = y < this.showTopFixedMin);
    },
    //下拉触发事件
    pullingDownHandler() {
      const pullingDownCallback = (isMax = false) => {
        this.isPullingDown = false;
        if (!isMax) {
          this.bsInstance.finishPullDown();
        }
        this.bsInstance.finishPullUp(); //最后一页刷新
        this.bsInstance.refresh();
        setTimeout(() => {
          this.isPullingDown = true;
          this.beforePullDown = true;
        }, 500);
      };
      this.beforePullDown = false;
      this.$emit("pullingDown", pullingDownCallback.bind(this));
    },
    //上拉触发事件
    pullingUpHandler() {
      const pullingUpCallback = (isMax = false) => {
        if (!isMax) {
          this.bsInstance.finishPullUp();
        }
        this.bsInstance.finishPullDown(); //第一页数据没返回时 上拉
        this.bsInstance.refresh();
      };
      this.$emit("pullingUp", pullingUpCallback.bind(this));
    }
  }
};
</script>
<style lang="less" scoped>
.bs-scroll-outer {
  position: relative;

  .wrapper {
    width: 100%;
    height: 100%;
    .pull-down-loading {
      position: absolute;
      width: 100%;
      padding: 11px;
      box-sizing: border-box;
      transform: translateY(-100%) translateZ(0);
      text-align: center;
      color: darkgreen;
    }
    .no-more-data-tips {
      font-size: 14px;
      line-height: 5;
      text-align: center;
      color: deeppink;
    }
  }

  .top-fixed {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
}
</style>
