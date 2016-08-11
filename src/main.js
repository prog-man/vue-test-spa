import Vue from 'vue'
import VueRouter from 'vue-router'
//var VueRouter = require('vue-router')
import App from './App'
import Default from './components/Default'
import Foo from './components/Foo'
import Bar from './components/Bar'



Vue.use(VueRouter)

var router = new VueRouter()

// Определяем некоторые маршруты.
// Каждый маршрут должен содержать название компонента.
router.map({

  '/': {
    component: Default
  },
  '/foo': {
    component: Foo
  },
  '/bar': {
    component: Bar
  }
})

// Теперь мы можем запустить приложение!
// Маршрутиризатор создает экземпляр прилоежния и монтирует
// элемент относительно селектора #app.
router.start(App, '#app')



/* eslint-disable no-new */
/*
new Vue({
  el: 'body',
  components: { App }
})
*/
