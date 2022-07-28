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
    &__header
        padding 40px 60px 0px
    &__title
        font-weight bold
        color #9684A3
    &__headerbtn
        width 70px
        height 90px
    &__headerbtn > &__close
      color #9684A3
    &__body
        padding 40px 60px
</style>
