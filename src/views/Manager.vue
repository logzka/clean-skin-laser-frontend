<template lang="pug">
.manager
  .flex
    manager-side-menu
    .manager__inner.w-100
      router-view
</template>

<script>
import ManagerSideMenu from '../components/manager/base/ManagerSideMenu.vue';

export default {
  name: 'manager-view',
  components: {
    ManagerSideMenu,
  },
};
</script>

<style lang="stylus" scoped>
.manager
  &__inner
    padding 40px
</style>
