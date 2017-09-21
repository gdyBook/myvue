<<<<<<< HEAD
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

=======
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

>>>>>>> 56643d7a70072d0014d5a288820bd744f5085066
