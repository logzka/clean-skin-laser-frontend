<template lang="pug">
.home-main-form
  el-form(
    ref="form"

    :model="ruleForm"
    :rules="rules"

    class="demo-ruleForm"

    status-icon
    )
    el-form-item(
      label="Имя"
      prop="name"
      )
      el-input(
        v-model="ruleForm.name"
        size="large"
        )

    el-form-item(
      label="Номер телефона"
      prop="name"
      )
      el-input(
        v-model="ruleForm.phone"
        size="large"
        )

    el-form-item(
      label="Выберите город"
      prop="region"
      )
      el-select(
        v-model="ruleForm.region"
        placeholder="Укажите город"
        size="large"
        )
        el-option(
          label="Краснодар"
          value="krasnodar"
          )
        el-option(
          label="Ростов-на-Дону"
          value="rostov"
          )

    el-form-item(
      label="Когда Вам было бы удобно?"
      required
      )
      el-col(:span="12")
        el-form-item(
          prop="date"
          )
          el-date-picker.w-100(
            v-model="ruleForm.date"
            type="date"
            label="Выберите дату"
            placeholder="Выберите дату"
            size="large"
          )

      el-col.text-center(:span="2")
        span.text-gray-500

    el-form-item(
      label="Перезвонить в течение часа"
      prop="callback"
      )
      el-switch(
        v-model="ruleForm.callback"
        size="large"
        )

    el-form-item(
      label="Услуга"
      prop="type"
      )
      el-checkbox-group(
        v-model="ruleForm.type"
        )
        el-checkbox(
          label="Сведение тату"
          name="type"
          size="large"
          )
        el-checkbox(
          label="Удалить татуаж"
          name="type"
          size="large"
          )
        el-checkbox(
          label="Эпиляция"
          name="type"
          size="large"
          )
        el-checkbox(
          label="Пиллинг"
          name="type"
          size="large"
          )

    el-form-item(
      label="Комментарий"
      prop="desc"
      )
      el-input(
        v-model="ruleForm.desc"
        type="textarea"
        )

    el-form-item(align="end")
      el-button(
        size="large"
        type="primary"
        plain
        @click="submitForm()"
        ) Отправить
</template>

<script>
import { ElNotification } from 'element-plus';

const rules = {
  name: [
    { required: true, message: 'Пожалуйста, укажите имя', trigger: 'blur' },
    {
      min: 3, message: 'Длина должна быть более 3 символов', trigger: 'blur',
    },
  ],
  phone: [
    { required: true, message: 'Пожалуйста, укажите номер телефона', trigger: 'blur' },
  ],
  region: [
    {
      required: true,
      message: 'Пожалуйста, укажите город',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Пожалуйста, укажите услугу(и)',
      trigger: 'change',
    },
  ],
};

export default {
  data: () => ({
    ruleForm: {
      name: '',
      region: '',
      phone: '',
      date: '',
      // time: '',
      callback: false,
      type: [],
      desc: '',
    },

    rules,
  }),

  methods: {
    async submitForm() {
      await this.$refs.form.validate((valid, fields) => {
        if (valid) {
          ElNotification({
            message: 'Спасибо. Ваши данные успешно отправлены.',
            type: 'success',
          });

          // this.$refs.form.resetFields();
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
      this.$refs.form.resetFields();
    },
  },
};
</script>

<style lang="stylus" scoped>
.home-main-form
  background #fff
  .el-form
    margin 0 auto
    &-item
      &:not(&:last-child)
        margin-bottom 30px
      &:last-child
        margin-top 15px
          .el-form-item__content
            justify-content space-between
</style>
