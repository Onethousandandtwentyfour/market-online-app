<template>
  <div class="page-outer">
    <h1>分类</h1>
    <div
      class="favorites"
      :style="
        loadNetworkImgToBgComp(loadLocalImgComp('goods/detail_bottom.png'))
      "
    ></div>
  </div>
</template>
<script>
export default {
  name: "category"
};
</script>
<style lang="less" scoped>
.page-outer {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  @favoriteImgWidth: 140px;
  .favorites {
    width: @favoriteImgWidth;
    height: @favoriteImgWidth;
    background-size: @favoriteImgWidth calc(@favoriteImgWidth * 300 / 44);
    background-repeat: no-repeat;
    background-position: 0 0;
  }
}
</style>
