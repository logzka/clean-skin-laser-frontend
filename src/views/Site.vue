<template lang="pug">
.site
  p this is the site!
  el-button(
    plain

    @click="click"
  ) button
  el-calendar
</template>

<script>
export default {
  name: 'site-view',
  components: {
  },
  methods: {
    click(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="stylus" scoped>
.site
  color pink
</style>
