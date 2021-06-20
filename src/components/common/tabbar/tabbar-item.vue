<template>
  <div
    class="common-tabbar-item-outer"
    :style="activeStyle"
    @click.stop="tabbarItemClick"
  >
    <div class="icon-outer">
      <slot name="icon"></slot>
    </div>
    <div class="title-outer">
      <slot name="text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "common-tabber-item",
  props: {
    path: {
      type: String,
      default: ""
    },
    activedColor: {
      type: String,
      default: "rgb(255,0,0)"
    }
  },
  computed: {
    activeStyle() {
      return {
        color: this.isActived ? this.activedColor : "rgb(0,0,0,0.5)"
      };
    },
    isActived() {
      return !!this.path && this.$route.path.includes(this.path);
    }
  },
  methods: {
    tabbarItemClick() {
      !this.isActived && this.$router.push(this.path);
    }
  }
};
</script>
<style lang="less" scoped>
.common-tabbar-item-outer {
  flex: 1;
  height: 49px;

  .icon-outer {
    margin-top: 8px;
    display: flex;
    justify-content: center;

    div {
      font-size: 17px;
    }
  }
  .title-outer {
    span {
      display: block;
      font-size: 14px;
      line-height: 24px;
    }
  }
}
</style>
