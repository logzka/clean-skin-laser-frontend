<template lang="pug">
nav.header-nav-menu(
  :class="headerNavMenuCollapseClass"
  )
    el-icon.po-a.header-nav-menu__mobile-close(
      v-if="visibleHomeHeaderMenu"
      @click="closeMobileHomeHeaderMenu()"
      )
      Fold

    ul.header-nav-menu__list.flex.space-between.align-center
        li.header-nav-menu__list-item
            router-link.b(
                v-if="visibleHomeHeaderMenu"
                to="/"
                @click="closeMobileHomeHeaderMenu()"
                ) Главная
        li.header-nav-menu__list-item(
            v-for="item in menuItems"
            :key="item.link"
            )
            router-link.b(
                :to="item.link"
                @click="closeMobileHomeHeaderMenu()"
                ) {{ item.label }}
</template>

<script>
const menuItems = [{
  label: 'Свободные даты',
  link: '/calendar',
}, {
  label: 'Мастера',
  link: '/masters',
}, {
  label: 'Студия',
  link: '/studio',
}, {
  label: 'Оборудование',
  link: '/lasers',
}, {
  label: 'Прайс',
  link: '/price',
}, {
  label: 'Контакты',
  link: '/contacts',
}];

export default {
  components: {},

  computed: {
    headerNavMenuCollapseClass() {
      return this.visibleHomeHeaderMenu
        ? 'header-nav-menu__open'
        : 'header-nav-menu__close';
    },
  },

  data: () => ({
    menuItems,
    visibleHomeHeaderMenu: false,
  }),

  methods: {
    openMobileHomeHeaderMenu() {
      this.visibleHomeHeaderMenu = true;
    },

    closeMobileHomeHeaderMenu() {
      this.visibleHomeHeaderMenu = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
.header-nav-menu
    &__mobile-close
      font-size 28px
      color #9684A3
      top 28px
      right 28px
      cursor pointer
    &__list
        &-item
            cursor pointer
            a
                padding 12px 18px
                border-radius 2px
                transition all .3s ease
                &:hover:not(.router-link-active.router-link-exact-active)
                    opacity .7
            .router-link-active.router-link-exact-active
                color white
                background-image linear-gradient(45deg, #2CC990, #9684A3)

@media screen and (max-width: 1100px)
  .header-nav-menu
    width 100%
    height 100vh
    position absolute
    transition all .5s ease-in-out
    top 0
    background #fff
    &__list
      flex-direction column
      color #9684A3
      &-item
        margin 12px 0
        &:first-child
          margin-top 62px
    &__open
      left 0
    &__close
      left -100%
</style>
