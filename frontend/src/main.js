import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons/faLightbulb'
import { faBrain } from '@fortawesome/free-solid-svg-icons/faBrain'
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'

import './scss/index.scss'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

library.add(faLightbulb, faBrain, faCode, faEye)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
