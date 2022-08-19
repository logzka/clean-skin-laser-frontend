<template lang="pug">
.home-main-calendar(v-loading="loadingCalendarSchedule")
    .home-main-calendar__inner.flex.f-col
        .home-main-calendar__inner_title.b Выберите дату, чтобы записаться

        el-calendar(
            ref="calendar"
            v-model="currentDate"
            )
            template(#header="{ date }")
                span {{ date }}
                el-button-group
                    el-button(
                        size="small"
                        @click="selectDate('today'),getCalendarSchedule(),popoverVisible=false"
                        ) Сегодня
                    el-button(
                        size="small"
                        @click="selectDate('next-month'),getCalendarSchedule(),popoverVisible=false"
                        ) След. месяц

            template(
              #dateCell="{ data }"
              )
              .w-100.h-100(
                :class="{'free-date': hasFree(data.day)}"

                @click="getFreeSchedule(data.day)"
                )
                p.b(
                  :class="data.isSelected ? 'is-selected' : ''"
                  ) {{ $formatDate(data.day, 'DD') }}&nbsp;
                  span(
                    v-if="hasFree(data.day)"
                    ) - есть свободные места

        el-popover(
            :width="600"
            :show-arrow="false"
            popper-style="position: fixed;top: 120px;right: 0;transform: unset;"
            virtual-triggering
            v-model:visible="popoverVisible"
            )
            .home-main-calendar__inner_table(
                v-if="currentDate"
                v-loading="loadingDateSchedule"
                )
                .home-main-calendar__inner_table-title.b Свободно на&nbsp;
                    span {{ $formatDate(currentDate) }}

                el-table.w-100(
                    :data="filteredByCurrentDateSchedule"
                    )
                    el-table-column(
                        fixed
                        prop="date"
                        label="Время"
                        width="70"
                        :formatter="getTime"
                        )
                    el-table-column(
                        prop="master"
                        label="Мастер"
                        sortable
                        :formatter="getFullMasterName"
                        )
                    el-table-column(
                        prop="master"
                        label="Услуги (-га)"
                        sortable
                        :formatter="divideServices"
                        )
                    el-table-column(width="175")
                        template(v-slot="row")
                            AppointmentButton(
                              :dataForDialog="createDataForAppointmentButton(row)"
                              buttonSize="small"
                              )

            .home-main-calendar__inner_empty(v-else) На текущую дату нет доступного времени

            .home-main-calendar__inner_close.flex.space-end
                el-button(
                    @click="popoverVisible = false"
                    ) Закрыть
</template>

<script>
export default {
  computed: {
    schedule() {
      return this.$store.getters.schedule || null;
    },

    preSchedule() {
      return this.schedule || [];
    },

    services() {
      return this.$store.getters.services || [];
    },

    // TODO: Remove when back filtering will add.
    filteredByCurrentDateSchedule() {
      const filteredByCurrentDate = this.preSchedule
        .filter((item) => this.$formatDate(item.date) === this.$formatDate(this.currentDate)) || [];

      return filteredByCurrentDate;
    },
  },

  data: () => ({
    currentDate: null,
    popoverVisible: false,
    loadingCalendarSchedule: false,
    loadingDateSchedule: false,
  }),

  mounted() {
    this.getCalendarSchedule();
  },

  unmounted() {
    this.$store.dispatch('resetSchedule');
  },

  watch: {
  },

  methods: {
    selectDate(period) {
      this.$refs.calendar.selectDate(period);
    },

    getTime(row, column, cellValue) {
      return this.$formatDate(cellValue, 'HH:mm');
    },

    getFullMasterName(row, column, cellValue) {
      return `${cellValue.first_name} ${cellValue.last_name}`;
    },

    setServicesToNames(services) {
      return (services || [])
        .map((serviceId) => this.services
          .find((service) => service.id === serviceId)?.name) || [];
    },

    divideServices(row, column, cellValue) {
      const formattedServicesToNames = this.setServicesToNames(cellValue.services);

      return formattedServicesToNames.join(', ');
    },

    getCalendarSchedule(dateRange) {
      this.loadingCalendarSchedule = true;

      setTimeout(() => {
        this.$store.dispatch('getSchedule', {
          date: dateRange || [new Date()],
          type: 'free',
        });

        this.loadingCalendarSchedule = false;
      }, 1000);
    },

    getFreeSchedule(date) {
      // TODO: Change after back-end will connect
      this.popoverVisible = date && this.hasFree(date);
      this.loadingDateSchedule = date && this.hasFree(date);

      setTimeout(() => {
        this.$store.dispatch('getSchedule', {
          date: date || new Date(),
          type: 'free',
        });

        this.loadingDateSchedule = false;
      }, 1000);
    },

    hasFree(date) {
      return this.preSchedule
        .some((el) => this.$formatDate(el.date) === this.$formatDate(date));
    },

    createDataForAppointmentButton({ row }) {
      return {
        date: row.date,
        time: this.$formatDate(row.date, 'HH:mm'),
        master: row.master.id,
        services: row.master.services,
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
.home-main-calendar
    &__inner
        &_title
            color #9684A3
            margin-bottom 15px
        .el-calendar
            margin-right 1%
            transition all .3s ease
            .free-date
              background-color #2CC990
              box-shadow 4px 4px 8px rgba(0,0,0, .2)
              color #fff
              border-radius 2px
              padding 5px
              transition all .1s ease
              &:hover
                box-shadow none
              span
                font-size 14px
        &_table
            height calc(100vh - 440px)
            padding 24px 0
            overflow auto
            &-title
                font-size 16px
                margin-bottom 15px
                span
                    color #2CC990
</style>
