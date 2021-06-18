<template>
  <div class="recommend-outer">
    <template v-for="item of dataSource">
      <div :key="item.acm">
        <div
          :style="loadNetworkImgToBgComp(item.image)"
          class="recommend-img bg-contain"
        ></div>
        <span>{{ item.title }}</span>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "recommend-view",
  props: {
    dataSource: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="less" scoped>
.recommend-outer {
  padding-top: 14px;
  display: flex;
  flex-wrap: wrap;

  & div {
    flex: 1;
    min-width: 70px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .recommend-img {
      flex-shrink: 0;
      width: 70px;
      height: 70px;
    }

    span {
      display: block;
      font-size: 18px;
      line-height: 30px;
      transform: scale(0.7);
    }
  }
}
</style>
