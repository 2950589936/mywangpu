const cusSerDesk = () => import('@/views/cusSerDesk/index.vue')
const router = [{
  path: '/cusSerDesk',
  name: 'cusSerDesk',
  component:cusSerDesk,
  meta: {
    name: '客服工作台'
  }
}]

export default router
