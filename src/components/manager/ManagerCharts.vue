<template lang="pug">
.manager-charts.w-100(v-loading="loadingManagerCharts")
  .manager-charts__inner
    .flex.w-100.space-between
      h3 Сводные графики

      .manager-charts__inner-mnu.flex.gap-2.align-center
        el-select(
          v-model="period"
          )
          el-option(
            v-for="{ value, label } in periods"
            :value="value"
            :label="label"
            )

        el-radio-group(
          v-model="chartType"
          )
          el-radio-button(label="histogram")
            el-icon
              Histogram
          el-radio-button(label="pie")
            el-icon
              PieChart

    .flex.gap-2
      .manager-charts__inner-chart
        Bar(
          v-if="chartType === 'histogram'"
          id="my-chart-id"
          :style="chartStyle"
          :options="chartOptions"
          :data="chartData"
          )

        Pie(
          v-if="chartType === 'pie'"
          id="my-chart-id"
          :style="chartStyle"
          :options="chartOptions"
          :data="chartData"
          )

      el-radio-group.flex.f-col.align-start(v-model="chartName")
        el-radio.m-0(label="service") Услуги
        el-radio.m-0(label="master") Мастера
</template>

<script>
/** https://vue-chartjs.org */
import { Bar, Pie } from 'vue-chartjs';
import {
  Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement,
} from 'chart.js';
import periods from '../../api/periods';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

export default {
  components: {
    Bar,
    Pie,
  },

  computed: {
    loadingManagerCharts() {
      return this.$store.getters.loadingManagerCharts;
    },

    chart() {
      return this.$store.getters.chart;
    },

    chartData() {
      return {
        labels: (this.chart?.data || [])
          .map(({ name }) => name),
        datasets: [
          {
            label: 'В разрезе кол-во услуг за период',
            backgroundColor: (this.chart?.data || [])
              .map((_, index) => (index % 2 === 0
                ? `rgba(150,132,163,0.${(index || 1) * 2})`
                : `rgba(44,201,144,0.${(index || 1) * 3})`)),
            data: (this.chart?.data || [])
              .map(({ count }) => count || 0),
          },
        ],
      };
    },

    isCollapse() {
      return this.$store.getters.isCollapse || false;
    },

    chartStyle() {
      return {
        position: 'relative',
        height: 'calc(100vh - 200px)',
        width: this.isCollapse ? 'calc(100vw - 257px)' : 'calc(100vw - 433px)',
      };
    },
  },

  data: () => ({
    periods,

    chartType: 'histogram',
    chartName: 'service',
    period: 'month',

    chartOptions: {
      responsive: true,
      maintainAspectRatio: false,
    },
  }),

  mounted() {
    if (!this.chart) this.getChart();
  },

  watch: {
    chartName(chartName) {
      this.getChart(chartName);
    },

    period(period) {
      this.getChart(this.chartName, period);
    },
  },

  methods: {
    getChart(chartName = this.chartName, period = this.period) {
      this.$store.dispatch('setLoadingManagerCharts', true);
      setTimeout(() => {
        this.$store.dispatch('getChart', {
          chartName,
          period,
        });
        this.$store.dispatch('setLoadingManagerCharts', false);
      }, 500);
    },
  },
};
</script>

<style lang="stylus">
.manager-charts
  &__inner
    h3
      margin 0 0 40px
      color #9684A3

#my-chart-id
  height 100%
</style>
