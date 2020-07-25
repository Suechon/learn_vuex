import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
// import router from './router.js'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
store.commit('increment')