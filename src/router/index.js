import Vue from 'vue'
import Router from 'vue-router'
// import { Message } from 'element-ui'
import routes from './routes'
// import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  // 记录访问的最后一个页面
  if (from.path !== '/login') {
    window.localStorage.setItem('from_path', from.path)
  }
  if (to.path == '/login') {
    window.localStorage.removeItem('userInfo')
  }
  next()
})

export default router
