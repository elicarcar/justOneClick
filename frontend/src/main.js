import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './scss/index.scss'
// import VueCoreVideoPlayer from 'vue-core-video-player'

Vue.config.productionTip = false
// Vue.use(VueCoreVideoPlayer)
// Vue.component(VueCoreVideoPlayer)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
