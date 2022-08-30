<template lang="pug">
el-dialog(
    v-model="dialogVisible"
    title="Заполните заявку и мы с Вами свяжемся в ближайшее время"
    )
    home-main-form(
      ref="homeMainForm"
      )
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

  methods: {
    /**
     * Open this dialog
     *
     * @param {Object} formData Current data for this dialog
     */
    openDialog(formData) {
      this.dialogVisible = true;

      this.$nextTick(() => {
        if (formData) this.$refs.homeMainForm.setFormData(formData);
      });
    },
  },
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
