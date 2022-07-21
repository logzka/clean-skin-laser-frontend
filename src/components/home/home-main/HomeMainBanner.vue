<template lang="pug">
.home-main-banner
    .home-main-banner__mosaic
        .home-main-banner__mosaic-item(
            v-for="item in 9"
            :key="item"
            )
            //- | {{ item }}
    .home-main-banner__inner
</template>

<script>
export default {
  data: () => ({
  }),
};
</script>

<style lang="stylus" scoped>
$banner-height = 195px
$banner-width = 500px

.home-main-banner
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
        &-item
            width 48px
            height 48px
            border-radius 2px
            position absolute
            backdrop-filter blur(5px)
            box-shadow 1px 2px 4px rgba(#9684A3, .8)
            z-index 99
            &:nth-child(1)
                right -16px
                top -20px
            &:nth-child(2)
                right 56px
                top -6px
            &:nth-child(3)
                right 34px
                top 148px
            &:nth-child(4)
                right 74px
                top 68px
            &:nth-child(5)
                right 134px
                top -14px
            &:nth-child(6)
                right -8px
                top 74px
            &:nth-child(7)
                left -18px
                bottom -10px
            &:nth-child(8)
                left -4px
                bottom 66px
            &:nth-child(9)
                left 62px
                bottom 14px
</style>
