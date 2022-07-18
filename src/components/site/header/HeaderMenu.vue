<template lang="pug">
nav.header-nav-menu
    ul.header-nav-menu__list
        li.header-nav-menu__list-item
            router-link(
                to="/calendar"
                ) Свободные даты
        li.header-nav-menu__list-item
            router-link(
                to="/masters"
                ) Мастера
        li.header-nav-menu__list-item
            router-link(
                to="/studio"
                ) Студия
        li.header-nav-menu__list-item
            router-link(
                to="/lasers"
                ) Оборудование
        li.header-nav-menu__list-item
            router-link(
                to="/price"
                ) Прайс
        li.header-nav-menu__list-item
            router-link(
                to="/contacts"
                ) Контакты
        li.header-nav-menu__list-item
            router-link.header-nav-menu__list-item_admin(
                to="/admin"
                ) Для администратора
</template>

<script>
export default {
  components: {},
  data: () => ({
  }),
  methods: {
  },
};
</script>

<style lang="stylus" scoped>
.header-nav-menu
    &__list
        display flex
        justify-content space-between
        align-items center
        &-item
            margin-right 15px
            cursor pointer
            a
                padding 2px 6px 3px
                transition all .2s ease
                &:hover:not(.router-link-active.router-link-exact-active)
                    opacity .7
            &:last-child
                margin-right -15px
            &_admin
                // background #849FBB
                color #2CC990
                font-weight bold
            .router-link-active.router-link-exact-active
                color white
            &:nth-child(odd)
                .router-link-active.router-link-exact-active
                    background #2CC990
            &:nth-child(even)
                .router-link-active.router-link-exact-active
                    background #9684A3
</style>
