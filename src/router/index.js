import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import star from '@/components/star_main'
import personalPage from '@/components/personalPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/star',
      name: 'star',
      component: star
    },
    {
      path: '/personalPage',
      name: '/personalPage',
      component: personalPage
    }

  ]
})
