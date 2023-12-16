<template lang="pug">
el-form.w-100(
  ref="bannerForm"
  :model="bannerForm"
  :rules="bannerFormRules"
  status-icon
  )
  el-form-item(
    label="Доступные услуги"
    prop="services"
    )
    el-select#services.w-100(
      v-model="bannerForm.services"
      size="large"
      multiple
      filterable
      allow-create
      default-first-option
      :reserve-keyword="false"
      placeholder="Выберите услуги для главного экрана"
      )
      el-option(
        v-for="service in preServices"
        :key="service.id"
        :label="service.name"
        :value="service.id"
        )

  el-form-item(
    label="Изображение баннера"
    prop="image"
    )
    el-upload.w-100(
      drag
      action="#"
      :auto-upload="false"
      :file-list="getFileList(bannerForm)"
      multiple
      )
      el-icon.el-icon--upload
        upload-filled
      .el-upload__text Перетащите файл или
        em нажмите для загрузки

      template(#tip)
        .el-upload__tip png/webp форматы

  el-form-item(
    label=""
    prop="active"
    )
    el-checkbox(
      v-model="bannerForm.active"
      label="Разместить"
      )

  el-form-item.admin-banner__inner-form_add-button
    el-button(
      size="large"
      plain
      type="success"
      aria-label="save"
      name="save"
      @click="submitForm()"
      ) Сохранить
    el-button(
      size="large"
      plain
      aria-label="clean"
      name="clean"
      @click="clearBannerForm()"
      ) Очистить
</template>

<script>
import {
  ElNotification,
} from 'element-plus';

const bannerFormRules = {
  services: [
    { required: true, message: 'Пожалуйста, укажите перечень услуг', trigger: 'blur' },
  ],
  image: [
    { required: false, message: 'Пожалуйста, добавьте изображение', trigger: 'blur' },
  ],
};

export default {
  computed: {
    loadingAdminBanner() {
      return this.$store.getters.loadingAdminBanner || false;
    },

    services() {
      return this.$store.getters.services || null;
    },

    preServices() {
      return this.services || [];
    },

    bannerForm() {
      return this.$store.getters.bannerForm;
    },

    activeBanner() {
      return this.$store.activeBanner || null;
    },
  },

  data: () => ({
    bannerFormRules,
  }),

  mounted() {
    this.$store.dispatch('setLoadingAdminBanner', true);

    if (!this.services) {
      setTimeout(() => {
        this.$store.dispatch('getServices', {});
        this.$store.dispatch('setLoadingAdminBanner', false);
      }, 1000);
    }

    setTimeout(() => {
      this.$store.dispatch('getActiveBanner');
      // .then((activeBannerData) => this.$store.dispatch('setBannerForm', activeBannerData));
      this.$store.dispatch('setLoadingAdminBanner', false);
    }, 1000);
  },

  methods: {
    /**
     * Save new banner
     */
    saveBanner() {
      this.$store.dispatch('setLoadingAdminBanner', true);

      setTimeout(() => {
        if (!this.bannerForm.id) this.$store.dispatch('createBanner', this.bannerForm);
        if (this.bannerForm.id) this.$store.dispatch('updateBanner', this.bannerForm);

        this.resetForm();
        // this.$store.dispatch('getBanners');
        this.$store.dispatch('setLoadingAdminBanner', false);

        ElNotification({
          message: !this.bannerForm.id
            ? 'Баннер уcпешно добавлен на сайт'
            : 'Баннер уcпешно обновлен',
          type: 'success',
        });

        this.clearBannerForm();
      }, 2000);
    },

    /**
      * Submit banner form
      */
    submitForm() {
      this.$refs.bannerForm.validate(async (valid) => {
        if (valid) {
          await this.saveBanner();
          this.$emit('updateActiveBanner', this.bannerForm);
        } else {
          ElNotification({
            message: 'Заполните все обязательные поля.',
            type: 'error',
          });
        }
      });
    },

    /**
      * Reset banner form
      */
    resetForm() {
      if (this.$refs?.bannerForm) this.$refs.bannerForm.resetFields();
    },

    /**
      * Reset banner form data
      */
    clearBannerForm() {
      this.$store.dispatch('clearBannerForm');
      this.resetForm();
    },

    getFileList(bannerForm) {
      return bannerForm.image ? [{
        name: bannerForm.image,
        url: `admin/img/${bannerForm.image}`,
      }] : [];
    },
  },
};
</script>
