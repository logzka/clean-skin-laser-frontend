<template lang="pug">
.home-main-contacts-general.h-100.flex.f-col
  ul.home-main-contacts-general_list.flex
    li.home-main-contacts-general_list-item
      a(href="https://instagram.com/" target="_blank")
        img(:src="`img/instagram${iconColor ? `-${iconColor}` : ''}.svg`" alt="instagram ссылка")
    li.home-main-contacts-general_list-item
      a(href="/" target="_blank")
        img(:src="`img/telegram${iconColor ? `-${iconColor}` : ''}.svg`" alt="telegram ссылка")
    li.home-main-contacts-general_list-item
      a(href="https://vk.com/" target="_blank")
        img( :src="`img/vk${iconColor ? `-${iconColor}` : ''}.svg`" alt="vk ссылка")

  .home-main-contacts-general_phone
    a(href="tel:+79604867349") +7 (960) 486 73 49

  .home-main-contacts-general_address
    el-icon
      Location
    span Москва, ул. Красная, 144
</template>

<script>
export default {
  props: {
    iconColor: {
      type: String,
      default: '',
    },
  },
  data: () => ({}),
};
</script>

<style lang="stylus" scoped>
.home-main-contacts-general
  min-width 300px
  img
    width 28px
    height 28px
  &_list
    &-item
      margin-right 15px
      &:last-child
        margin-right 0px
  &_address
    .el-icon
      margin-right 5px
</style>
