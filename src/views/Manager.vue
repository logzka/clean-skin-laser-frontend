<template lang="pug">
.manager
  .flex
    base-side-menu(:menu="menu")
    .manager__inner.w-100
      router-view
</template>

<script>
import BaseSideMenu from '../components/base/BaseSideMenu.vue';

export default {
  name: 'manager-view',
  components: {
    BaseSideMenu,
  },
  data: () => ({
    menu: [{
      index: '/manager/charts',
      name: 'ManagerCharts',
      title: 'Сводные графики',
      icon: 'TrendCharts',
      disabled: false,
    }, {
      index: '/manager/spreadsheet',
      name: '',
      title: 'Сводные таблицы',
      icon: 'Memo',
      disabled: true,
    }, {
      index: '/manager/accounts',
      name: '',
      title: 'Клиенты',
      icon: 'Avatar',
      disabled: true,
    }, {
      index: '/manager/purchase',
      name: '',
      title: 'Закупка',
      icon: 'ShoppingTrolley',
      disabled: true,
    }, {
      index: '/manager/services',
      name: '',
      title: 'Услуги',
      icon: 'Brush',
      disabled: true,
    }, {
      index: '/manager/brands',
      name: '',
      title: 'Бренды',
      icon: 'Medal',
      disabled: true,
    }],
  }),
};
</script>

<style lang="stylus" scoped>
.manager
  &__inner
    padding 40px
</style>
