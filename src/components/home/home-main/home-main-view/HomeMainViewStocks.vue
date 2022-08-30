<template lang="pug">
.home-main-view-stocks
  el-carousel(
    indicator-position="outside"
    )
    el-carousel-item.flex(
      v-for="stock in stocks"
      :style="{ backgroundImage: `url('${stock.image}'` }"
      )
      h3 {{ stock.name }}
</template>

<script>

export default {
  computed: {
    stocks() {
      return this.$store.getters.stocks || [];
    },
  },

  data: () => ({
  }),

  mounted() {
    this.$store.dispatch('getStocks');
  },

  methods: {
    /**
     * Get stock bunner image
     *
     * @param {Object} stock Current stock data
     * @return {Object} Stock style background image
     */
    getStockBanner(stock) {
      return {
        backgroundImage: `url('@${stock.image}')`,
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
.el-carousel__item
  border-radius: 2px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top
</style>
