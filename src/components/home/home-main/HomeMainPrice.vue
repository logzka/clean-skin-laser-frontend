<template lang="pug">
.home-main-price(v-loading="loadingPrice")
  el-tabs(
    v-model="activeTab"
    :tab-position="displayWidth < 800 ? 'top' : 'left'"
    style="min-height: 200px"
    class="demo-tabs"
    )
    el-tab-pane(
      v-for="priceItem in prePrice"
      :label="priceItem.label"
      :name="priceItem.name"
      )
      el-table(
        :data="priceItem.data"
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
          :width="displayWidth < 800 ? '100' : '320'"
          )
</template>

<script>
export default {
  computed: {
    displayWidth() {
      return document.querySelector('body').offsetWidth || 0;
    },

    price() {
      return this.$store.getters.price || null;
    },

    prePrice() {
      return this.price || [];
    },
  },
  data: () => ({
    activeTab: 'depil',
    loadingPrice: false,
  }),
  async mounted() {
    this.loadingPrice = true;
    await this.$store.dispatch('getPrice');
    this.loadingPrice = false;
  },
};
</script>

<style lang="stylus">
</style>
