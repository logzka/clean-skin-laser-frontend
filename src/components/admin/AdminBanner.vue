<template lang="pug">
.admin-bunner.w-100(v-loading="loadingAdminBanner")
  .admin-banner__inner
    h3(v-if="!bannerForm.id") Новый баннер
    h3(v-else) Редактирование баннера

    .w-100.flex.gap-2.space-between.f-wrap
      .admin-banner__inner-form.flex-grow
        admin-banner-form(
          @update-active-banner="updateActiveBanner"
        )

      .admin-banner__inner-table
        admin-banner-table(
          @update-active-banner="updateActiveBanner"
        )
</template>

<script>
import {
  ElNotification,
} from 'element-plus';
/** Components */
import AdminBannerForm from './admin-banner/AdminBannerForm.vue';
import AdminBannerTable from './admin-banner/AdminBannerTable.vue';

export default {
  components: {
    AdminBannerForm,
    AdminBannerTable,
  },

  computed: {
    loadingAdminBanner() {
      return this.$store.getters.loadingAdminBanner || false;
    },

    bannerForm() {
      return this.$store.getters.bannerForm;
    },

    banners() {
      return this.$store.getters.banners || null;
    },
  },

  data: () => ({
  }),

  methods: {
    /**
     * Update Active Banner
     * @param {Object} currentBanner Curren banner
     */
    async updateActiveBanner(currentBanner) {
      await this.$store.dispatch('setActiveBanner', {
        ...currentBanner,
        active: true,
      });

      /** Get Banners */
      await this.$store.dispatch(
        'setBanners',
        this.banners
          .map((banner) => ({
            ...banner,
            active: banner.id === currentBanner.id,
          })),
      );

      ElNotification({
        message: 'Баннер и услуги успешно размещены на главном экране.',
        type: 'success',
      });
    },
  },
};
</script>

<style lang="stylus">
.admin-banner
  &__inner
    h3
      margin 0 0 40px
      color #9684A3
    &-form
      .el-form
        &-item
          &__label
              width 100px
              line-height 18px
              justify-content flex-start
    &-table
      &_banner-image
        width 100px
        height auto
</style>
