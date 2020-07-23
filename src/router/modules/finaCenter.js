const finaCenter = () => import('@/views/finaCenter/index.vue')
const router = [{
  path: '/finaCenter',
  name: 'finaCenter',
  component:finaCenter,
  meta: {
    name: '财务中心'
  }
}]

export default router
