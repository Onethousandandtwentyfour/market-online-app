<template>
  <div class="feature-view-outer">
    <template v-for="item of dataSource">
      <div
        class="fv-img-box bg-contain"
        :style="loadNetworkImgToBgComp(item.acm)"
        :key="item.acm"
      ></div>
    </template>
  </div>
</template>
<script>
export default {
  name: "feature-view",
  props: {
    dataSource: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="less" scoped>
.feature-view-outer {
  width: 100%;
  position: relative;

  .fv-img-box {
    width: 100%;
  }
}
</style>
