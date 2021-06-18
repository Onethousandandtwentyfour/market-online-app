<template>
  <div v-bind="$attrs">
    <div ref="wrapper" class="wrapper">
      <div>
        <slot></slot>
      </div>
    </div>
    <back-top v-if="showBackTop" @click.native="backTopClick" />
  </div>
</template>
<script>
import BackTop from "./back-top";
// plugin
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
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
    }
  },
  data() {
    return {
      bsInstance: null,
      showBackTopByInner: false
    };
  },
  computed: {
    showBackTop() {
      return this.showBackTopByOuter && this.showBackTopByInner;
    }
  },
  mounted() {
    this.initBsInstance();
  },
  methods: {
    //初始化bs
    initBsInstance() {
      this.bsInstance = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: 3,
        pullUpLoad: true
      });
      this.bsInstance.on("scroll", this.scrollHandler);
      this.bsInstance.on("pullingUp", this.pullingUpHandler);
      this.pullingUpHandler();
    },
    //回到顶部
    backTopClick() {
      this.bsInstance
        ? this.bsInstance.scrollTo(0, 0, 0)
        : console.log("this.bsInstance无效");
    },
    //滚动中回调
    scrollHandler({ y }) {
      y < this.showBackTopMin !== this.showBackTopByInner &&
        (this.showBackTopByInner = y < this.showBackTopMin);
    },
    //上拉触发事件
    pullingUpHandler() {
      const pullingUpCallback = (isMax = false) => {
        if (!isMax) {
          this.bsInstance.finishPullUp();
        }
        this.bsInstance.refresh();
      };
      this.$emit("pullingUp", pullingUpCallback.bind(this));
    }
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;
}
</style>
