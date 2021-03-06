
import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index.vue'
import Book from '../components/book.vue'
import Chicken from '../components/chicken.vue'

Vue.use(Router)

export default new Router({ 
  routes: [{
    path: '/',
    name: 'Index',
    component: Index,
    children: [
      {
        path: 'book',
        name: 'Book',
        component: Book
      },
      {
        path: 'chicken',
        name: 'chicken',
        component: Chicken
      }
    ]
  }]
})


