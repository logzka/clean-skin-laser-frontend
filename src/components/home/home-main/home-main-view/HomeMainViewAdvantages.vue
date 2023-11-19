<template lang="pug">
.home-main-view-advantages.flex.space-center.f-wrap
    .home-main-view-advantages_item.flex.f-col.align-center
        el-icon.home-main-view-advantages_item-icon
            User
        .home-main-view-advantages_item-text.b.text-center(
            v-html="'Сертифицированные<br/>специалисты'"
            )

    //- .home-main-view-advantages_item.flex.f-col.align-center
    //-     el-icon.home-main-view-advantages_item-icon
    //-         SwitchButton
    //-     .home-main-view-advantages_item-text.b.text-center
    //-         a(
    //-             href="https://nettattoo.ru/"
    //-             target="_blank"
    //-             ) Качественное оборудование
    //-                 br
    //-                 | компании&nbsp;
    //-                 span.lasertech-link Lasertech

    .home-main-view-advantages_item.flex.f-col.align-center
        el-icon.home-main-view-advantages_item-icon
            Money
        .home-main-view-advantages_item-text.b.text-center(
            v-html="'Выгодная система<br/>абонементов'"
            )
</template>

<script>
export default {
  components: {
  },

  data: () => ({
  }),
};
</script>

<style lang="stylus" scoped>
.home-main-view-advantages
    &_item
        margin 0 5% 50px
        &-icon
            font-size 48px
            margin-bottom 20px
            color #9684A3
        &-text
            .lasertech-link
                color rgb(234,89,76)
</style>
