<template lang="pug">
el-form.w-100(
  ref="masterForm"
  :model="masterForm"
  :rules="masterFormRules"
  status-icon
  )
  el-form-item(
    label="Имя"
    prop="first_name"
    )
    el-input#masterName(
      v-model="masterFormFirstName"
      size="large"
      clearable
      :aria-label="'description/name'"
      )

  el-form-item(
    label="Фамилия"
    prop="last_name"
    )
    el-input(
      v-model="masterFormLastName"
      size="large"
      clearable
      :aria-label="'description/name'"
      )

  el-form-item(
    label="Услуги мастера"
    prop="services"
    )
    el-select#services.w-100(
      v-model="masterForm.services"
      size="large"
      multiple
      filterable
      allow-create
      default-first-option
      :reserve-keyword="false"
      placeholder="Выберите услуги мастера"
      )
      el-option(
        v-for="service in preServices"
        :key="service.id"
        :label="service.name"
        :value="service.id"
        )

  el-form-item(
    label="Квалификация"
    prop="skills"
    )
    el-input(
      v-model="masterFormSkills"
      size="large"
      clearable
      type="textarea"
      :aria-label="'description/skills'"
      :autosize="{ minRows: 2, maxRows: 4 }"
      )

  el-form-item(
    label="Опыт"
    prop="experience"
    )
    el-input(
      v-model="masterFormExperience"
      size="large"
      clearable
      :aria-label="'description/experience'"
      )

  el-form-item(
    label="Фото"
    prop="photo"
    )
    el-upload.w-100(
      :auto-upload="false"
      :file-list="getFileList(masterForm)"
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

  el-form-item(
    label=""
    prop="active"
    )
    el-checkbox(
      v-model="masterForm.active"
      label="Разместить"
      )

  el-form-item.admin-masters__inner-form_add-button
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
      @click="clearMasterForm"
      ) Очистить
</template>

<script>
import {
  ElNotification,
} from 'element-plus';

const masterFormRules = {
  name: [
    { required: true, message: 'Пожалуйста, укажите название/описание акции', trigger: 'blur' },
  ],
  image: [
    { required: false, message: 'Пожалуйста, добавьте изображение', trigger: 'blur' },
  ],
};

export default {
  computed: {
    masterForm() {
      return this.$store.getters.masterForm;
    },

    masterFormFirstName: {
      get() {
        return this.$store.getters.masterForm.first_name;
      },
      set(name) {
        this.$store.dispatch('setMasterForm', { first_name: name });
      },
    },

    masterFormLastName: {
      get() {
        return this.$store.getters.masterForm.last_name;
      },
      set(name) {
        this.$store.dispatch('setMasterForm', { last_name: name });
      },
    },

    masterFormSkills: {
      get() {
        return this.$store.getters.masterForm.skills;
      },
      set(skills) {
        this.$store.dispatch('setMasterForm', { skills });
      },
    },

    masterFormExperience: {
      get() {
        return this.$store.getters.masterForm.experience;
      },
      set(experience) {
        this.$store.dispatch('setMasterForm', { experience });
      },
    },

    services() {
      return this.$store.getters.services || null;
    },

    preServices() {
      return this.services || [];
    },
  },

  data: () => ({
    masterFormRules,
  }),

  mounted() {
    if (!this.services) {
      this.$store.dispatch('setLoadingAdminBanner', true);
      setTimeout(() => {
        this.$store.dispatch('getServices', {});
        this.$store.dispatch('setLoadingAdminBanner', false);
      }, 1000);
    }
  },

  methods: {
    /**
     * Save new master
     */
    saveMaster() {
      this.$store.dispatch('setLoadingAdminMasters', true);

      setTimeout(() => {
        if (!this.masterForm.id) this.$store.dispatch('createMaster', this.masterForm);
        if (this.masterForm.id) this.$store.dispatch('updateMaster', this.masterForm);

        this.resetForm();
        // this.$store.dispatch('getMasters');
        this.$store.dispatch('setLoadingAdminMasters', false);

        ElNotification({
          message: !this.masterForm.id
            ? 'Мастер уcпешно добавлен на сайт'
            : 'Мастер уcпешно обновлен',
          type: 'success',
        });

        this.clearMasterForm();
      }, 2000);
    },

    /**
     * Submit master form
     */
    submitForm() {
      this.$refs.masterForm.validate(async (valid) => {
        console.log(valid);
        if (valid) {
          await this.saveMaster();
        } else {
          ElNotification({
            message: 'Заполните все обязательные поля.',
            type: 'error',
          });
        }
      });
    },

    /**
     * Reset master form
     */
    resetForm() {
      if (this.$refs?.masterForm) this.$refs.masterForm.resetFields();
    },

    /**
     * Reset master form data
     */
    clearMasterForm() {
      this.$store.dispatch('clearMasterForm');
      this.resetForm();
    },

    getFileList(masterForm) {
      return masterForm.photo ? [{
        name: masterForm.photo,
        url: `admin/img/${masterForm.photo}`,
      }] : [];
    },
  },
};
</script>
