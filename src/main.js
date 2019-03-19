import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import VueRouter from 'vue-router';
import VueTyperPlugin from 'vue-typer';
import 'buefy/dist/buefy.css';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Buefy);
Vue.use(VueTyperPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app');
