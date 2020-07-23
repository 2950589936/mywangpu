const onlineService = () => import('@/views/onlineService/index.vue')
const router = [{
  path: '/onlineService',
  name: 'onlineService',
  component:onlineService,
  meta: {
    name: '在线客服'
  }
}]

export default router
