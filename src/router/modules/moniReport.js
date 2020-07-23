const moniReport = () => import('@/views/moniReport/index.vue')
const router = [{
  path: '/moniReport',
  name: 'moniReport',
  component:moniReport,
  meta: {
    name: '监控报表'
  }
}]

export default router
