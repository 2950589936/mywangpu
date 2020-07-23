const login = () => import('@/views/login/index.vue')
const router = [{
  path: '/login',
  name: 'login',
  component:login,
  meta: {
    name: '登录'
  }
}]

export default router
