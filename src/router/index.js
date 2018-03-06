import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Write from '@/components/Write'
import List from '@/components/List'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/write',
      name: 'Write',
      component: Write
    }
  ]
})
