<template lang="pug">
el-table(
  :data="preBanners"
  stripe
  height="calc(100vh - 148px)"
  :row-style="tableRowStyle"
  )
  el-table-column(
    prop="active"
    label="Текущий"
    width="140"
    header-align="center"
    )
    template(v-slot="row")
      .admin-banner__inner-table_banner-active.text-center
        el-icon(v-if="row.row.active" color="rgb(44, 201, 144)")
          SuccessFilled
        el-button(
          v-else
          type="success"
          text
          @click="$emit('updateActiveBanner', row.row)"
          ) Разместить
  el-table-column(
    prop="services"
    label="Услуги"
    width="280"
    :formatter="(row, column, cellValue) => getCellServices(cellValue)"
    )
  el-table-column(width="160")
    template(v-slot="row")
      img.admin-banner__inner-table_banner-image(
        :src="`/img/${row.row.image}`"
        alt="Баннер студии лазера."
        )
  el-table-column(width="120")
    template(v-slot="row")
      el-button.el-button__my-link(
        size="small"
        aria-label="edit"
        name="edit"
        @click="editBanner(row)"
        )
        el-icon
          Edit
      el-button.el-button__my-link(
        type="danger"
        size="small"
        plain
        aria-label="delete"
        name="delete"
        @click="confirmDeleteBanner(row)"
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
    banners() {
      return this.$store.getters.banners || null;
    },

    preBanners() {
      return this.$store.getters.banners || [];
    },

    servicesIterator() {
      return this.$store.getters.servicesIterator;
    },
  },

  data: () => ({
  }),

  mounted() {
    this.$store.dispatch('setLoadingAdminBanner', true);

    if (!this.banners) {
      setTimeout(() => {
        this.$store.dispatch('getBanners');
        this.$store.dispatch('setLoadingAdminBanner', false);
      }, 1000);
    }
  },

  methods: {
    /**
     * Edit current banner
     *
     * @param {Object} row Current banner data
     */
    editBanner({ row }) {
      this.$store.dispatch('setBannerForm', row || {});
    },

    /**
     * Confirm to delete current banner
     *
     * @param {Object} row Current banner data
     */
    confirmDeleteBanner({ row }) {
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
        this.deleteBanner(row);
      })
        .catch(() => {
          ElNotification({
            message: 'Возникли проблемы при у далении баннера. Повторите позже либо обратитесь к Разработчику.',
            type: 'error',
          });
        });
    },

    /**
     * Delete current banner
     * @param {Object} row Current banner data
     */
    deleteBanner(row) {
      this.$store.dispatch('setLoadingAdminBanner', true);

      setTimeout(() => {
        this.$store.dispatch('deleteBanner', row.id || null);
        this.$store.dispatch('setLoadingAdminBanner', false);

        ElNotification({
          message: 'Баннер удален',
          type: 'success',
        });
      }, 1000);
    },

    tableRowStyle({ row }) {
      return row.active ? {
        background: 'var(--el-color-success-light-9)',
      } : {};
    },

    getCellServices(cellValue) {
      return cellValue.length ? cellValue
        .map((value) => this.servicesIterator[value].name).join(', ') : '--';
    },
  },
};
</script>
