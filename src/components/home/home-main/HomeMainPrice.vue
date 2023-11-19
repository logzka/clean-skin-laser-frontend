<template lang="pug">
.home-main-price
  el-tabs(
    :tab-position="displayWidth < 800 ? 'top' : 'left'"
    style="min-height: 200px"
    class="demo-tabs"
    )
    el-tab-pane(label="Депиляция: шугаринг | ваксинг")
      el-table(
        :data="price"
        style="width: 100%"
        row-key="zone"
        default-expand-all
        )
        el-table-column(
          prop="zone"
          label="Зона"
          )
        el-table-column(
          prop="cost"
          label="Стоимость, руб."
          width="320"
          )
    //- el-tab-pane(label="Эпиляция (диодный лазер)")
    //- el-tab-pane(label="Эпиляция (ELOS)")
</template>

<script>
export default {
  computed: {
    displayWidth() {
      return document.querySelector('body').offsetWidth || 0;
    },
  },
  data: () => ({
    price: [{
      zone: 'Бикини',
      cost: '',
      oldCost: '',
      children: [{
        zone: 'Глубокое',
        cost: '1320',
        oldCost: '',
      }, {
        zone: 'Классическое',
        cost: '650',
        oldCost: '',
      }],
    }, {
      zone: 'Грудь',
      cost: '',
      oldCost: '',
      children: [{
        zone: 'Межгрудное пространство',
        cost: '320',
        oldCost: '',
      }, {
        zone: 'Oреолы сосков',
        cost: '380',
        oldCost: '',
      }],
    }, {
      zone: 'Живот',
      cost: '',
      oldCost: '',
      children: [{
        zone: 'Дорожка',
        cost: '180',
        oldCost: '',
      }, {
        zone: 'Живот полностью',
        cost: '500',
        oldCost: '',
      }],
    }, {
      zone: 'Лицо',
      cost: '',
      oldCost: '',
      children: [{
        zone: 'Усики | Подбородок | Нос',
        cost: '180',
        oldCost: '',
      }, {
        zone: 'Баки | Шея',
        cost: '280',
        oldCost: '',
      }, {
        zone: 'Лицо полностью',
        cost: '800',
        oldCost: '',
      }],
    }, {
      zone: 'Ноги',
      cost: '',
      oldCost: '',
      children: [{
        zone: 'Бедра',
        cost: '680',
        oldCost: '',
      }, {
        zone: 'Голени',
        cost: '800',
        oldCost: '',
      }, {
        zone: 'Пальчики + Подъем',
        cost: '100',
        oldCost: '',
      }, {
        zone: 'Ноги полностью',
        cost: '1400',
        oldCost: '',
      }],
    }, {
      zone: 'Подмышки',
      cost: '380',
      oldCost: '',
    }, {
      zone: 'Руки',
      cost: '',
      oldCost: '',
      children: [{
        zone: 'Руки до локтя',
        cost: '560',
        oldCost: '',
      }, {
        zone: 'Руки полностью',
        cost: '820',
        oldCost: '',
      }],
    }, {
      zone: 'Спина',
      cost: '',
      oldCost: '',
      children: [{
        zone: 'Поясница',
        cost: '400',
        oldCost: '',
      }, {
        zone: 'Спина полностью',
        cost: '700',
        oldCost: '',
      }],
    }, {
      zone: 'Шея',
      cost: '360',
      oldCost: '',
    }, {
      zone: 'Ягодицы',
      cost: '500',
      oldCost: '',
    }],
  }),
};
</script>

<style lang="stylus">
/** Less then 900 screen px */
@media screen and (max-width: 900px)
  .el-tabs--left
    overflow unset!important
  .el-tabs--left .el-tabs__header.is-left
    float unset!important
</style>
