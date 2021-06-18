<template>
  <div class="goods-list-outer">
    <template v-for="item in dataSource">
      <goods-item :goods="item" :key="item.image" />
    </template>
  </div>
</template>
<script>
import GoodsItem from "./item";

export default {
  name: "goods-list",
  components: {
    GoodsItem
  },
  props: {
    dataSource: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="less" scoped>
.goods-list-outer {
  display: flex;
  flex-wrap: wrap;
}
</style>
