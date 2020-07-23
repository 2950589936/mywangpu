const taskManage = () => import('@/views/taskManage/index.vue')
const router = [{
  path: '/taskManage',
  name: 'taskManage',
  component:taskManage,
  meta: {
    name: '任务管理'
  }
}]

export default router
