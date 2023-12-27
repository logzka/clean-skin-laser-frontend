<template lang="pug">
.admin-stocks.w-100(
  v-loading="loadingAdminStocks"
  )
  .admin-stocks__inner
    h3(v-if="!stockForm.id") Новая акция
    h3(v-else) Редактирование акции

    .w-100.flex.space-between.gap-2.f-wrap
      .admin-stocks__inner-form.flex-grow
        admin-stocks-form

      .admin-stocks__inner-table
        admin-stocks-table(
          @update-active-stocks="updateActiveStocks"
          )
</template>

<script>
import {
  ElNotification,
} from 'element-plus';
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

    stocks() {
      return this.$store.getters.stocks || [];
    },

    activeStocks() {
      return this.$store.getters.activeStocks || [];
    },
  },

  methods: {
    /**
     * Update Active Stocks
     * @param {Object} currentStock Curren stock
     */
    async updateActiveStocks(currentStock) {
      /** Set Stocks */
      await this.$store.dispatch(
        'setStocks',
        this.stocks
          .map((stock) => ({
            ...stock,
            active: currentStock.id === stock.id
              ? !currentStock.active
              : stock.active,
          })),
      );

      await this.$store.dispatch(
        'setActiveStocks',
        currentStock.active
          ? this.activeStocks
            .filter((stock) => currentStock.id !== stock.id)
          : [
            ...this.activeStocks,
            currentStock,
          ],
      );

      ElNotification({
        message: 'Акции успешно размещены на главном экране.',
        type: 'success',
      });
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
