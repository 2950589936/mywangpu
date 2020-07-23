const concurSettings = () => import('@/views/concurSettings/index.vue')
const router = [{
  path: '/concurSettings',
  name: 'concurSettings',
  component:concurSettings,
  meta: {
    name: '并发设置'
  }
}]

export default router
