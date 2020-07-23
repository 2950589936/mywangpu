import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index.js';
import ElementUI from 'element-ui';
import VCharts from 'v-charts';

import "@/assets/style/theme.scss";
import 'element-ui/lib/theme-chalk/index.css';
import "./util/rem.js";


Vue.use(VCharts);
Vue.use(ElementUI);
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
