import Vue from 'vue'
import App from './App.vue'
import myPop from './components/index.js'

Vue.use(myPop)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
