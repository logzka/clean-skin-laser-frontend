<template lang="pug">
nav.header-nav-menu
    ul.header-nav-menu__list.flex.space-between.align-center
        li.header-nav-menu__list-item(
            v-for="item in menuItems"
            :key="item.link"
            )
            router-link.b(
                :to="item.link"
                ) {{ item.label }}

        li.header-nav-menu__list-item
            router-link.header-nav-menu__list-item_admin.b(
                to="/admin"
                ) Для администратора
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
  data: () => ({
    menuItems,
  }),
  methods: {
  },
};
</script>

<style lang="stylus" scoped>
.header-nav-menu
    &__list
        &-item
            cursor pointer
            a
                padding 12px 18px
                border-radius 2px
                transition all .2s ease
                &:hover:not(.router-link-active.router-link-exact-active)
                    opacity .7
            &_admin
                color #9684A3
            .router-link-active.router-link-exact-active
                color white
                background-image linear-gradient(45deg, #2CC990, #9684A3)
</style>
