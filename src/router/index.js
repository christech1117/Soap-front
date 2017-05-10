import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Cart from 'components/Cart'
import product from '../components/product'
import singleItem from '../components/product/singleItem'
import Contact from '../components/Contact'
import About from '../components/About'
import News from '../components/News'
import SingleNew from '../components/SingleNew'
import Login from 'components/Member/Login'
import Forget from '../components/Member/Forget'
import Register from 'components/Member/Register'
import Rule from '../components/Rule'
import OtherRule from '../components/OtherRule'

import test from 'components/test'

Vue.use(Router)

export default new Router({
  mode: 'history', // html5
  base: __dirname, // router起始位置
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/cart', name: 'Cart', component: Cart },
    { path: '/productList', name: 'product', component: product },
    { path: '/productList/singleItem', name: 'singleItem', component: singleItem },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/about', name: 'About', component: About },
    { path: '/news', name: 'News', component: News },
    { path: '/news/singleNew', name: 'SingleNew', component: SingleNew },
    { path: '/login', name: 'Login', component: Login },
    { path: '/forget', name: 'Forget', component: Forget },
    { path: '/register', name: 'Register', component: Register },
    { path: '/rule', name: 'Rule', component: Rule },
    { path: '/otherRule', name: 'OtherRule', component: OtherRule },
    { path: '/test', name: 'test', component: test }
  ]
})
