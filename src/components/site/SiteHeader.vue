<template lang="pug">
el-header.header
  .header-inner
    router-link.logo(
        to="/"
    ) CS Laser Studio
    header-menu
    el-button Связаться
</template>

<script>
import HeaderMenu from './header/HeaderMenu.vue';

export default {
  components: {
    HeaderMenu,
  },
};
</script>

<style lang="stylus" scoped>
.header
    border-bottom 4px solid transparent
    border-image linear-gradient(#2CC990, #9684A3)
    -moz-border-image -moz-linear-gradient(#2CC990, #9684A3)
    -webkit-border-image -webkit-linear-gradient(45deg, #2CC990, #9684A3)
    border-image-slice 1
    &-inner
        padding 12px 0
        display flex
        justify-content space-between
        align-items center
        .logo
            font-weight bold
            background linear-gradient(-60deg, #2CC990, #2CC990, #9684A3,  #9684A3)
            background-size 300%
            background-clip text
            -webkit-background-clip text
            -webkit-text-fill-color transparent
            animation 16s logo-animation ease-in-out infinite

@keyframes logo-animation
    0%
      background-position 0 50%
    50%
      background-position 100% 50%
    100%
      background-position 0 50%
</style>
