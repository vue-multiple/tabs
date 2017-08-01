import Vue from 'vue'
import App from './App.vue'

import VmTabs from '../../src/index.js'
Vue.use(VmTabs)

import VueDemonstration from 'vue-demonstration'
Vue.component('demonstration', VueDemonstration)

new Vue({
  el: '#app',
  render: h => h(App)
})
