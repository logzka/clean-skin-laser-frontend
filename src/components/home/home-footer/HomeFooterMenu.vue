<template lang="pug">
nav.footer-nav-menu
    ul.footer-nav-menu__list.flex.f-col.space-center
        li.footer-nav-menu__list-item(
            v-for="item in menuItems"
            :key="item.link"
            )
            router-link.b(
                :to="item.link"
                ) {{ item.label }}
</template>

<script>
const menuItems = [{
  label: 'Когда можно проконсультироваться?',
  link: '/calendar',
}, {
  label: 'Кто будет выполнять процедуру?',
  link: '/masters',
},
// {
//   label: 'Студия',
//   link: '/studio',
// },
// {
//   label: 'Оборудование',
//   link: '/lasers',
// },
{
  label: 'Сколько стоит?',
  link: '/price',
}, {
  label: 'Где Вас найти?',
  link: '/contacts',
}, {
  label: 'Главная',
  link: '/',
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
.footer-nav-menu
    &__list
        &-item
            cursor pointer
            padding 4px 0
            a
                transition all .2s ease
                &:hover:not(.router-link-active.router-link-exact-active)
                    opacity .7
            .router-link-active.router-link-exact-active
                text-decoration underline
</style>
