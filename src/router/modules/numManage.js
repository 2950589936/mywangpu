const numManage = () => import('@/views/numManage/index.vue')
const router = [{
  path: '/numManage',
  name: 'numManage',
  component:numManage,
  meta: {
    name: '号码管理'
  }
}]

export default router
