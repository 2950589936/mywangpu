const cusCenter = () => import('@/views/cusCenter/index.vue')
const router = [{
  path: '/cusCenter',
  name: 'cusCenter',
  component:cusCenter,
  meta: {
    name: '客户中心'
  }
}]

export default router
