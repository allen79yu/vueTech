import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import First from './component/firstcomponent.vue'
import second from './component/second.vue'
import third from './component/third.vue'
import four from './component/fourth.vue'
import fifth from './component/fifth.vue'
import sixth from './component/sixth.vue'
import seven from './component/seven.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
import Revue from 'revue'
import {createStore} from 'redux'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/first',
    component: First
  },
  {
    path: '/second',
    component: second
  },
  {
    path: '/third/:id',
    component: third
  },{
    path:'/four',
    component: four
  },
  {
    path: '/fifth',
    component: fifth
  },
  {
    path:'/sixth',
    component: sixth
  },
  {
    path:'/seven',
    component: seven
  }]
});

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
