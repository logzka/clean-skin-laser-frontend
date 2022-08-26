<template lang="pug">
.admin
  .flex
    admin-side-menu
    .admin__inner.w-100
      router-view
</template>

<script>
import AdminSideMenu from '@/components/admin/base/AdminSideMenu.vue';

export default {
  name: 'admin-view',
  components: {
    AdminSideMenu,
  },
};
</script>

<style lang="stylus" scoped>
.admin
  &__inner
    padding 40px
</style>
