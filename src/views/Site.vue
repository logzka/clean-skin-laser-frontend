<template lang="pug">
.site
  el-container.site-container
    site-header
    site-main
    site-footer
</template>

<script>
import SiteHeader from '@/components/site/SiteHeader.vue';
import SiteMain from '@/components/site/SiteMain.vue';
import SiteFooter from '@/components/site/SiteFooter.vue';

export default {
  name: 'site-view',
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter,
  },
  methods: {
  },
};
</script>

<style lang="stylus" scoped>
.site
  &-container
    display grid
    grid-template-rows 60px calc(100vh - 120px) 60px
</style>
