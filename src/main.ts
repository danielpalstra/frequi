import Chartkick from 'chartkick';
import VueChartkick from 'vue-chartkick';
import Line from 'vue-chartjs';

import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import store from './store';
import router from './router';
import { init } from './shared/apiService';

init(store);

Vue.config.productionTip = false;

Vue.use(VueChartkick, { Chartkick });

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
