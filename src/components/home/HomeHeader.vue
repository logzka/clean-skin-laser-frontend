<template lang="pug">
el-header.home-header
  .home-header-inner.h-100.flex.space-between.align-center
    el-icon.home-header__mobile-burger(
      @click="this.$refs.homeHeaderMenu.openMobileHomeHeaderMenu()"
      )
      Expand

    router-link.home-header__logo(
        to="/"
    ) D &#149; Aesthetic Studio

    home-header-menu(
      ref="homeHeaderMenu"
      )

    a.el-button.el-button--success.el-button--large(
        href="tel:+79604867349"
        ) Позвонить
</template>

<script>
import HomeHeaderMenu from './home-header/HomeHeaderMenu.vue';

export default {
  components: {
    HomeHeaderMenu,
  },
};
</script>

<style lang="stylus" scoped>
.home-header
    --el-header-height 100px
    --el-header-padding 0 40px
    border-bottom 4px solid transparent
    border-image linear-gradient(#2CC990, #9684A3)
    -moz-border-image -moz-linear-gradient(#2CC990, #9684A3)
    -webkit-border-image -webkit-linear-gradient(45deg, #2CC990, #9684A3)
    border-image-slice 1
    position sticky
    top 0
    background rgba(#fff, .8)
    backdrop-filter blur(10px)

    z-index 2001
    &-inner
        padding 12px 0
    &__logo
      font-weight bold
      background linear-gradient(-60deg, #2CC990, #2CC990, #9684A3,  #9684A3)
      background-size 300%
      background-clip text
      -webkit-background-clip text
      -webkit-text-fill-color transparent
      animation 8s logo-animation ease-in-out infinite
    &__mobile-burger
      display none
      color #9684A3
      font-size 26px
      cursor pointer

@keyframes logo-animation
    0%
      background-position 0 50%
    50%
      background-position 100% 50%
    100%
      background-position 0 50%

@media screen and (max-width: 1100px)
  .home-header
    --el-header-padding 0 20px
    &__mobile-burger
      display block
    &__logo
      display none
</style>
