<template>
  <div class="nav-bar-outer" :style="outerStyle">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="center">
      <slot name="center" />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-bar",
  props: {
    bgColor: {
      type: String,
      default: "rgb(255,255,255)"
    }
  },
  computed: {
    outerStyle() {
      return {
        backgroundColor: this.bgColor
      };
    }
  }
};
</script>
<style lang="less" scoped>
.nav-bar-outer {
  width: 100%;
  display: flex;

  & div {
    flex: 1;
    line-height: 44px;
    overflow: hidden;
  }

  .left {
    position: relative;
  }

  .center {
    position: relative;
  }

  .right {
    position: relative;
  }
}
</style>
