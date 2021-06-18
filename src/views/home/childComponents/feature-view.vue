<template>
  <div class="feature-view-outer">
    <template v-for="item of dataSource">
      <img
        class="fv-img-box bg-contain"
        :src="loadLocalImgComp(item.image)"
        :key="item.acm"
      />
    </template>
  </div>
</template>
<script>
export default {
  name: "feature-view",
  props: {
    dataSource: {
      type: Array,
      default: () => [
        {
          acm: "default-key-acm",
          image: "home/recommend_bg.jpg"
        }
      ]
    }
  }
};
</script>
<style lang="less" scoped>
.feature-view-outer {
  width: 100%;
  position: relative;
  padding: 10px;

  .fv-img-box {
    object-fit: contain;
    width: 100%;
  }
}
</style>
