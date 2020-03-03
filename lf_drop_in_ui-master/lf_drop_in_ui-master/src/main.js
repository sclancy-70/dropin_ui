import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './assets/styles/index.css';

Vue.config.productionTip = false

// Configure Axios
const axiosConfig = {
  timeout: 5000,
}

// Define axios for http requests
Vue.use(VueAxios, axios.create(axiosConfig));

new Vue({
  render: h => h(App),
}).$mount('#app')
