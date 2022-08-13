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
      prop="phone"
      )
      el-input(
        v-model="ruleForm.phone"
        size="large"
        )

    el-form-item(
      label="Выберите специалиста"
      prop="master"
      )
      el-select(
        v-model="ruleForm.master"
        placeholder="Выберите специалиста"
        size="large"
        clearable
        :remote-method="loadingMasters()"
        remote
        )
        el-option(
          v-for="master in preMasters"
          :key="master.master.id"

          :label="getFullMasterName(master)"
          :value="master.master.id"
          )

    el-form-item(
      label="Когда Вам было бы удобно?"
      )
      el-col(:span="12")
        el-form-item(
          prop="date"
          )
          el-date-picker.w-100(
            v-model="ruleForm.date"
            type="date"
            placeholder="Выберите дату"
            size="large"
          )
      el-col(:span="11" :offset="1")
        el-form-item(
          prop="time"
          )
          el-time-select(
            v-model="ruleForm.time"
            start="08:00"
            step="1:00"
            end="20:00"
            placeholder="Выберите время"
            size="large"
            disabled
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
      prop="services"
      )
      el-checkbox-group(
        v-model="ruleForm.services"
        )
        el-checkbox(
          v-for="service in services"

          :label="service.name"
          :name="service.name"
          :disabled="(masterServices.length > 0 && !masterServices.includes(service.id))"

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
};

export default {
  computed: {
    masters() {
      return this.$store.getters.masters || null;
    },

    preMasters() {
      return this.masters || [];
    },

    services() {
      return this.$store.getters.services || [];
    },

    masterServices() {
      const selectedMaster = this.preMasters
        .find((master) => master.master.id === this.ruleForm.master) || {};

      return selectedMaster?.master?.services || [];
    },
  },

  data: () => ({
    ruleForm: {
      name: '',
      master: '',
      phone: '',
      date: '',
      time: '',
      callback: false,
      services: [],
      desc: '',
    },

    rules,

    loadingDropdownMasters: false,
  }),

  methods: {
    loadingMasters() {
      this.loadingDropdownMasters = true;

      setTimeout(() => {
        this.$store.dispatch('getMasters', {});
        this.loadingDropdownMasters = false;
      }, 2000);
    },

    async submitForm() {
      await this.$refs.form.validate((valid, fields) => {
        if (valid) {
          ElNotification({
            message: 'Спасибо. Ваши данные успешно отправлены.',
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

    getFullMasterName({ master }) {
      return `${master.first_name} ${master.last_name}`;
    },

    setFormData(formData) {
      console.log(formData);
      this.ruleForm = formData || {};
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
