<template lang="pug">
el-form.w-100(
  ref="stockForm"
  :model="stockForm"
  :rules="stockFormRules"
  status-icon
  )
  el-form-item(
    label="Описание/Название"
    prop="name"
    )
    el-input#stockName(
      v-model="stockFormName"
      size="large"
      clearable
      :aria-label="'description/name'"
      )

  el-form-item(
    label="Плакат"
    prop="image"
    )
    el-upload.w-100(
      :auto-upload="false"
      :file-list="getFileList(stockForm)"
      drag
      action="#"
      multiple
      )
      el-icon.el-icon--upload
        upload-filled
      .el-upload__text Перетащите файл или
        em нажмите для загрузки

      template(#tip)
        .el-upload__tip png/webp форматы

  el-form-item.admin-stocks__inner-form_add-button
    el-button(
      size="large"
      plain
      type="success"
      aria-label="save"
      name="save"
      @click="submitForm"
      ) Сохранить
    el-button(
      size="large"
      plain
      aria-label="clean"
      name="clean"
      @click="clearStockForm"
      ) Очистить
</template>

<script>
import {
  ElNotification,
} from 'element-plus';

const stockFormRules = {
  name: [
    { required: true, message: 'Пожалуйста, укажите название/описание акции', trigger: 'blur' },
  ],
  image: [
    { required: false, message: 'Пожалуйста, добавьте изображение', trigger: 'blur' },
  ],
};

export default {
  computed: {
    stockForm() {
      return this.$store.getters.stockForm;
    },

    stockFormName: {
      get() {
        return this.$store.getters.stockForm.name;
      },
      set(name) {
        this.$store.dispatch('setStockForm', { name });
      },
    },
  },

  data: () => ({
    stockFormRules,
  }),

  methods: {
    /**
     * Save new stock
     */
    saveStock() {
      this.$store.dispatch('setLoadingAdminStocks', true);

      setTimeout(() => {
        if (!this.stockForm.id) this.$store.dispatch('createStock', this.stockForm);
        if (this.stockForm.id) this.$store.dispatch('updateStock', this.stockForm);

        this.resetForm();
        // this.$store.dispatch('getStocks');
        this.$store.dispatch('setLoadingAdminStocks', false);

        ElNotification({
          message: !this.stockForm.id
            ? 'Акция уcпешно добавлена на сайт'
            : 'Акция уcпешно обновлена',
          type: 'success',
        });

        this.clearStockForm();
      }, 2000);
    },

    /**
     * Submit stock form
     */
    submitForm() {
      this.$refs.stockForm.validate(async (valid) => {
        console.log(valid);
        if (valid) {
          await this.saveStock();
        } else {
          ElNotification({
            message: 'Заполните все обязательные поля.',
            type: 'error',
          });
        }
      });
    },

    /**
     * Reset stock form
     */
    resetForm() {
      if (this.$refs?.stockForm) this.$refs.stockForm.resetFields();
    },

    /**
     * Reset stock form data
     */
    clearStockForm() {
      this.$store.dispatch('clearStockForm');
      this.resetForm();
    },

    getFileList(stockForm) {
      return stockForm.image ? [{
        name: stockForm.image,
        url: `admin/img/${stockForm.image}`,
      }] : [];
    },
  },
};
</script>
