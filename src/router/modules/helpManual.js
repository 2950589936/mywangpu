const helpManual = () => import('@/views/helpManual/index.vue')
const router = [{
  path: '/helpManual',
  name: 'helpManual',
  component:helpManual,
  meta: {
    name: '帮助手册'
  }
}]

export default router
