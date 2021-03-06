import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 引入所有api
import * as API from '@/api'

// 将所有api接口挂载到vue原型上
Vue.prototype.$API = API

// 引入懒加载插件
import VueLazyload from 'vue-lazyload'
// 注册懒加载
Vue.use(VueLazyload, {
  loading: require('./assets/timg.gif')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
