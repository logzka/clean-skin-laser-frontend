<template lang="pug">
el-dialog(
    title="Заполните заявку и мы с Вами свяжемся в ближайшее время"
    )
    home-main-form
</template>

<script>
import HomeMainForm from './HomeMainForm.vue';

export default {
  components: {
    HomeMainForm,
  },

  data: () => ({
    dialogVisible: false,
  }),
};
</script>

<style lang="stylus">
.el-dialog
    &__body
        padding 10px 20px 20px
</style>
