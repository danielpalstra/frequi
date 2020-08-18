// https://www.sitepoint.com/creating-beautiful-charts-vue-chart-js/
<template>
  <section class="container">
    <h1>Demo examples of vue-chartjs</h1>
    <div class="columns">
      <div class="column">
        <h3>Daily profit</h3>
        <!-- <line-chart :data="dailyStats.data"></line-chart> -->
        <line-chart :data="dailyBalances"></line-chart>
      </div>
      <div class="column">
        <h3>Profit per pair</h3>
        <column-chart :colors="['green', '#666']" :data="profitPerPair"></column-chart>
        <!--Bar Chart example-->\
      </div>
      <div class="column">
        <h3>Number of trades per pair</h3>
        <column-chart :data="tradesPerPair"></column-chart>
        <!--Bar Chart example-->
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h3>Balance per pair</h3>
        <!-- <pie-chart :data="balancePerPair"></pie-chart> -->
        <!--Bubble Chart example-->
      </div>
      <div class="column">
        <h3>Reactivity - Live update upon change in datasets</h3>
        <!--Reactivity Line Chart example-->
      </div>
      <b-button class="float-right" size="sm" @click="getDailyBalances">R</b-button>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Line from 'vue-chartjs';

export default {
  name: 'DailyStats',
  computed: {
    ...mapState('ftbot', ['dailyBalances', 'performanceStats', 'balance']),
    dailyFields() {
      return [
        { key: 'date', label: 'Day' },
        { key: 'abs_profit', label: 'Profit' },
        { key: 'fiat_value', label: `In ${this.dailyBalances.fiat_display_currency}` },
        { key: 'trade_count', label: 'Trades' },
      ];
    },
    tradesPerPair() {
      const chartData = [];
      this.performanceStats.forEach((element) => {
        chartData.push([element.pair, element.count]);
      });
      return chartData;
    },
    profitPerPair() {
      const chartData = [];
      this.performanceStats.forEach((element) => {
        console.log(element);
        chartData.push([element.pair, element.profit]);
      });
      return chartData;
    },
    balancePerPair() {
      const chartData = [];
      this.balance.currencies.forEach((element) => {
        chartData.push([element.currency, element.est_stake]);
      });
      return chartData;
    },
  },
  methods: {
    ...mapActions('ftbot', ['getDailyBalances', 'getPerformance', 'getBalance']),
  },
  mounted() {
    this.getDailyBalances();
    this.getPerformance();
    this.getBalance();
  },
};
</script>