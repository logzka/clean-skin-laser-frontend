<template lang="pug">
el-main.home-main
  .home-main-inner

    .home-main-inner__view(v-if="$route.path === '/'")

      .home-main-inner__view-title.flex.space-between.align-center
        h1 Clean Skin Laser Studio
        ul.home-main-inner__view-social_list.flex
          li.home-main-inner__view-social_list-item
            a(
              href="https://instagram.com/"
              target="_blank"
              )
              img(src="@/assets/social/color/instagram.svg")
          li.home-main-inner__view-social_list-item
            a(
              href="/"
              target="_blank"
              )
              img(src="@/assets/social/color/telegram.svg")

      section.flex.space-between.f-wrap(style="margin-bottom: 200px;")

        .home-main-inner__view-content.flex.f-col.space-between.align-start
          .home-main-inner__view-content_text
            h2 Сведение/осветление татуировок
            h2 Удаление татуажа
            h2 Эпиляция
            h2 Карбоновый пиллинг

          .home-main-inner__view-content_buttons.flex
            AppointmentButton.home-main-inner__view-content_buttons__appointment-button
            el-button(
              size="large"
              type="primary"
              ) Система абонементов

        .home-main-inner__view-banner
          home-main-view-banner

      section.home-main-inner__view-advantages
        home-main-view-advantages

      section.home-main-inner__view-stocks
        home-main-view-stocks

      section.home-main-inner__view-form
        .home-main-inner__view-form_inner
          home-main-form

    router-view(v-else)

    home-main-dialog(
      ref="homeMainDialog"
      )
</template>

<script>
import HomeMainViewBanner from './home-main/home-main-view/HomeMainViewBanner.vue';
import HomeMainViewAdvantages from './home-main/home-main-view/HomeMainViewAdvantages.vue';
import HomeMainViewStocks from './home-main/home-main-view/HomeMainViewStocks.vue';

import HomeMainForm from './home-main/HomeMainForm.vue';
import HomeMainDialog from './home-main/HomeMainDialog.vue';

export default {
  components: {
    HomeMainViewBanner,
    HomeMainViewAdvantages,
    HomeMainViewStocks,

    HomeMainForm,
    HomeMainDialog,
  },

  mounted() {
    this.$store.dispatch('getServices', {});

    this.$emitter.on('openHomeMainDialog', (formData) => {
      this.$refs.homeMainDialog.openDialog(formData);
    });
  },

  beforeUnmount() {
    this.$emitter.off('openHomeMainDialog');
  },
};
</script>

<style lang="stylus">
$banner-height = 234px;

.home-main
  --el-main-padding 80px 20px
  width 1130px
  margin 0 auto
  &-inner
    &__view
      &-title
        margin-bottom 40px
        color #9684A3
      &-social_list
        &-item
          margin-right 10px
          &:last-child
            margin-right 0px
          img
            width 28px
      &-content
        max-width 45%
        height $banner-height
        h2
          font-size 16px
          font-weight normal
          margin-bottom 7px
          color #9684A3
        &_buttons
          &__appointment-button
            margin-right 20px

      &-advantages
      &-stocks
        margin-bottom 200px

      &-form
        padding 4px
        border-radius 2px
        background-image -webkit-linear-gradient(45deg, #2CC990, #9684A3)
        &_inner
          background #fff
          padding 60px 100px
</style>
