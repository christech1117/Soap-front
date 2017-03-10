import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import Cart from 'components/Cart'
import Product from 'components/Product'
import Contact from 'components/Contact'
import About from 'components/About'
import News from 'components/News'
import Login from 'components/Login'
import Forget from 'components/Forget'
import Register from 'components/Register'
import Rule from 'components/Rule'
import OtherRule from 'components/OtherRule'

Vue.use(Router)

export default new Router({
  mode: 'history', // html5
  base: __dirname, // router起始位置
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/cart', name: 'Cart', component: Cart },
    { path: '/product', name: 'Product', component: Product },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/about', name: 'About', component: About },
    { path: '/news', name: 'News', component: News },
    { path: '/login', name: 'Login', component: Login },
    { path: '/forget', name: 'Forget', component: Forget },
    { path: '/register', name: 'Register', component: Register },
    { path: '/rule', name: 'Rule', component: Rule },
    { path: '/otherRule', name: 'OtherRule', component: OtherRule }
  ]
})
