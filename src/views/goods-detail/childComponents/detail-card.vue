<template>
  <div class="detail-card-outer" v-if="dataSource">
    <div class="dc-name">{{ dataSource.itemName }}</div>
    <div class="dc-name re-name">{{ dataSource.creativeTitle }}</div>
    <div class="price-box">
      <span class="cd-price price-label">￥</span>
      <span class="cd-price">{{ dataSource.promotionPrice }}</span>
      <span class="cd-price old-price" v-if="showOldPrice"
        >￥{{ dataSource.price }}</span
      >
    </div>
    <div class="card-tips-box">
      <span>月销{{ dataSource.monthSellCount }}</span>
      <span>免邮费</span>
      <span>72小时发货</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "detail-card",
  props: {
    dataSource: {
      type: Object,
      default: null
    }
  },
  computed: {
    showOldPrice() {
      return (
        (!!this.dataSource &&
          this.dataSource.price > this.dataSource.promotionPrice) ||
        false
      );
    }
  }
};
</script>
<style lang="less" scoped>
.detail-card-outer {
  border-radius: 5px;
  background: rgba(255, 255, 255, 1);
  margin: 10px;
  padding: 10px;
  text-align: left;

  .dc-name {
    font-size: 18px;
    line-height: 24px;
  }

  .re-name {
    font-size: 14px;
    color: #666;
  }

  .price-box {
    white-space: nowrap;

    .cd-price {
      font-size: 18px;
      line-height: 24px;
      color: var(--normal-color);
    }

    .price-label {
      margin-right: 6px;
    }

    .old-price {
      margin-left: 20px;
      font-size: 12px;
      color: #666;
      text-decoration: line-through;
    }
  }

  .card-tips-box {
    margin-top: 6px;
    font-size: 14px;
    line-height: 20px;
    color: #666;
    display: flex;
    justify-content: space-between;
  }
}
</style>
