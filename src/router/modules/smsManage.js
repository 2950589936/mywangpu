const smsManage = () => import('@/views/smsManage/index.vue')
const router = [{
  path: '/smsManage',
  name: 'smsManage',
  component:smsManage,
  meta: {
    name: '短信管理'
  }
}]

export default router
