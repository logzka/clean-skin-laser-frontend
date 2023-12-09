<template lang="pug">
el-main.home-main
  .home-main-inner

    .home-main-inner__view(v-if="$route.path === '/'")

      section.home-main-inner__view-main.flex.space-between.f-wrap

        .home-main-inner__view-main_content.flex.f-col.space-between.align-start

          .home-main-inner__view-main_content_title.w-100.flex.space-between.align-center
            h1 D &#149; Aesthetic Studio

            ul.home-main-inner__view-main_social-list.flex
              li.home-main-inner__view-main_social-list__item.po-r
                a.po-a(
                  href="https://instagram.com/"
                  target="_blank"
                  style="background-image: url('img/instagram.svg');"
                  )
              li.home-main-inner__view-main_social-list__item
                a.po-a(
                  href="/"
                  target="_blank"
                  style="background-image: url('img/telegram.svg');"
                  )

          .home-main-inner__view-main_content-text
            h2 Сведение/осветление татуировок
            h2 Удаление татуажа
            h2 Эпиляция
            h2 Депиляция
            h2 Шугаринг
            h2 Эстетическиая косметология

          .home-main-inner__view-main_content-buttons.flex.f-wrap
            AppointmentButton.home-main-inner__view-main_content-buttons__appointment-button
            el-button.home-main-inner__view-main_content-buttons__pay-system-button(
              size="large"
              type="primary"
              aria-label="price system"
              name="priceSystem"
              ) Система абонементов

        .home-main-inner__view-main_banner
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
.home-main
  --el-main-padding 80px 20px
  width 76vw
  margin 0 auto
  &-inner
    &__view
      &-main
        margin-bottom 200px
        gap 3em
        &_banner
          height 360px
        &_social-list
          &__item
            margin-right 10px
            width 28px
            height 28px
            &:last-child
              margin-right 0px
            a
              width inherit
              height inherit
              background-repeat no-repeat
              background-position center
              background-size cover
        &_content
          &_title
            color #9684A3
            font-size 20px
          h2
            font-size 16px
            font-weight normal
            margin-bottom 7px
            color #9684A3
          &-buttons
            &__appointment-button
              margin-right 20px

      &-advantages
        margin-bottom 150px
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

<style lang="stylus" scoped>
/** Less then 1500 screen px */
@media screen and (max-width: 1500px)
  .home-main
    &-inner
      &__view
        &-main
          &_banner
            height 300px

/** Less then 1300 screen px */
@media screen and (max-width: 1300px)
  .home-main
    &-inner
      &__view
        &-main
          &_banner
            height 240px

/** Less then 1100 screen px */
@media screen and (max-width: 1100px)
  .home-main
    width 100%
    &-inner
      &__view
        &-main
          &_banner
            height 280px

/** Less then 900 screen px */
@media screen and (max-width: 900px)
  .home-main
    &-inner
      &__view
        &-main
          &_banner
            height 220px

/** Less then 800 screen px */
@media screen and (max-width: 800px)
  .home-main
    &-inner
      &__view
        &-main
          margin-bottom 100px
          &_content
            // margin-bottom 32px
            height 300px
            &-buttons
              &__pay-system-button
                margin-bottom 32px
              &__appointment-button
                margin-bottom 10px

          &_banner
            width calc(100vw - 40px)
            height auto

        &-form
          &_inner
            padding 20px

        &-advantages
          margin-bottom 50px
        &-stocks
          margin-bottom 100px
</style>
