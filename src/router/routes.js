import main from '../components/main'

const routes = [
  {
    name: 'login',
    path: '/login',
    component: () => import('../views/login')
  }, { // 主框架
    name: 'main',
    component: main,
    path: '/',
    children: [
      {
        name: 'home',
        component: () => import('../views/home'),
        path: '/',
      },
      {
        name: 'user-special',
        component: () => import('../views/user-special'),
        path: '/user/special',
      },
      {
        name: 'admin-setting',
        component: () => import('../views/user-setting'),
        path: '/admin/setting',
      },
    ]
  },
  {
    name: '404',
    path: '/404',
    component: () => import('../views/404.vue')
  },
  {path: '*', redirect: '/404'}
]

export default routes
