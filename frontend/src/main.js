import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './core/store/index'
import AsyncComputed from 'vue-async-computed';
import vSelect from 'vue-select'

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faHeart,faMinus,faPlus,faBarcode, faBars, faSearch, faUser, faShoppingBasket, faUserCircle, faChevronLeft, faChevronRight, faEnvelope, fas, faSpinner, faAlignLeft,  faAngleUp,faAngleDown, faFileInvoice, faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import { faComment, faCreditCard } from '@fortawesome/free-regular-svg-icons'
import { faCcMastercard, faCcVisa, faInstagram, faTwitter, faWhatsapp, faAccessibleIcon } from '@fortawesome/free-brands-svg-icons'

dom.watch() // This will kick of the initial replacement of i to svg tags and configure a MutationObserver 

library.add(faHeart,faMinus,faPlus,faCcMastercard, faCcVisa,faBarcode, faInstagram, faAccessibleIcon,faComment,faWhatsapp ,faTwitter, faBars, faSearch, faUser, faShoppingBasket, faUserCircle, faChevronLeft, faChevronRight, faEnvelope, fas, faSpinner, faAlignLeft, faHeart,faAngleUp,faAngleDown, faCreditCard, faFileInvoice, faArrowLeft, faArrowRight)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.component('v-select', vSelect)
Vue.use(AsyncComputed);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
