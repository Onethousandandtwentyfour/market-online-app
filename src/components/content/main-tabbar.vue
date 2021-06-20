<template>
  <tabbar>
    <template v-for="item of tabbarList">
      <tabbar-item
        :path="item.path"
        :key="item.path"
        actived-color="var(--normal-color"
      >
        <template #icon>
          <div :class="item.icon"></div>
        </template>
        <template #text>
          <span>{{ item.text }}</span>
        </template>
      </tabbar-item>
    </template>
  </tabbar>
</template>
<script>
import Tabbar from "@/components/common/tabbar/tabbar";
import TabbarItem from "@/components/common/tabbar/tabbar-item";

export default {
  name: "main-tabbar",
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      tabbarList: [
        {
          path: "/home",
          icon: "iconfont icon-tabbarhome",
          text: "首页"
        },
        {
          path: "/category",
          icon: "iconfont icon-icon_tabbar_gzt_default",
          text: "分类"
        },
        {
          path: "/cart",
          icon: "iconfont icon-tabbar-bookmark",
          text: "购物车"
        },
        {
          path: "/user",
          icon: "iconfont icon-icontabbarmyup",
          text: "我的"
        }
      ]
    };
  }
};
</script>
