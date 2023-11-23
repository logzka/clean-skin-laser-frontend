<template lang="pug">
.home-main-form
  el-form(
    ref="form"
    name="contact"
    netlify
    class="demo-ruleForm"
    status-icon
    :label-position="labelPosition"
    :model="ruleForm"
    :rules="rules"
    )
    el-form-item(
      label="Имя"
      prop="name"
      )
      el-input(
        v-model="ruleForm.name"
        :value="ruleForm.name"
        size="large"
        name="name"
        type="text"
        :aria-label="'name'"
        )

    el-form-item(
      label="Номер телефона"
      prop="phone"
      )
      el-input(
        v-model="ruleForm.phone"
        :value="ruleForm.phone"
        size="large"
        name="phone"
        type="text"
        :aria-label="'phone number'"
        )

    el-form-item(
      label="Выберите специалиста"
      prop="master"
      )
      el-select(
        v-model="ruleForm.master"
        :value="ruleForm.master"
        name="master"
        placeholder="Выберите специалиста"
        size="large"
        clearable
        :remote-method="loadingMasters()"
        remote
        @change="ruleForm.date = null"
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
            :value="ruleForm.date"
            name="date"
            type="date"
            placeholder="Выберите дату"
            size="large"
            :disabled-date="getDisabledDates"
          )
      el-col(:span="11" :offset="1")
        el-form-item(
          prop="time"
          )
          el-time-select(
            v-model="ruleForm.time"
            :value="ruleForm.time"
            name="time"
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
      prop="isCallback"
      )
      el-switch(
        v-model="ruleForm.isCallback"
        :value="ruleForm.isCallback"
        name="isCallback"
        size="large"
        )

    el-form-item(
      label="Услуга"
      prop="services"
      )
      el-checkbox-group(
        v-model="ruleForm.services"
        :value="ruleForm.services"
        name="services"
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
        :value="ruleForm.desc"
        name="description"
        type="textarea"
        aria-label="comment"
        )

    el-form-item(align="end")
      el-button(
        size="large"
        type="primary"
        native-type="submit"
        plain

        aria-label="send"
        name="send"

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

    selectedMaster() {
      return this.preMasters
        .find((master) => master.master.id === this.ruleForm.master) || null;
    },

    masterServices() {
      return this.selectedMaster?.master?.services || [];
    },

    masterClosestFreeDates() {
      return this.selectedMaster?.master?.closest_free_dates || [];
    },
  },

  data: () => ({
    ruleForm: {
      name: '',
      phone: '',
      master: null,
      date: null,
      time: null,
      isCallback: false,
      services: [],
      desc: '',
    },

    labelPosition: 'left',

    rules,

    loadingDropdownMasters: false,
  }),

  mounted() {
    window.addEventListener('resize', (e) => {
      this.labelPosition = e.target.innerWidth < 800 ? 'top' : 'left';
    });
  },

  methods: {
    /**
     * Loading all masters
     */
    loadingMasters() {
      this.loadingDropdownMasters = true;

      setTimeout(() => {
        this.$store.dispatch('getMasters', {});
        this.loadingDropdownMasters = false;
      }, 2000);
    },

    /**
     * Submit user form
     */
    async submitForm() {
      await this.$refs.form.validate((valid) => {
        if (valid) {
          ElNotification({
            message: 'Спасибо. Ваши данные успешно отправлены.',
            type: 'success',
          });

          this.$refs.form.resetFields();
        } else {
          ElNotification({
            message: 'Заполните все обязательные поля.',
            type: 'error',
          });
        }
      });
    },

    /**
     * Reset user form
     */
    resetForm() {
      this.$refs.form.resetFields();
    },

    /**
     * Formatter for user full name
     *
     * @param {Object} master Current master Data
     */
    getFullMasterName({ master }) {
      return `${master.first_name} ${master.last_name}`;
    },

    /**
     * Set user form data
     *
     * @param {Object} formData User form data
     */
    setFormData(formData) {
      this.ruleForm = formData || {};
    },

    /**
     * Get disabled dates for current calendar schedule
     *
     * @param {String} date Current date
     * @return {Boolean} Disabled flag
     */
    getDisabledDates(date) {
      return this.selectedMaster && !this.masterClosestFreeDates
        .some((freeDate) => this.$formatDate(freeDate) === this.$formatDate(date));
    },
  },
};
</script>

<style lang="stylus">
.home-main-form
  background #fff
  .el-form
    margin 0 auto
    &-item
      &:not(&:last-child)
        margin-bottom 30px
      &:last-child
        margin-top 15px
      &__label
        font-weight bold
</style>
