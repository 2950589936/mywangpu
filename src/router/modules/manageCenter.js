const manageCenter = () => import('@/views/manageCenter/index.vue')
const router = [{
  path: '/manageCenter',
  name: 'manageCenter',
  component:manageCenter,
  meta: {
    name: '管理中心'
  }
}]

export default router
