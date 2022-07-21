<template lang="pug">
.home-main-view-banner
    .home-main-view-banner__mosaic
        .home-main-view-banner__mosaic-item(
            v-for="item in 16"
            :key="item"
            )
            //- | {{ item }}
    .home-main-view-banner__inner
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
                right 34px
                top -6px
            &:nth-child(3)
                right 34px
                top 46px
            &:nth-child(4)
                right 84px
                top 36px
            &:nth-child(5)
                right 84px
                top -14px
            &:nth-child(6)
                right -16px
                top 30px
            &:nth-child(7)
                right 34px
                top 96px
            &:nth-child(8)
                right -16px
                top 80px
            &:nth-child(9)
                left -18px
                bottom -10px
            &:nth-child(10)
                left 32px
                bottom 28px
            &:nth-child(11)
                left 32px
                bottom -22px
            &:nth-child(12)
                left -18px
                bottom 40px
            &:nth-child(13)
                left 82px
                bottom -2px
            &:nth-child(14)
                left 32px
                bottom 78px
            &:nth-child(15)
                left 82px
                bottom 48px
            &:nth-child(16)
                left -18px
                bottom 90px
</style>
