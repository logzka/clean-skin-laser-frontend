<template lang="pug">
el-table(
  :data="preStocks"
  stripe
  height="calc(100vh - 148px)"
  )
  el-table-column(
    prop="name"
    label="Доступные акции"
    width="320"
    :formatter="(row, column, cellValue) => cellValue.length ? cellValue : '--'"
    )
  el-table-column(width="160")
    template(v-slot="row")
      img.admin-stocks__inner-table_stock-image(
        :src="`/img/${row.row.image}`"
        alt="Акция студии лазера."
        )
  el-table-column(width="120")
    template(v-slot="row")
      el-button.el-button__my-link(
        size="small"
        aria-label="edit"
        name="edit"
        @click="editStock(row)"
        )
        el-icon
          Edit
      el-button.el-button__my-link(
        type="danger"
        size="small"
        plain
        aria-label="delete"
        name="delete"
        @click="confirmDeleteStock(row)"
        )
        el-icon
          Delete
</template>

<script>
import {
  ElNotification,
  ElMessageBox,
} from 'element-plus';

export default {
  computed: {
    stocks() {
      return this.$store.getters.stocks || null;
    },

    preStocks() {
      return this.stocks || [];
    },
  },

  data: () => ({
  }),

  mounted() {
    if (this.stocks) return;

    this.$store.dispatch('setLoadingAdminStocks', true);

    setTimeout(() => {
      this.$store.dispatch('getStocks');
      this.$store.dispatch('setLoadingAdminStocks', false);
    }, 1000);
  },

  methods: {
    /**
     * Edit current stock
     *
     * @param {Object} row Current stock data
     */
    editStock({ row }) {
      this.$store.dispatch('setStockForm', row || {});

      document.getElementById('stockName').focus();
    },

    /**
     * Confirm to delete current stock
     *
     * @param {Object} row Current stock data
     */
    confirmDeleteStock({ row }) {
      ElMessageBox.confirm(
        'Это действие необратимо. Продолжить?',
        'Внимание',
        {
          confirmButtonText: 'OK',
          cancelButtonText: 'Отмена',
          type: 'danger',
          draggable: true,
        },
      ).then(() => {
        this.deleteStock(row);
      })
        .catch(() => {
          ElNotification({
            message: 'Возникли проблемы при у далении акции. Повторите позже либо обратитесь к Разработчику.',
            type: 'error',
          });
        });
    },

    /**
     * Delete current stock
     * @param {Object} row Current stock data
     */
    deleteStock(row) {
      this.$store.dispatch('setLoadingAdminStocks', true);

      setTimeout(() => {
        this.$store.dispatch('deleteStock', row.id || null);
        this.$store.dispatch('setLoadingAdminStocks', false);

        ElNotification({
          message: 'Акция удалена',
          type: 'success',
        });
      }, 1000);
    },
  },
};
</script>
