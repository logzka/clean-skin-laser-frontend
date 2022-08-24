<template lang="pug">
.admin
  .admin__inner.flex
    admin-side-menu
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
