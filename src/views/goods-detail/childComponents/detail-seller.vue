<template>
  <div class="detail-seller-outer" v-if="dataSource">
    <div class="seller-title">
      <img class="seller-img" />
      <span class="seller-name">{{ dataSource.sellerNickName }}</span>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  name: "detail-seller",
  props: {
    dataSource: {
      type: Object,
      default: null
    }
  }
};
</script>
<style lang="less" scoped>
.detail-seller-outer {
  border-radius: 5px;
  background: rgba(255, 255, 255, 1);
  margin: 10px;
  padding: 10px;
  text-align: left;

  .seller-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .seller-img {
      width: 55px;
      height: 55px;
      background: #666;
      border-radius: 50%;
    }
    .seller-name {
      margin-left: 10px;
      font-size: 18px;
      color: #666;
    }
  }
}
</style>
