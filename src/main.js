import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import { showMessage } from './utils'
// import { text1, text2 } from './constants'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app') 


// showMessage(text1);
// showMessage(text2);