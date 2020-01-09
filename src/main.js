import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCompositionApi from '@vue/composition-api'

// axios
import axios from 'axios'

// Shopify Polaris
import PolarisVue from '@eastsideco/polaris-vue'
import '@eastsideco/polaris-vue/lib/polaris-vue.css'

Vue.use(PolarisVue)
Vue.use(VueCompositionApi)

// eslint-disable-next-line no-new
new Vue({
  router,
  axios,
  render: h => h(App)
}).$mount('#app')
