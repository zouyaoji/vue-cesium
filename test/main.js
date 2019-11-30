import '@babel/polyfill'
import Vue from 'vue'
import VueCesium from '@'
import App from './app.vue'

Vue.performance = true
Vue.productionTip = true

Vue.use(VueCesium)
console.log(process.env.NODE_ENV)
console.dir(VueCesium)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
})
