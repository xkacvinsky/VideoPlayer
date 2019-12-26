import Vue from 'vue'
import App from './App.vue' // importnuty app component z Vue
import router from './routers'
import { initTable } from './utils/db'

Vue.config.productionTip = false  // nemusim riesit

initTable()

// vytvorenie Vue instancie a hovory ze tento element musi byt nacitaty s id app
new Vue({
  router,
  render: h => h(App)  // arrow function
}).$mount('#app') // podobne ako el:'#app' s tym rozdielom ze si to zavolas az ked skoncia nejake asynchronne volania
