<template>
  <div class="controller-tabbar-outer">
    <template v-for="(item, index) of title">
      <div
        class="ct-inner"
        :class="{ active: index == currentIndex }"
        :key="item.title"
        @click="controlClick"
        :data-index="index"
      >
        <span>
          {{ item.text }}
        </span>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "controller-tabbar",
  props: {
    title: {
      type: Array,
      default: () => [{ text: "传入title", key: "selfKey" }]
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    controlClick(ev) {
      const { index } = ev.currentTarget.dataset;
      this.currentIndex = index * 1;
      this.$emit("change", { ...this.title[index], index });
    }
  }
};
</script>
<style lang="less" scoped>
.controller-tabbar-outer {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  line-height: 50px;
  background: rgb(255, 255, 255);

  .ct-inner {
    flex: 1;
    font-size: 15px;
    padding: 0 5px;

    span {
      padding: 5px;
      border: 3px solid transparent;
      border-radius: 50%;
    }
  }

  @activeColor: rgba(255, 0, 0, 0.8);
  .active {
    color: @activeColor;

    span {
      border-bottom-color: @activeColor;
    }
  }
}
</style>
