<template lang="pug">
el-footer.home-footer(
  )
  .home-footer-inner.w-100.flex.space-between.align-center.f-wrap
    .home-footer-inner__copy
      h2 D &#149; Aesthetic Studio
      | &copy;&nbsp;Все права защищены,&nbsp;2022

    .home-footer-inner__menu
      home-footer-menu

    home-main-contacts-general(iconColor="white")

    .home-footer-inner__buttons.flex.f-col
      el-button(
        type="info"
        plain
        aria-label="admin"
        name="admin"
        @click="$router.push({ name: 'login', query: { login_as: 'admin' } })"
        ) Администратору
      el-button.m-0(
        type="info"
        plain
        aria-label="manager"
        anme="manager"
        @click="$router.push({ name: 'login', query: { login_as: 'manager' } })"
        ) Менеджеру
</template>

<script>
import HomeFooterMenu from './home-footer/HomeFooterMenu.vue';
import HomeMainContactsGeneral from './home-main/home-main-contacts/HomeMainContactsGeneral.vue';

export default {
  components: {
    HomeFooterMenu,
    HomeMainContactsGeneral,
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
