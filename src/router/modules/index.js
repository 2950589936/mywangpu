const index = () => import('@/views/index/index.vue')
const router = [{
  path: '/index',
  name: 'index',
  component:index,
  meta: {
    name: '首页'
  }
}]

export default router
