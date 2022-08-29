<template lang="pug">
.home-main-lasers(v-loading="loadingLasers")
    .home-main-lasers__inner.flex.f-col(
        v-if="!loadingLasers"
        )
        .home-main-lasers__inner_appointment-button.po-fix
            AppointmentButton(
                buttonType="primary"
                )

        .home-main-lasers__inner_list.w-100(
            v-for="laser in preLasers"
            )
            .flex.space-between
                img.po-sticky(
                    :src="laser.photo"
                    )

                .home-main-lasers__inner_list__table
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
  }),

  mounted() {
    this.loadingLasers = true;
    setTimeout(() => {
      this.$store.dispatch('getLasers');
      this.loadingLasers = false;
    }, 1000);
  },

  methods: {
    getLaserImage(laser) {
      return laser.photo;
    },
  },
};
</script>

<style lang="stylus" scoped>
.home-main-lasers
    &__inner
        &_appointment-button
            left 40px
            top 140px
        &_list
            img
                height 380px
                width auto
            h3
                color #2CC990
            h4
                color #9684A3
</style>
