const questionnaire = () => import('@/views/questionnaire/index.vue')
const router = [{
  path: '/questionnaire',
  name: 'questionnaire',
  component:questionnaire,
  meta: {
    name: '调查问卷'
  }
}]

export default router
