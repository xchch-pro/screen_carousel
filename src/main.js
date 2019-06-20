import Vue from 'vue'
import {Carousel,CarouselItem} from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Carousel)
Vue.use(CarouselItem)

new Vue({
  render: h => h(App),
}).$mount('#app')
