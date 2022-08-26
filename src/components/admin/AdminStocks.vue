<template lang="pug">
.admin-stocks.w-100(v-loading="loadingStocks")
    .admin-stocks__inner
        h3(v-if="!stockRuleForm.id") Новая акция
        h3(v-else) Редактирование акции

        .w-100.flex.space-between
            .admin-stocks__inner-form.w-100
                el-form.w-100(
                    ref="stockForm"

                    :model="stockRuleForm"
                    :rules="stockRules"

                    status-icon
                    )
                    el-form-item(
                        label="Описание/Название"
                        prop="name"
                        )
                        el-input#stockName(
                            v-model="stockRuleForm.name"
                            size="large"
                            clearable
                            )

                    el-form-item(
                        label="Плакат"
                        prop="image"
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
                            ) Сохранить
                        el-button(
                            size="large"
                            plain
                            @click="clearStockForm()"
                            ) Очистить

            .admin-stocks__inner-table.w-100
                el-table.w-100(
                    :data="preStocks"
                    stripe
                    height="calc(100vh - 148px)"
                    )
                    el-table-column(
                        prop="name"
                        label="Доступные акции"
                        :formatter="(row, column, cellValue) => cellValue.length ? cellValue : '--'"
                        )
                    el-table-column(width="160")
                        template(v-slot="row")
                            img.admin-stocks__inner-table_stock-image(
                                src="@/assets/laser-gone-tattoo-removal.jpeg"
                                )
                    el-table-column(width="120")
                        template(v-slot="row")
                            el-button.el-button__my-link(
                                size="small"
                                @click="editStock(row)"
                                )
                                el-icon
                                    Edit
                            el-button.el-button__my-link(
                                type="danger"
                                size="small"
                                plain
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

const stockRules = {
  image: [
    { required: false, message: 'Пожалуйста, добавьте изображение', trigger: 'blur' },
  ],
};

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
    stockRuleForm: {
      id: null,
      name: '',
      image: null,
    },

    stockRules,

    loadingStocks: false,
  }),

  mounted() {
    if (this.stocks) return;

    this.loadingStocks = true;

    setTimeout(() => {
      this.$store.dispatch('getStocks');
      this.loadingStocks = false;
    }, 1000);
  },

  methods: {
    saveStock() {
      this.loadingStocks = true;

      setTimeout(() => {
        if (!this.stockRuleForm.id) this.$store.dispatch('createStock', this.stockRuleForm);
        if (this.stockRuleForm.id) this.$store.dispatch('updateStock', this.stockRuleForm);

        this.resetForm();
        // this.$store.dispatch('getStocks');
        this.loadingStocks = false;

        ElNotification({
          message: !this.stockRuleForm.id
            ? 'Акция уcпешно добавлена на сайт'
            : 'Акция уcпешно обновлена',
          type: 'success',
        });

        this.clearStockForm();
      }, 2000);
    },

    async submitForm() {
      await this.$refs.stockForm.validate((valid, fields) => {
        if (valid) {
          this.saveStock();
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

    clearStockForm() {
      this.stockRuleForm = {
        id: null,
        name: '',
        image: null,
      };

      this.resetForm();
    },

    editStock({ row }) {
      this.stockRuleForm = JSON
        .parse(JSON
          .stringify(row)) || {};

      document.getElementById('stockName').focus();
    },

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

    deleteStock(row) {
      this.loadingStocks = true;

      setTimeout(() => {
        this.$store.dispatch('deleteStock', row.id || null);
        this.loadingStocks = false;

        ElNotification({
          message: 'Акция удалена',
          type: 'success',
        });
      }, 1000);
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
