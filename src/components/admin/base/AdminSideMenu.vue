<template lang="pug">
.admin-side-menu.h-100
    .admin-side-menu__inner.h-100
        el-menu.el-menu-vertical-demo(
            :default-active="$route.path"
            :collapse="isCollapse"

            @open="handleOpen"
            @close="handleClose"
            )
            el-menu-item(
                index="/admin/banner"
                )
                el-icon
                    Picture
                template(#title)
                    span Баннер
            el-menu-item(
                index="/admin/stocks"
                @click="$router.push({ name: 'AdminStocks' })"
                )
                el-icon
                    MagicStick
                template(#title)
                    span Акции
            el-menu-item(
                index="/admin/masters"
                )
                el-icon
                    User
                template(#title)
                    span Мастера
            el-menu-item(
                index="/admin/studio"
                )
                el-icon
                    OfficeBuilding
                template(#title)
                    span Студия
            el-menu-item(
                index="/admin/lasers"
                )
                el-icon
                    Box
                template(#title)
                    span Оборудование
            el-menu-item(
                index="/admin/price"
                )
                el-icon
                    Money
                template(#title)
                    span Прайс
            el-menu-item(
                index="/admin/contacts"
                )
                el-icon
                    LocationInformation
                template(#title)
                    span Контакты
            el-menu-item(
                index="7"
                @click="isCollapse = !isCollapse"
                )
                el-icon
                    ArrowLeftBold(v-if="!isCollapse")
                    ArrowRightBold(v-else)
                template(#title)
                    span(v-if="!isCollapse") Закрыть
                    span(v-else) Открыть
</template>

<script>
export default {
  data: () => ({
    isCollapse: false,
  }),

  methods: {
    handleOpen() {
    },

    handleClose() {
    },
  },
};
</script>

<style lang="stylus" scoped>
.el-menu-vertical-demo
    height 100vh
    border-right 4px solid transparent
    border-image linear-gradient(#2CC990, #9684A3)
    -moz-border-image -moz-linear-gradient(#2CC990, #9684A3)
    -webkit-border-image -webkit-linear-gradient(45deg, #2CC990, #9684A3)
    border-image-slice 1
    &:not(.el-menu--collapse)
        width 240px
</style>
