import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ContentNav from '../src/components/Nav.vue'
import Content from '../src/components/Content.vue'

Vue.config.productionTip = false

Vue.component('ContentNav', ContentNav)
Vue.component('Content', Content)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')