<template lang="pug">
.global-component__appointment-button
    .global-component__appointment-button__inner
        el-button(
            :type="buttonType"
            :size="buttonSize"

            @click="openHomeMainDialog(dataForDialog)"
            ) Записаться
</template>

<script>
export default {
  props: {
    buttonType: {
      type: String,
      default: 'success',
    },

    buttonSize: {
      type: String,
      default: 'large',
    },

    dataForDialog: {
      type: [Object, Boolean, Number],
      default: () => {},
    },
  },

  computed: {
  },

  data: () => ({
  }),

  mounted() {
  },

  unmounted() {
  },

  watch: {
  },

  methods: {
    openHomeMainDialog(dataForDialog = {}) {
      this.$emitter.emit('openHomeMainDialog', dataForDialog || {});
    },
  },
};
</script>

<style lang="stylus" scoped>
</style>
