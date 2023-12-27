<template lang="pug">
.admin-side-menu.h-100.p-sticky.t-0
    .admin-side-menu__inner.h-100
        el-menu.el-menu-vertical-demo(
            :default-active="$route.path"
            :collapse="isCollapse"
            )
            el-menu-item(
                index="/"
                @click="$router.push({ name: 'home' })"
                )
                el-icon
                    Back
                template(#title)
                    span Вернуться на сайт
            el-menu-item(
                index="/admin/banner"
                @click="$router.push({ name: 'AdminBanner' })"
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
                @click="$router.push({ name: 'AdminMasters' })"
                )
                el-icon
                    User
                template(#title)
                    span Мастера
            el-menu-item(
                index="/admin/studio"
                disabled
                )
                el-icon
                    OfficeBuilding
                template(#title)
                    span Студия
            el-menu-item(
                index="/admin/lasers"
                disabled
                )
                el-icon
                    Box
                template(#title)
                    span Оборудование
            el-menu-item(
                index="/admin/price"
                disabled
                )
                el-icon
                    Money
                template(#title)
                    span Прайс
            el-menu-item(
                index="/admin/contacts"
                disabled
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
                    span(v-if="!isCollapse") Свернуть
                    span(v-else) Развернуть
</template>

<script>
export default {
  computed: {
    isCollapse: {
      get() {
        return this.$store.getters.isCollapse || false;
      },
      set(flag) {
        this.$store.dispatch('setIsCollapse', flag);
      },
    },
  },

  data: () => ({
  }),

  created() {
    this.isCollapse = localStorage.getItem('SidebarCollapse') === '1';
  },

  methods: {
  },

  watch: {
    isCollapse(value) {
      localStorage.setItem('SidebarCollapse', value ? '1' : '0');
    },
  },
};
</script>

<style lang="stylus" scoped>
</style>
