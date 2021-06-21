<template>
  <div class="detail-tabbar-outer">
    <div class="bar-icon-item">
      <div class="bar-icon cus-ser" :style="barIcon"></div>
      <div class="bar-text">客服</div>
    </div>
    <div class="bar-icon-item">
      <div class="bar-icon seller" :style="barIcon"></div>
      <div class="bar-text">店铺</div>
    </div>
    <div class="bar-icon-item">
      <div class="bar-icon favorite" :style="barIcon"></div>
      <div class="bar-text">收藏</div>
    </div>
    <div class="bar-btn-item orange">
      加入购物车
    </div>
    <div class="bar-btn-item deeppink">
      购买
    </div>
  </div>
</template>
<script>
export default {
  name: "detail-tabbar",
  computed: {
    barIcon() {
      return this.loadNetworkImgToBgComp(
        this.loadLocalImgComp("goods/detail_bottom.png")
      );
    }
  }
};
</script>
<style lang="less" scoped>
.detail-tabbar-outer {
  width: 100%;
  height: 49px;
  display: flex;
  text-align: center;
  background: white;

  .bar-icon-item {
    flex: 1;
    margin-top: 5px;

    @barIconWidth: 20px;
    .bar-icon {
      margin: 0 auto;
      width: @barIconWidth;
      height: @barIconWidth;
      background-size: @barIconWidth calc(@barIconWidth * 300 / 44);
      background-repeat: no-repeat;

      &.cus-ser {
        background-position: 0 calc(-2.36 * @barIconWidth);
      }

      &.seller {
        background-position: 0 calc(-4.4 * @barIconWidth);
      }

      &.favorite {
        background-position: 0 calc(-1.18 * @barIconWidth);
      }
    }

    .bar-text {
      font-size: 20px;
      line-height: 1;
      padding-top: 10px;
      transform-origin: 50% 0%;
      transform: scale(0.6);
    }
  }

  .bar-btn-item {
    font-size: 16px;
    line-height: 49px;

    &.orange {
      padding: 0 20px;
      background: #f6d718;
    }

    &.deeppink {
      padding: 0 30px;
      color: white;
      background: deeppink;
    }
  }
}
</style>
