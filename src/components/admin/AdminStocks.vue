<template lang="pug">
.admin-stocks.w-100
    .admin-stocks__inner
        h3(v-if="!currentStockId") Добавьте новую акцию
        h3(v-else) Отредактируйте акцию

        .w-100.flex.space-between
            .admin-stocks__inner-form
                el-form(
                    ref="stockForm"

                    :model="stockRuleForm"
                    :rules="stockRules"

                    status-icon
                    )
                    el-form-item(
                        label="Описание"
                        prop="desc"
                        )
                        el-input(
                            v-model="stockRuleForm.desc"
                            size="large"
                            )

                    el-form-item(
                        label="Плакат"
                        prop="banner_image"
                        )
                        el-upload(
                            drag
                            action="#"
                            :auto-upload="false"
                            multiple
                            )
                            el-icon.el-icon--upload
                                upload-filled
                            .el-upload__text Перетащите файл или
                                em нажмите для загрузки

                            template(#tip)
                                .el-upload__tip jpg/png/gif форматы

                    el-form-item.admin-stocks__inner-form_add-button
                        el-button(
                            size="large"
                            plain
                            type="success"
                            @click="submitForm()"
                            ) Добавить

            .admin-stocks__inner-table admin-stocks__inner-table
</template>

<script>
import { ElNotification } from 'element-plus';

const stockRules = {
//   desc: [
//     { required: true, message: 'Пожалуйста, добавьте описание или название', trigger: 'blur' },
//   ],
  banner_image: [
    { required: true, message: 'Пожалуйста, укажите пароль', trigger: 'blur' },
  ],
};

export default {
  computed: {
  },

  data: () => ({
    currentStockId: null,

    stockRuleForm: {
      desc: '',
      banner_image: null,
    },

    stockRules,

    loadingStocks: false,
  }),

  methods: {
    addStock() {
      this.loadingStocks = true;

      setTimeout(() => {
        // this.$store.dispatch('createStock', this.stockRuleForm);
        this.resetForm();
        this.loadingStocks = false;
      }, 2000);
    },

    async submitForm() {
      await this.$refs.stockForm.validate((valid, fields) => {
        if (valid) {
          this.addStock();

          ElNotification({
            message: 'Акция уcпешно добавлена на сайт',
            type: 'success',
          });
        } else {
          console.log('error submit!', fields);

          ElNotification({
            message: 'Заполните все обязательные поля.',
            type: 'error',
          });
        }
      });
    },

    resetForm() {
      if (this.$refs?.stockForm) this.$refs.stockForm.resetFields();
    },
  },
};
</script>

<style lang="stylus" scoped>
.admin-stocks
    &__inner
        padding 15px
        h3
            margin-top 0
</style>
