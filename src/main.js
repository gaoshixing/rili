import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import iView from 'iview'
Vue.use(iView)
fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
