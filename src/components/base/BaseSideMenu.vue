<template lang="pug">
.base-side-menu.h-100.p-sticky.t-0
  .base-side-menu__inner.h-100
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
        v-for="item in menu"
        :index="item.index"
        :disabled="item.disabled"
        @click="$router.push({ name: item.name })"
        )
        el-button.m0.p0(
          text
          :type="item.index === $route.path ? 'success' : 'primary'"
          :icon="item.icon"
          :disabled="item.disabled"
          )
        template(#title)
          span {{ item.title }}

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
  props: {
    menu: {
      type: [Array],
      default: () => ([]),
    },
  },

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

  created() {
    this.isCollapse = localStorage.getItem('SidebarCollapse') === '1';
  },

  watch: {
    isCollapse(value) {
      localStorage.setItem('SidebarCollapse', value ? '1' : '0');
    },
  },
};
</script>

<style lang="stylus" scoped>
.base-side-menu *
  .el-button
  .el-button:hover
    box-shadow unset
    background-color unset
</style>
