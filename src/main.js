import Vue from 'vue'
import App from './App.vue'
import FlashMessage from "@smartweb/vue-flash-message";
Vue.use(FlashMessage);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
