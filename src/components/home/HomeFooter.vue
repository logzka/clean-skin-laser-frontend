<template lang="pug">
el-footer.home-footer(
  )
  .home-footer-inner.w-100.flex.space-between.align-center.f-wrap
    .home-footer-inner__copy
      h2 D &#149; Epil Studio
      | &copy;&nbsp;Все права защищены,&nbsp;2022

    .home-footer-inner__menu
      home-footer-menu

    .home-footer-inner__social-info.h-100.flex.f-col.space-around
      ul.home-footer-inner__social-info_list.flex
        li.home-footer-inner__social-info_list-item
          a(href="https://instagram.com/" target="_blank")
            img(src="img/instagram-white.svg" alt="instagram ссылка")
        li.home-footer-inner__social-info_list-item
          a(href="/" target="_blank")
            img(src="img/telegram-white.svg" alt="telegram ссылка")
        li.home-footer-inner__social-info_list-item
          a(href="https://vk.com/" target="_blank")
            img(src="img/vk-white.svg" alt="vk ссылка")

      .home-footer-inner__social-info_phone
        a(href="tel:+79604867349") +7 (960) 486 73 49

      .home-footer-inner__social-info_address
        el-icon
          Location
        span Krasnodar, ul. Krasnaya, 144

    .home-footer-inner__buttons.flex.f-col
      el-button(
        type="info"
        plain
        aria-label="admin"
        name="admin"
        @click="$router.push({ name: 'login', params: { login_as: 'admin' } })"
        ) Администратору
      el-button.m-0(
        type="info"
        plain
        aria-label="manager"
        anme="manager"
        @click="$router.push({ name: 'login', params: { login_as: 'manager' } })"
        ) Менеджеру
</template>

<script>
import HomeFooterMenu from './home-footer/HomeFooterMenu.vue';

export default {
  components: {
    HomeFooterMenu,
  },
};
</script>

<style lang="stylus" scoped>
.home-footer
  background-image linear-gradient(45deg, #2CC990, #9684A3)
  color #EDF9FF
  --el-footer-height auto
  --el-footer-padding 40px
  &-inner
    &__buttons
      .el-button:first-child
        margin-bottom 15px

    &__social-info
      img
        width 28px
        height 28px
      &_list
        &-item
          margin-right 15px
          &:last-child
            margin-right 0px
      &_address
        .el-icon
          margin-right 5px
</style>

<style lang="stylus" scoped>
/** Less then 800 screen px */
@media screen and (max-width: 800px)
  .home-footer
    &-inner
      &__copy
      &__menu
      &__social-info
        margin-bottom 50px
</style>
