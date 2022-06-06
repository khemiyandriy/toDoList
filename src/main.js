import Vue from 'vue'
import App from './App.vue'
import NewList from './NewList.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
new Vue({
  render: h => h(NewList),
}).$mount('#newList')