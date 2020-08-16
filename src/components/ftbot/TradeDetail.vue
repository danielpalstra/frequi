<template>
  <b-card header="Trade detail">
    <b-card-body>
      <b-list-group flush>
        <b-list-group-item>
          <ValuePair description="TradeId">{{ trade.trade_id }}</ValuePair>
        </b-list-group-item>
        <b-list-group-item>
          <ValuePair description="Pair">{{ trade.pair }}</ValuePair>
        </b-list-group-item>
        <b-list-group-item>
          <ValuePair description="Open date">{{ timestampms(trade.open_timestamp) }}</ValuePair>
        </b-list-group-item>
        <b-list-group-item>
          <ValuePair description="Open Rate">{{ trade.open_rate }}</ValuePair>
        </b-list-group-item>
        <b-list-group-item v-if="!trade.is_open">
          <ValuePair description="Close Rate">{{ trade.close_rate }}</ValuePair>
        </b-list-group-item>
        <b-list-group-item>
          <ValuePair description="Min Rate">{{ trade.min_rate }}</ValuePair>
        </b-list-group-item>
        <b-list-group-item>
          <ValuePair description="Max Rate">{{ trade.max_rate }}</ValuePair>
        </b-list-group-item>
        <b-list-group-item>
          <ValuePair description="Close date" v-if="trade.close_timestamp">{{
            timestampms(trade.close_timestamp)
          }}</ValuePair>
        </b-list-group-item>
      </b-list-group>
    </b-card-body>
    <b-card-body>
      <b-card-title>Profit</b-card-title>
      <b-list-group flush>
        <b-list-group-item variant="danger">
          <ValuePair description="Current % profit" v-if="trade.current_profit_pct">
            {{ trade.current_profit_pct }}%
          </ValuePair>
        </b-list-group-item>
        <b-list-group-item>
          <ValuePair description="Current profit" v-if="trade.current_profit_abs">
            {{ trade.current_profit_abs }}
          </ValuePair>
        </b-list-group-item>
      </b-list-group>
    </b-card-body>
    <b-card-body>
      <b-card-title>Stoploss</b-card-title>
      <b-list-group flush>
        <b-list-group-item>
          <ValuePair description="Stoploss">
            {{ formatPercent(trade.stop_loss_pct / 100) }} |
            {{ formatPrice(trade.stop_loss) }}
          </ValuePair>
        </b-list-group-item>
        <b-list-group-item>
          <ValuePair description="Initial Stoploss">
            {{ formatPercent(trade.initial_stop_loss_pct / 100) }} |
            {{ formatPrice(trade.initial_stop_loss) }}
          </ValuePair>
        </b-list-group-item>
        <b-list-group-item>
          <ValuePair description="Current stoploss dist">
            {{ formatPercent(trade.stoploss_current_dist_ratio) }} |
            {{ formatPrice(trade.stoploss_current_dist) }}
          </ValuePair>
        </b-list-group-item>
        <b-list-group-item>
          <ValuePair description="Stoploss last updated">
            {{ timestampms(trade.stoploss_last_update_timestamp) }}
          </ValuePair>
        </b-list-group-item>
      </b-list-group>
    </b-card-body>
  </b-card>
</template>

<script lang="ts">
import { formatPercent, formatPrice, timestampms } from '@/shared/formatters';
import ValuePair from '@/components/ftbot/ValuePair.vue';

export default {
  name: 'TradeDetail',
  props: {
    trade: {
      type: Object,
      required: true,
    },
  },
  components: { ValuePair },
  methods: {
    formatPercent,
    formatPrice,
    timestampms,
  },
};
</script>
<style scoped></style>
