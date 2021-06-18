<template>
  <div
    class="back-top-outer bg-contain"
    :style="loadNetworkImgToBgComp(loadLocalImgComp('common/top.png'))"
  ></div>
</template>
<script>
export default {
  name: "back-top"
};
</script>
<style lang="less" scoped>
.back-top-outer {
  width: 50px;
  height: 50px;
  position: fixed;
  right: 15px;
  bottom: 60px;
}
</style>
