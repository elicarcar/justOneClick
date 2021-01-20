import Vue from 'vue'
import App from './App.vue'
import ScrollAnimation from './directives/scrollAnimation'
import router from './router'
import store from './store'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons/faLightbulb'
import { faBrain } from '@fortawesome/free-solid-svg-icons/faBrain'
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './scss/index.scss'

Vue.directive('scroll-animation', ScrollAnimation)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

library.add(
  faLightbulb,
  faBrain,
  faCode,
  faEye,
  faFacebook,
  faLinkedin,
  faGithub
)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
