<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="!$route.meta.noCaches" />
    </keep-alive>
    <router-view v-if="$route.meta.noCaches" />
    <main-tabbar v-if="$route.meta.showTabbar" />
  </div>
</template>
<script>
import MainTabbar from "@/components/content/main-tabbar";

export default {
  name: "app",
  components: {
    MainTabbar
  }
};
</script>
<style lang="less">
@import "./assets/style/base.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
