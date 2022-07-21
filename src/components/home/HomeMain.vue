<template lang="pug">
el-main.home-main
  .home-main-inner

    h1.home-main-inner__title Clean Skin Laser Studio

    .home-main-inner__view(v-if="$route.path === '/'")

      div.home-main-inner__view-content
        p.home-main-inner__view-text {{ text }}

        .home-main-inner__view-buttons
          el-button.green Записаться
          el-button.purple Акции

      home-main-banner

    router-view(v-else)
</template>

<script>
import HomeMainBanner from './home-main/HomeMainBanner.vue';

export default {
  components: {
    HomeMainBanner,
  },

  data: () => ({
    text: 'Безусловно, глубокий уровень погружения позволяет оценить значение направлений прогрессивного развития. Прежде всего, современная методология разработки способствует повышению качества благоприятных перспектив.',
  }),
};
</script>

<style lang="stylus">
$banner-height = 195px;

.home-main
  --el-main-padding 20px
  width 1130px
  margin 0 auto
  &-inner
    &__title
      margin-bottom 40px
    &__view
      display flex
      justify-content: space-between;
      align-items flex-end
      flex-wrap wrap

      &-content
        max-width 45%
        height $banner-height
        display flex
        flex-direction column
        justify-content space-between
        align-items flex-start

      &-text
        line-height 1.5
        // text-indent 25px
        margin 0
      &-buttons
        display flex
        justify-content space-between
</style>
