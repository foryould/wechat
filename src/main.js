import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Components from './common/components'

Vue.config.productionTip = false

Vue.use(Components)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
