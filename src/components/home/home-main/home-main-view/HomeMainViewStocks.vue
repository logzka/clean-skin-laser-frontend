<template lang="pug">
.home-main-view-stocks
  el-carousel(
    indicator-position="outside"
    )
    el-carousel-item.flex(
      v-for="stock in preStocks"
      :style="{ backgroundImage: `url('img/${stock.image}')` }"
      )
      .flex-center.text-center.w-100
        h2(
          style="color: #fff;background: var(--el-color-primary-light-3);max-width: 45%;"
          ) {{ stock.name }}
</template>

<script>

export default {
  computed: {
    stocks() {
      return this.$store.getters.activeStocks;
    },

    preStocks() {
      return this.stocks || [];
    },
  },

  data: () => ({
  }),

  mounted() {
    if (this.stocks) return;

    this.$store.dispatch('setLoading', true);

    setTimeout(() => {
      this.$store.dispatch('getStocks');
      this.$store.dispatch('setLoading', false);
    }, 1000);
  },

  methods: {
  },
};
</script>

<style lang="stylus" scoped>
.el-carousel__item
  border-radius: 2px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center
</style>
