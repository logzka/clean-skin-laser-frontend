<template lang="pug">
.home-main-lasers(v-loading="loadingLasers")
    .home-main-lasers__inner(
        v-if="!loadingLasers"
        )
        .home-main-lasers__inner-list.w-100(
            v-for="laser in preLasers"
            )
            .flex.space-between
                img(
                    v-if="!laser.animate"
                    :src="laser.photo"
                    )

                .home-main-lasers__inner-list_laser-animate(
                    v-else
                    )
                    //- img(
                    //-     v-for="(laserImg, photoIndex) in (laser.animate_photos || [])"
                    //-     v-show="counter === photoIndex"
                    //-     :src="laserImg"
                    //-     )
                    img(src="@/assets/lasers/laser-combaine-animate/0.png" v-show="counter === 0")
                    img(src="@/assets/lasers/laser-combaine-animate/1.png" v-show="counter === 1")
                    img(src="@/assets/lasers/laser-combaine-animate/2.png" v-show="counter === 2")
                    img(src="@/assets/lasers/laser-combaine-animate/3.png" v-show="counter === 3")
                    img(src="@/assets/lasers/laser-combaine-animate/4.png" v-show="counter === 4")
                    img(src="@/assets/lasers/laser-combaine-animate/5.png" v-show="counter === 5")
                    img(src="@/assets/lasers/laser-combaine-animate/6.png" v-show="counter === 6")
                    img(src="@/assets/lasers/laser-combaine-animate/7.png" v-show="counter === 7")
                    img(src="@/assets/lasers/laser-combaine-animate/8.png" v-show="counter === 8")
                    img(src="@/assets/lasers/laser-combaine-animate/9.png" v-show="counter === 9")
                    img(src="@/assets/lasers/laser-combaine-animate/10.png" v-show="counter === 10")
                    img(src="@/assets/lasers/laser-combaine-animate/11.png" v-show="counter === 11")
                    img(src="@/assets/lasers/laser-combaine-animate/12.png" v-show="counter === 12")
                    img(src="@/assets/lasers/laser-combaine-animate/13.png" v-show="counter === 13")
                    img(src="@/assets/lasers/laser-combaine-animate/14.png" v-show="counter === 14")
                    img(src="@/assets/lasers/laser-combaine-animate/15.png" v-show="counter === 15")
                    img(src="@/assets/lasers/laser-combaine-animate/16.png" v-show="counter === 16")
                    img(src="@/assets/lasers/laser-combaine-animate/17.png" v-show="counter === 17")
                    img(src="@/assets/lasers/laser-combaine-animate/18.png" v-show="counter === 18")
                    img(src="@/assets/lasers/laser-combaine-animate/19.png" v-show="counter === 19")
                    img(src="@/assets/lasers/laser-combaine-animate/20.png" v-show="counter === 20")
                    img(src="@/assets/lasers/laser-combaine-animate/21.png" v-show="counter === 21")
                    img(src="@/assets/lasers/laser-combaine-animate/22.png" v-show="counter === 22")

                .home-main-lasers__inner-list_table
                    h3.m0 {{ laser.name }}

                    el-table(
                        :data="laser.desc"
                        )
                        el-table-column(
                            type="expand"
                            )
                            template(#default="scope")
                                p(style="padding-left: 60px;") {{ scope.row?.sub_desc }}
                        el-table-column
                            template(#default="scope")
                                h4 {{ scope.row?.title }}
</template>

<script>
export default {
  computed: {
    lasers() {
      return this.$store.getters.lasers || null;
    },

    preLasers() {
      return this.lasers || [];
    },
  },

  data: () => ({
    loadingLasers: false,
    counter: 0,
    animateInterval: null,
  }),

  mounted() {
    this.loadingLasers = true;
    setTimeout(() => {
      this.$store.dispatch('getLasers');
      this.loadingLasers = false;

      this.animateInterval = this.setAnimateLaserPhoto(22);
    }, 1000);
  },

  methods: {
    setAnimateLaserPhoto(animatePhotoCount = 0) {
      return setInterval(() => {
        this.counter += 1;
        if (this.counter === animatePhotoCount) this.counter = 0;
      }, 180);
    },

    stopAnimatePhotos(e) {
      console.log(e);
      // e.preventDefault();
      clearInterval(this.animateInterval);
      this.animateInterval = null;
    },
  },
};
</script>

<style lang="stylus" scoped>
.home-main-lasers
    &__inner
        &-list
            img
                width 320px
                height auto
            h3
                color #2CC990
            h4
                color #9684A3
            &_laser-animate
                position relative
                img
                    position absolute
</style>
