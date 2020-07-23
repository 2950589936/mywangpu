const menuManage = () => import('@/views/menuManage/index.vue')
const router = [{
  path: '/menuManage',
  name: 'menuManage',
  component:menuManage,
  meta: {
    name: '菜单管理'
  }
}]

export default router
