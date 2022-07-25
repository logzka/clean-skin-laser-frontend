<template lang="pug">
el-main.home-main
  .home-main-inner

    .home-main-inner__view(v-if="$route.path === '/'")

      .home-main-inner__view-title.flex.space-between.align-center
        h1 Clean Skin Laser Studio
        a.b(
          href="tel:+79604867349"
          ) +7 960 486 7349
        //- a.b(
          href="#"
          target="_blank"
          ) Instagram

      section.flex.space-between.f-wrap(style="margin-bottom: 200px;")

        .home-main-inner__view-content.flex.f-col.space-between.align-start
          .home-main-inner__view-content_text
            h2 Сведение/осветление татуировок
            h2 Удаление татуажа
            h2 Эпиляция
            h2 Карбоновый пиллинг

          .home-main-inner__view-content_buttons.flex
            el-button.green(style="margin-right: 20px;" size="large") Записаться
            el-button.purple(size="large") Акции

        .home-main-inner__view-banner
          home-main-view-banner

      section.home-main-inner__view-advantages
        home-main-view-advantages

      section.home-main-inner__view-form
        home-main-form

    router-view(v-else)
</template>

<script>
import HomeMainViewBanner from './home-main/home-main-view/HomeMainViewBanner.vue';
import HomeMainViewAdvantages from './home-main/home-main-view/HomeMainViewAdvantages.vue';
import HomeMainForm from './home-main/HomeMainForm.vue';

export default {
  components: {
    HomeMainViewBanner,
    HomeMainViewAdvantages,
    HomeMainForm,
  },

  data: () => ({
    text: 'Добро пожаловать в нашу студию лазерной косметологии',
  }),
};
</script>

<style lang="stylus">
$banner-height = 195px;

.home-main
  --el-main-padding 80px 20px
  width 1130px
  margin 0 auto
  &-inner
    &__view
      &-title
        margin-bottom 40px
        color #9684A3
        a
          color #2CC990
      &-content
        max-width 45%
        height $banner-height
        h2
          font-size 16px
          font-weight normal
          margin-bottom 7px
          // color #9684A3
        // &_text
        // &_buttons

      &-advantages
      // &-form
        margin-bottom 200px

      // &-form
</style>
