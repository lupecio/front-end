import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import SearchResult from './components/SearchResult'
import CitiesWeather from './components/CitiesWeather'
import WeatherDetail from './components/WeatherDetail'

Vue.use(VueRouter)
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: CitiesWeather },
    { path: '/search/:keyword', component: SearchResult },
    { path: '/woeid/:id', component: WeatherDetail },
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')