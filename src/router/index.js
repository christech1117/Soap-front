import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Cart from 'components/Cart'
import ProductList from 'components/Product/ProductList'
import SingleItem from 'components/Product/SingleItem'
import Contact from '../components/Contact'
import About from '../components/About'
import News from '../components/News'
import Login from 'components/Member/Login'
import Forget from '../components/Member/Forget'
import Register from 'components/Member/Register'
import Rule from '../components/Rule'
import OtherRule from '../components/OtherRule'

Vue.use(Router)

export default new Router({
  mode: 'history', // html5
  base: __dirname, // router起始位置
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/cart', name: 'Cart', component: Cart },
    { path: '/productList', name: 'ProductList', component: ProductList },
    { path: '/productList/singleItem', name: 'SingleItem', component: SingleItem },
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
