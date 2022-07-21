<template lang="pug">
.home
  el-container.home-container
    home-header
    home-main
    home-footer
</template>

<script>
import HomeHeader from '@/components/home/HomeHeader.vue';
import HomeMain from '@/components/home/HomeMain.vue';
import HomeFooter from '@/components/home/HomeFooter.vue';

export default {
  name: 'home-view',
  components: {
    HomeHeader,
    HomeMain,
    HomeFooter,
  },
  methods: {
  },
};
</script>

<style lang="stylus" scoped>
.home
  &-container
    display grid
    grid-template-rows auto 1fr auto
    min-height 100vh
</style>
