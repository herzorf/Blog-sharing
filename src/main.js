import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import Header from "./components/Header";
import Footer from "./components/Footer";

Vue.component("Header",Header);
Vue.component("Footer",Footer);

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
