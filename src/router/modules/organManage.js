const organManage = () => import('@/views/organManage/index.vue')
const router = [{
  path: '/organManage',
  name: 'organManage',
  component:organManage,
  meta: {
    name: '组织管理'
  }
}]

export default router
