<template lang="pug">
.home-main-view-brands
  .home-main-view-brands__inner.grid-center.gap-4
    img.home-main-view-brands__item.w-100(
      v-for="brand in preBrands"
      :src="brand"
      )
</template>

<script>

export default {
  computed: {
    brands() {
      // return this.$store.getters.brands;
      return [
        '/img/brands/logo-body-series.webp',
        '/img/brands/logo-clinique.webp',
        '/img/brands/logo-la-prairie.webp',
        '/img/brands/logo-la-roche-posay.webp',
        '/img/brands/logo-loreal.webp',
        '/img/brands/logo-vichy.webp',
      ];
    },

    preBrands() {
      return this.brands || [];
    },
  },

  data: () => ({
  }),

  mounted() {
    // if (this.stocks) return;

    // this.$store.dispatch('setLoading', true);

    // setTimeout(() => {
    //   this.$store.dispatch('getStocks');
    //   this.$store.dispatch('setLoading', false);
    // }, 1000);
  },

  methods: {
  },
};
</script>

<style lang="stylus" scoped>
.home-main-view-brands
  &__inner
    grid-template-columns repeat(auto-fill, minmax(140px, 1fr))
</style>
