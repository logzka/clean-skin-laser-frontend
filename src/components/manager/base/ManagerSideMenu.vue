<template lang="pug">
.manager-side-menu.h-100
    .manager-side-menu__inner.h-100
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
                index="/manager/charts"
                @click="$router.push({ name: 'ManagerCharts' })"
                )
                el-icon
                  TrendCharts
                template(#title)
                  span Сводные графики

            el-menu-item(
                disabled
                index="/manager/spreadsheet"
                @click="$router.push({ name: '' })"
                )
                el-icon
                  Memo
                template(#title)
                  span Сводные таблицы

            el-menu-item(
                disabled
                index="/manager/accounts"
                @click="$router.push({ name: '' })"
                )
                el-icon
                  Avatar
                template(#title)
                  span Клиенты

            el-menu-item(
                disabled
                index="/manager/purchase"
                @click="$router.push({ name: '' })"
                )
                el-icon
                  GoodsFilled
                template(#title)
                  span Закупка

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
    this.isCollapse = localStorage.getItem('ManagerSidebarCollapse') === '1';
  },

  methods: {
  },

  watch: {
    isCollapse(value) {
      localStorage.setItem('ManagerSidebarCollapse', value ? '1' : '0');
    },
  },
};
</script>

<style lang="stylus" scoped>
</style>
