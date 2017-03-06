import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import Cart from 'components/Cart'
import Product from 'components/Product'
import Contact from 'components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history', // html5
  base: __dirname, // router起始位置
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/cart', name: 'Cart', component: Cart },
    { path: '/product', name: 'Product', component: Product },
    { path: '/contact', name: 'Contact', component: Contact }
  ]
})
