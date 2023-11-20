<template lang="pug">
.login-view.flex.align-center.space-center(v-loading="loadingLogin")
  .login-view__inner
    h3 Вход в систему {{ loginSystem }} D &#149; Aesthetic Studio

    .login-view__inner-form
      el-form(
        ref="loginForm"

        :model="loginRuleForm"
        :rules="loginRules"

        status-icon
        )
        el-form-item(
          label="Логин"
          prop="login"
          )
          el-input(
            v-model="loginRuleForm.login"
            size="large"
            autofocus
            :aria-label="'login'"
            )

        el-form-item(
          label="Пароль"
          prop="password"
          )
          el-input(
            v-model="loginRuleForm.password"
            size="large"
            :type="!showPassword ? 'password' : 'text'"
            :aria-label="'password'"
            )
            template(#append)
              el-button(
                text
                @click="setShowPassword"
                )
                el-icon
                  Hide(v-if="!showPassword")
                  View(v-else)

        el-form-item.login-view__inner-form_entry-button
          el-button(
            size="large"
            plain

            aria-label="enter"
            name="enter"

            @click="submitForm()"
            ) Войти
</template>

<script>
import { ElNotification } from 'element-plus';

const loginRules = {
  login: [
    { required: true, message: 'Пожалуйста, укажите логин', trigger: 'blur' },
  ],
  password: [
    { required: true, message: 'Пожалуйста, укажите пароль', trigger: 'blur' },
  ],
};

export default {
  computed: {
    loginSystem() {
      return `${this.$route.params?.login_as === 'admin'
        ? 'администрирования'
        : 'управления'}`;
    },
  },

  data: () => ({
    loginRuleForm: {
      login: '',
      password: '',
    },

    loginRules,

    loadingLogin: false,
    showPassword: false,
  }),

  methods: {
    /**
     * Ljgin into admin/manager panel
     */
    login() {
      this.loadingLogin = true;

      setTimeout(() => {
        // TODO: Add to Store with JWT token from cookies.
        // this.$store.dispatch('login', {});
        this.resetForm();
        this.loadingLogin = false;
      }, 2000);
    },

    /**
     * Submit login form
     */
    async submitForm() {
      await this.$refs.loginForm.validate((valid) => {
        if (valid) {
          if (this.loginRuleForm.login !== 'admin_nas_dav'
          || this.loginRuleForm.login !== 'admin_nas_dav') {
            ElNotification({
              message: 'Указан неверный логин/пароль.',
              type: 'error',
            });
            return;
          }

          this.login();

          ElNotification({
            message: `Поздравляем, Вы успешно вошли в систему ${this.loginSystem}`,
            type: 'success',
          });

          this.$router.push(`/${this.$route.params?.login_as}`);
        } else {
          ElNotification({
            message: 'Заполните все обязательные поля.',
            type: 'error',
          });
        }
      });
    },

    /**
     * Reset login form
     */
    resetForm() {
      if (this.$refs?.loginForm) this.$refs.loginForm.resetFields();
    },

    setShowPassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style lang="stylus">
.login-view
  background-image linear-gradient(45deg, #2cc990, #9684a3)
  width 100vw
  height 100vh
  &__inner
    color #fff
    h3
      margin 0 0 35px
    .el-form
      &-item
        &__label
          padding 0
          // margin-right 15px
          color #fff
          width 100px
          justify-content flex-start
    &-form
      &_entry-button
        margin 50px 0 0
        align-self flex-end
</style>
