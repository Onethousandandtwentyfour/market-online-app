<template>
  <tabbar>
    <template v-for="item of tabbarList">
      <tabbar-item :path="item.path" :key="item.path">
        <template #actived-icon>
          <div
            class="bg-contain"
            :style="loadNetworkImgToBgComp(loadLocalImgComp(item.activedIcon))"
          ></div>
        </template>
        <template #icon>
          <div
            class="bg-contain"
            :style="loadNetworkImgToBgComp(loadLocalImgComp(item.icon))"
          ></div>
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
          activedIcon: "common/tabbar/tabbarhome.actived.png",
          icon: "common/tabbar/tabbarhome.png",
          text: "首页"
        },
        {
          path: "/category",
          activedIcon: "common/tabbar/icon_tabbar_gzt_default.actived.png",
          icon: "common/tabbar/icon_tabbar_gzt_default.png",
          text: "分类"
        },
        {
          path: "/cart",
          activedIcon: "common/tabbar/tabbar-bookmark.actived.png",
          icon: "common/tabbar/tabbar-bookmark.png",
          text: "购物车"
        },
        {
          path: "/user",
          activedIcon: "common/tabbar/icontabbarmyup.actived.png",
          icon: "common/tabbar/icontabbarmyup.png",
          text: "我的"
        }
      ]
    };
  }
};
</script>
