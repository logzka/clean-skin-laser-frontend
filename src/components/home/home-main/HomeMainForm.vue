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

      //- el-col(:span="11")
        el-form-item(
          prop="date2"
          )
          el-time-picker.w-100(
            v-model="ruleForm.time"
            label="Пожалуйста, укажите время"
            placeholder="Выберите время"
            size="large"
          )

    el-form-item(
      label="Перезвонить в течение часа"
      prop="callback"
      )
      el-switch(
        v-model="ruleForm.callback"
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
          )
        el-checkbox(
          label="Удалить татуаж"
          name="type"
          )
        el-checkbox(
          label="Эпиляция"
          name="type"
          )
        el-checkbox(
          label="Пиллинг"
          name="type"
          )

    el-form-item(
      label="Комментарий"
      prop="desc"
      )
      el-input(
        v-model="ruleForm.desc"
        type="textarea"
        )

    el-form-item
      el-button.green(
        size="large"
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
  // date: [
  //   {
  //     type: 'date',
  //     required: true,
  //     message: 'Пожалуйста, укажите дату',
  //     trigger: 'change',
  //   },
  // ],
  // time: [
  //   {
  //     type: 'date',
  //     required: true,
  //     message: 'Пожалуйста, укажите дату',
  //     trigger: 'change',
  //   },
  // ],
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
            message: 'Спасибо.Ваши данные успешно отправлены.',
            type: 'success',
          });

          this.$refs.form.resetFields();
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
  border 4px solid #9684A3
  border-radius 2px
  border-image linear-gradient(#2CC990, #9684A3)
  -moz-border-image -moz-linear-gradient(#2CC990, #9684A3)
  -webkit-border-image -webkit-linear-gradient(45deg, #2CC990, #9684A3)
  border-image-slice 1
  color #fff
  padding 60px 0
  .el-form
    max-width 75%
    margin 0 auto
    &-item
      &:not(&:last-child)
        margin-bottom 30px
      &:last-child
        margin-top 15px
          .el-form-item__content
            justify-content space-between
</style>