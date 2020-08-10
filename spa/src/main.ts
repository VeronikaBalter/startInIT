import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import vuetify from './plugins/vuetify';
import VeeValidate from 'vee-validate';
import Toasted from 'vue-toasted';
 

require('./configs/axios-config.js');

Vue.use(VeeValidate);
Vue.config.productionTip = false;
Vue.use(Toasted);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
