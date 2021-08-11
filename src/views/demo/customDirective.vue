<template>
  <div>
    <h1>自定义指令-{{name}}</h1>
    <div>
      <h5>mounted时自动获得焦点</h5>
      <input placeholder="写点什么" v-focus:[arg].abc.def="focus" />
    </div>
  </div>
</template>
<script>
export default {
  name: "custom-directive",
  data () {
    return {
      name: '',
      focus: 0,
      arg: 'input'
    }
  },
  mounted () {
    setTimeout(() => {
      this.focus = 300;
      this.name = 'focus';
      this.arg = 'fixed';
    }, 3000);
  },
}
</script>
<style lang="less" scoped>
</style>