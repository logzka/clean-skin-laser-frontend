<template lang="pug">
el-table(
  :data="preStocks"
  stripe
  )
  el-table-column(
    prop="active"
    label="Текущая"
    width="140"
    header-align="center"
    )
    template(v-slot="row")
      .admin-stocks__inner-table_stock-active.text-center
        el-button(
          type="success"
          text
          @click="$emit('updateActiveStocks', row.row)"
          )
          div.flex.align-center(v-if="row.row.active")
            el-icon(color="rgb(44, 201, 144)")
              SuccessFilled
            span Убрать

          span(v-else) Разместить

  el-table-column(
    prop="name"
    label="Название"
    width="280"
    :formatter="(row, column, cellValue) => cellValue.length ? cellValue : '--'"
    )
  el-table-column(width="160" label="Фон")
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
