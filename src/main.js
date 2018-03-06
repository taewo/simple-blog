// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import module from './module'


Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    data: [],
  },
  mutations: {
    ADD_DATA(state, result) {
      if (!module.validateSameID(state.data, result).length) {
        state.data.push(result)
      }
      module.setItem(state.data)
      console.log('localStorage', module.getItem())
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
