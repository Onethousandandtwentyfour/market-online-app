<template>
  <div class="common-tabbar-outer">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "tabber"
};
</script>
<style lang="less" scoped>
.common-tabbar-outer {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.1);
}
</style>
