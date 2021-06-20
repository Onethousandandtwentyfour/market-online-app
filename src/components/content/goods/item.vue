<template>
  <div class="goods-item-outer" v-if="goods" @click.stop="goodsClick">
    <div
      class="gi-img bg-contain"
      :style="loadNetworkImgToBgComp(goods.pic)"
    ></div>
    <div class="gi-title">
      <span>
        {{ goods.itemName }}
      </span>
    </div>
    <div class="gi-footer">
      <span class="price-title">￥</span>
      <span class="price-val">{{ goods.price }}</span>
      <div
        class="favorites"
        :style="
          loadNetworkImgToBgComp(loadLocalImgComp('goods/detail_bottom.png'))
        "
      ></div>
      <span class="saled">{{ goods.monthSellCount }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "goods-item",
  props: {
    goods: {
      type: Object,
      default: null
    }
  },
  methods: {
    goodsClick() {
      this.$router.push("/goods-detail");
    }
  }
};
</script>
<style lang="less" scoped>
.goods-item-outer {
  width: 50%;
  padding: 12px 10px 0;

  .gi-img {
    width: 100%;
    height: 168px;
    overflow: hidden;
  }
  .gi-title {
    margin: 6px 0 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* 限制在一个块元素显示的文本的行数 */
    -webkit-box-orient: vertical; /* 垂直排列 */
    text-overflow: ellipsis;
    color: #9b9b9b;
    font-size: 14px;
    height: 20px;
    line-height: 20px;

    span {
      vertical-align: middle;
    }
  }

  .gi-footer {
    transform-origin: left center;
    transform: scale(0.9);
    line-height: 20px;

    span {
      vertical-align: baseline;
    }

    .price-title {
      font-size: 18px;
      color: #fd3f31;
    }

    .price-val {
      margin-left: 2px;
      text-align: left;
      font-size: 18px;
      color: #fd3f31;
    }

    @favoriteImgWidth: 14px;
    .favorites {
      display: inline-block;
      vertical-align: baseline;
      margin: 0 4px;
      width: @favoriteImgWidth;
      height: @favoriteImgWidth;
      background-size: @favoriteImgWidth calc(@favoriteImgWidth * 300 / 44);
      background-repeat: no-repeat;
      background-position: 0 0;
    }

    .saled {
      font-size: 14px;
      color: #9b9b9b;
    }
  }
}
</style>
