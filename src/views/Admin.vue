<template lang="pug">
.admin
  .flex
    base-side-menu(:menu="menu")
    .admin__inner.w-100
      router-view
</template>

<script>
import BaseSideMenu from '@/components/base/BaseSideMenu.vue';

export default {
  name: 'admin-view',
  components: {
    BaseSideMenu,
  },
  data: () => ({
    menu: [{
      index: '/admin/banner',
      name: 'AdminBanner',
      title: 'Баннер',
      icon: 'Picture',
      disabled: false,
    }, {
      index: '/admin/stocks',
      name: 'AdminStocks',
      title: 'Акции',
      icon: 'MagicStick',
      disabled: false,
    }, {
      index: '/admin/masters',
      name: 'AdminMasters',
      title: 'Мастера',
      icon: 'User',
      disabled: false,
    }, {
      index: '/admin/studio',
      name: '',
      title: 'Студия',
      icon: 'OfficeBuilding',
      disabled: true,
    }, {
      index: '/admin/lasers',
      name: '',
      title: 'Оборудование',
      icon: 'Box',
      disabled: true,
    }, {
      index: '/admin/price',
      name: '',
      title: 'Прайс',
      icon: 'Money',
      disabled: true,
    }, {
      index: '/admin/contacts',
      name: '',
      title: 'Контакты',
      icon: 'LocationInformation',
      disabled: true,
    }],
  }),
};
</script>

<style lang="stylus" scoped>
.admin
  &__inner
    padding 40px
</style>
