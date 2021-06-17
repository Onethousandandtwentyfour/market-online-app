<template>
  <tabbar>
    <template v-for="item of tabbarList">
      <tabbar-item :path="item.path" :key="item.path">
        <template #actived-icon>
          <img :src="item.activedIcon" />
        </template>
        <template #icon>
          <img :src="item.icon" />
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

import { LoadLocalImg } from "@/util";
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
          activedIcon: LoadLocalImg("tabbarhome.actived.png"),
          icon: LoadLocalImg("tabbarhome.png"),
          text: "首页"
        },
        {
          path: "/category",
          activedIcon: LoadLocalImg("icon_tabbar_gzt_default.actived.png"),
          icon: LoadLocalImg("icon_tabbar_gzt_default.png"),
          text: "分类"
        },
        {
          path: "/cart",
          activedIcon: LoadLocalImg("tabbar-bookmark.actived.png"),
          icon: LoadLocalImg("tabbar-bookmark.png"),
          text: "购物车"
        },
        {
          path: "/user",
          activedIcon: LoadLocalImg("icontabbarmyup.actived.png"),
          icon: LoadLocalImg("icontabbarmyup.png"),
          text: "我的"
        }
      ]
    };
  },
  computed: {}
};
</script>
