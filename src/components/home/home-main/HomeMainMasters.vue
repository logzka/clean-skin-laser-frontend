<template lang="pug">
.home-main-masters(v-loading="loadingMasters")
  .home-main-masters__inner.flex.f-col
    .home-main-masters__inner-cards
      el-card.box-card(
        v-for="master in preMasters"
        shadow="hover"
        )
        template(#header)
            .card-header.flex.space-between.align-center.f-wrap.gap
              h2 {{ master.first_name }}&nbsp;{{ master.last_name }}
              .flex.align-center.gap
                AppointmentButton(
                  :dataForDialog="{ master: master.id }"
                  buttonType="primary"
                  )
                a(
                  href="https://instagram.com/"
                  target="_blank"
                  style="width: 24px;height: 24px;"
                  )
                  img(
                    src="img/instagram.svg"
                    alt="instagram ссылка"
                    )
        .box-card__content.flex.space-between.f-wrap.gap-2
          .flex.f-wrap.gap-2
            .box-card__content-photo(
              :style="{ backgroundImage: `url('/img/${master.photo}')` }"
              )
            .box-card__content-text
              //- h3 Процедуры
              //- p.m0.p0 {{ $formatServices(master.services, servicesMap) }}
              .flex.gap.f-wrap
                el-tag(
                  v-for="service in master.services"
                  :key="service"
                  type="success"
                  effect="light"
                  size="large"
                  ) {{ $formatServices([service], servicesMap) }}
              h3 Квалификация
              p.m0.p0 {{ master.skills }}
              h3 Опыт работы
              p.m0.p0 {{ master.experience }}
              h3 Ближайшие свободные места
              div(
                v-for="date in master.closest_free_dates"
                :key="date"
                ) {{ $formatDate(date, 'DD.MM') }} на {{ $formatDate(date, 'HH:mm') }}
</template>

<script>
export default {
  computed: {
    activeMasters() {
      return this.$store.getters.activeMasters || null;
    },
    preMasters() {
      return this.activeMasters || [];
    },
    servicesMap() {
      return this.$store.getters.servicesMap || {};
    },
  },

  data: () => ({
    loadingMasters: false,
    params: {
      dateFree: null,
      timeFree: null,
      name: null,
      serviceType: null,
    },
  }),

  mounted() {
    this.loadingMasters = true;

    setTimeout(() => {
      this.$store.dispatch('getMasters', this.params);

      this.loadingMasters = false;
    }, 1000);
  },
};
</script>

<style lang="stylus" scoped>
.home-main-masters
  &__inner
    .box-card
      margin-bottom 25px
      &:last-child
        margin-bottom 0
      h2, h3
        color #9684A3
        margin-bottom 5px

      &__content
        &-photo
          min-width calc(20em - 20px)
          min-height 20em
          height auto
          border-radius 2px
          background-size cover
          background-repeat no-repeat
          background-position top center
        &-text
          h3:first-child
            margin-top 0
</style>

<style lang="stylus" scoped>
/** More than 901 screen px */
@media screen and (min-width: 901px)
  .box-card
    &__content
      &-text
        max-width calc(100% - 20em - 20px)

/** Less than 900 screen px */
@media screen and (max-width: 900px)
  .box-card
    &__content
      &-photo
        flex-grow 1
</style>
