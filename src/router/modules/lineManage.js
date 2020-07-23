const lineManage = () => import('@/views/lineManage/index.vue')
const router = [{
  path: '/lineManage',
  name: 'lineManage',
  component:lineManage,
  meta: {
    name: '线路管理'
  }
}]

export default router
