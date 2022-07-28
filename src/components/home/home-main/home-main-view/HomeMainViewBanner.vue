<template lang="pug">
.home-main-view-banner
    .home-main-view-banner__mosaic
        .home-main-view-banner__mosaic-tile(
            v-for="item in 21"
            :key="item"

            :style="getTileStyle(item)"
            )
    .home-main-view-banner__inner
</template>

<script>
export default {
  data: () => ({
  }),

  methods: {
    getTileStyle(item) {
      const itemIndex = item - 1;
      const indexTop = Math.floor(itemIndex / 7);
      const indexLeft = item % 7;

      return {
        left: `${indexLeft * 78}px`,
        top: `${indexTop * 78}px`,
        'animation-delay': `${item * Math.random()}s`,
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
$banner-width = 548px
$banner-height = 234px

.home-main-view-banner
    height $banner-height
    width $banner-width
    position relative
    &__inner
        width 100%
        height 100%
        background-image url('@/assets/laser-gone-tattoo-removal.jpeg')
        background-size cover
        background-repeat no-repeat
        background-position left top
        border-radius 2px
    &__mosaic
        &-tile
            width 78px
            height 78px
            border-radius 2px
            position absolute
            backdrop-filter blur(5px)
            box-shadow 1px 2px 4px rgba(#9684A3, .8)
            z-index 99
            animation mosaic-tile-animate 4s ease-in-out infinite
            transition all .3s ease
            &:hover
                animation none
                backdrop-filter none
                box-shadow none
</style>
