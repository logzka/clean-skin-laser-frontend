<template lang="pug">
.admin-stocks.w-100(
  v-loading="loadingAdminStocks"
  )
  .admin-stocks__inner
    h3(v-if="!stockForm.id") Новая акция
    h3(v-else) Редактирование акции

    .w-100.flex.space-between.gap-2
      .admin-stocks__inner-form.w-100
        admin-stocks-form

      .admin-stocks__inner-table
        admin-stocks-table
</template>

<script>
/** Components */
import AdminStocksForm from './admin-stocks/AdminStocksForm.vue';
import AdminStocksTable from './admin-stocks/AdminStocksTable.vue';

export default {
  components: {
    AdminStocksForm,
    AdminStocksTable,
  },

  computed: {
    loadingAdminStocks() {
      return this.$store.getters.loadingAdminStocks || false;
    },

    stockForm() {
      return this.$store.getters.stockForm;
    },
  },
};
</script>

<style lang="stylus">
.admin-stocks
  &__inner
    h3
      margin 0 0 40px
      color #9684A3
    &-form
      margin-right 5%
        .el-form
          &-item
            &__label
              width 100px
              line-height 18px
              justify-content flex-start
    &-table
      &_stock-image
        width 100px
        height auto
</style>
