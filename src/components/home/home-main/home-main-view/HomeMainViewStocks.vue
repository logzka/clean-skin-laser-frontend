<template lang="pug">
.home-main-view-stocks
  el-carousel(
    indicator-position="outside"
    )
    el-carousel-item.flex(
      v-for="stock in stocksApi"
      :key="stock.id"
      )
      h3 {{ stock.name }}
</template>

<script>
import stocksApi from '@/server';

export default {
  data: () => ({
    stocksApi,
  }),

  methods: {
    getStockBanner(stock) {
      return {
        backgroundImage: `url('@${stock.route}')`,
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
.el-carousel__item
  background-image url('@/assets/laser-gone-tattoo-removal.jpeg')
  border-radius: 2px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top
</style>
