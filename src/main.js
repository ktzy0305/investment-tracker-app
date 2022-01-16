import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'sweetalert2/dist/sweetalert2.min.css';
import Vue from 'vue'
import Vidle from 'v-idle'
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue'
import router from './routes/router'
import store from './store'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(Vidle)
Vue.use(VueSweetalert2);
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
  store: store,
}).$mount('#app')