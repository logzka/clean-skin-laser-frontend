<template lang="pug">
.home-main-studio
    .home-main-studio__inner.flex(v-loading="loadingStudio")
        el-carousel(
            ref="homeMainStudioCarousel"
            indicator-position="outside"
            height="calc(100vh - 560px)"
            :autoplay="false"
            @change="setCurrentStudioItem"
            )
            el-carousel-item.flex(
                v-for="item in studio"
                )
                h3.m0 {{ item.label }}

        .home-main-studio__inner-content.flex.f-col.space-between
            .home-main-studio__inner-content_desc
                h3 {{ currentStudioItem?.title }}
                p {{ currentStudioItem?.desc }}
            .home-main-studio__inner-content_button
                AppointmentButton(
                  buttonType="primary"
                  )
</template>

<script>
export default {
  data: () => ({
    currentStudioItem: null,
    loadingStudio: false,
  }),

  computed: {
    studio() {
      return this.$store.getters.studio || [];
    },
  },

  mounted() {
    this.loadingStudio = true;
    setTimeout(() => {
      this.$store.dispatch('getStudio');
      // TODO: Its cause the strange behaviour of El-UI Carousel without autoplay option.
      this.$refs.homeMainStudioCarousel.setActiveItem(0);

      this.setCurrentStudioItem(0);

      this.loadingStudio = false;
    }, 1000);
  },

  methods: {
    setCurrentStudioItem(itemIndex) {
      this.currentStudioItem = this.studio[itemIndex] || null;
    },
  },
};
</script>

<style lang="stylus">
.home-main-studio
    &__inner
        .el-carousel
            width 50%
            margin-right 5%
            &__container
                //TODO: Разобраться с высотой контейнера.
                min-height 300px
            &__item
                background-image url('@/assets/studio/studio_1.webp')
                border-radius: 2px;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center
                padding 15px
                h3
                    height fit-content
                    color #fff
                    background rgba(#9684A3, .6)
                    padding 0 5px
                    border-radius 2px
        &-content
            width 45%
            &_desc
                margin-bottom 50px
                h3
                    color #9684A3
                    margin 15px 0 25px
            &_button
                margin-bottom 45px
</style>
