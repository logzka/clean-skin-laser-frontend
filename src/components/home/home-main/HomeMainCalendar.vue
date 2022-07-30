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
                        @click="selectDate('today')"
                        ) Сегодня
                    el-button(
                        size="small"
                        @click="selectDate('next-month')"
                        ) След. месяц

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
                    :data="preSchedule"
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
                        )
                    el-table-column(
                        prop="services"
                        label="Услуги (-га)"
                        sortable
                        :formatter="divideServices"
                        )
                    el-table-column(width="175")
                        template(#default)
                            el-button(
                                type="success"
                                size="small"
                                ) Записаться

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
  },

  data: () => ({
    currentDate: null,
    popoverVisible: false,
    loadingCalendarSchedule: false,
    loadingDateSchedule: false,
  }),

  mounted() {
    this.loadingCalendarSchedule = true;

    setTimeout(() => {
      this.$store.dispatch('getSchedule', {
        date: this.currentDate || new Date(),
        type: 'free',
      });

      this.loadingCalendarSchedule = false;
    }, 1000);
  },

  watch: {
    currentDate(date) {
      this.popoverVisible = true;

      this.loadingDateSchedule = true;

      setTimeout(() => {
        this.$store.dispatch('getSchedule', {
          date: date || new Date(),
          type: 'free',
        });

        this.loadingDateSchedule = false;
      }, 1000);
    },
  },

  methods: {
    selectDate(period) {
      this.$refs.calendar.selectDate(period);
    },

    getTime(row, column, cellValue) {
      return this.$formatDate(cellValue, 'HH:mm');
    },

    divideServices(row, column, cellValue) {
      return cellValue.join(', ');
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
