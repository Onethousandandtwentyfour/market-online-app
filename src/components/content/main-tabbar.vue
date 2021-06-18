<template>
  <tabbar>
    <template v-for="item of tabbarList">
      <tabbar-item :path="item.path" :key="item.path">
        <template #actived-icon>
          <img :src="loadLocalImgComp(item.activedIcon)" />
        </template>
        <template #icon>
          <img :src="loadLocalImgComp(item.icon)" />
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
          activedIcon: "tabbar/tabbarhome.actived.png",
          icon: "tabbar/tabbarhome.png",
          text: "首页"
        },
        {
          path: "/category",
          activedIcon: "tabbar/icon_tabbar_gzt_default.actived.png",
          icon: "tabbar/icon_tabbar_gzt_default.png",
          text: "分类"
        },
        {
          path: "/cart",
          activedIcon: "tabbar/tabbar-bookmark.actived.png",
          icon: "tabbar/tabbar-bookmark.png",
          text: "购物车"
        },
        {
          path: "/user",
          activedIcon: "tabbar/icontabbarmyup.actived.png",
          icon: "tabbar/icontabbarmyup.png",
          text: "我的"
        }
      ]
    };
  }
};
</script>
