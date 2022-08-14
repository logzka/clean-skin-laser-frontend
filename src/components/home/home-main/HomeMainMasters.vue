<template lang="pug">
.home-main-masters
    .home-main-masters__inner.flex.f-col
        .home-main-masters__inner-skeleton(
            v-if="loadingMasters"
            )
            el-card.box-card.w-100(
                v-for="item in 2"
                )
                el-skeleton(
                    :loading="loadingMasters"
                    animated
                    )
                    template(#template)
                        .flex
                            el-skeleton-item(
                                variant="image"
                                style="width: 200px; height: auto;margin-right: 25px;"
                                )
                            .w-100.flex.f-col
                                el-skeleton-item(
                                    variant="h3"
                                    style="width: 215px;margin-bottom: 50px;"
                                    )
                                el-skeleton-item(
                                    variant="text"
                                    style="width: 400px;margin-bottom: 15px;"
                                    )
                                el-skeleton-item(
                                    variant="text"
                                    style="width: 125px;margin-bottom: 15px;"
                                    )
                                el-skeleton-item(
                                    variant="text"
                                    style="width: 510px;"
                                    )
        .home-main-masters__inner-cards(
            v-else
            )
            el-card.box-card.w-100(
                v-for="master in preMasters"
                shadow="hover"
                )
                template(#header)
                    .card-header.flex.space-between
                        h2 {{ master.master.first_name }} {{ master.master.last_name }}
                        el-button.button(
                            type="primary"
                            @click="openHomeMainDialog(master.master)"
                            ) Записаться
                .box-card__content.flex
                    .box-card__content-photo
                    .box-card__content-text
                        h3 Процедуры
                        | {{ divideServices(master.master.services) }}
                        h3 Квалификация
                        | {{ master.master.skills }}
                        h3 Опыт работы
                        | {{ master.master.experience }}
                        h3 Ближайшие свободные места
                        div(
                            v-for="date in master.master.closest_free_dates"
                            :key="date"
                            ) {{ $formatDate(date, 'DD.MM') }} на {{ $formatDate(date, 'HH:mm') }}
                    .box-card__content-connect
                        a.el-button(
                            href="https://instagram.com/"
                            target="_blank"
                            ) Перейти в Инстаграм
</template>

<script>
export default {
  computed: {
    masters() {
      return this.$store.getters.masters || null;
    },

    preMasters() {
      return this.masters || [];
    },

    services() {
      return this.$store.getters.services || [];
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

  methods: {
    openHomeMainDialog(master) {
      this.$emitter.emit('openHomeMainDialog', { master: master.id });
    },

    setServicesToNames(services) {
      return (services || [])
        .map((serviceId) => this.services
          .find((service) => service.id === serviceId)?.name) || [];
    },

    divideServices(masterServices) {
      const formattedServicesToNames = this.setServicesToNames(masterServices);

      return formattedServicesToNames.join(', ');
    },
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
                    min-width 400px
                    height auto
                    margin-right 25px
                    border-radius 2px
                    background-image url('@/assets/masters/vospanova.jpeg')
                    background-size cover
                    background-repeat no-repeat
                    background-position center
                &-text
                    h3:first-child
                        margin-top 0
</style>
