<template lang="pug">
.home-main-view-banner.h-100
    video.h-100(
        src="/img/banner-video.webm"
        loop
        autoplay
        muted
        playsinline
        )
    //- .home-main-view-banner__mosaic
        .home-main-view-banner__mosaic-tile(
            v-for="item in 21"

            :style="getTileStyle(item)"
            )
    //- .home-main-view-banner__inner(
      style="background-image: url('/img/laser-gone-tattoo-removal.webp');"
      )
</template>

<script>
export default {
  data: () => ({
  }),

  mounted() {
  },

  methods: {
    /**
     * Get tile style for animate
     *
     * @param {Number} item Current item number
     * @return {Object} Tile style data
     */
    getTileStyle(item) {
      const itemIndex = item - 1;
      const indexTop = Math.floor(itemIndex / 7);
      const indexLeft = item % 7;

      return {
        left: `${indexLeft * 78}px`,
        top: `${indexTop * 78}px`,
        'animation-delay': `${itemIndex * Math.random()}s`,
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
.home-main-view-banner
    position relative
    video
      border-radius 2px
    // &__inner
    //     width 100%
    //     height 100%
    //     background-size cover
    //     background-repeat no-repeat
    //     background-position left top
    //     border-radius 2px
    // &__mosaic
    //     &-tile
    //         width 78px
    //         height 78px
    //         border-radius 2px
    //         position absolute
    //         // backdrop-filter blur(5px)
    //         // box-shadow 1px 2px 4px rgba(#9684A3, .8)
    //         backdrop-filter none
    //         box-shadow none
    //         z-index 99
    //         animation mosaic-tile-animate 4s linear infinite
    //         transition all .3s ease
</style>

<style lang="stylus" scoped>
/** Less then 800 screen px */
@media screen and (max-width: 800px)
  .home-main-view-banner
    video
      width 100%
</style>
