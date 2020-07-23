const mainLay = () => import('@/views/mainLay/index.vue')
import index from '@/router/modules/index.js'
import cusCenter from '@/router/modules/cusCenter.js'
import taskManage from '@/router/modules/taskManage.js'
import moniReport from '@/router/modules/moniReport.js'
import finaCenter from '@/router/modules/finaCenter.js'
import manageCenter from '@/router/modules/manageCenter.js'
import cusSerDesk from '@/router/modules/cusSerDesk.js'
import smsManage from '@/router/modules/smsManage.js'
import onlineService from '@/router/modules/onlineService.js'
import questionnaire from '@/router/modules/questionnaire.js'
import concurSettings from '@/router/modules/concurSettings.js'
import lineManage from '@/router/modules/lineManage.js'
import organManage from '@/router/modules/organManage.js'
import menuManage from '@/router/modules/menuManage.js'
import numManage from '@/router/modules/numManage.js'
import helpManual from '@/router/modules/helpManual.js'
const router = [{
  path: '/mainLay',
  name: 'mainLay',
  component:mainLay,
  meta: {
    name: '主菜单'
  },
  children:[
    ...index,
    ...cusCenter,
    ...taskManage,
    ...moniReport,
    ...finaCenter,
    ...manageCenter,
    ...cusSerDesk,
    ...smsManage,
    ...onlineService,
    ...questionnaire,
    ...concurSettings,
    ...lineManage,
    ...organManage,
    ...menuManage,
    ...numManage,
    ...helpManual
  ]
}
]

export default router
