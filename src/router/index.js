import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/router/modules/login.js'
import mainLay from '@/router/modules/mainLay.js'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
const vueRouter = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
  ...login,
  ...mainLay,
  {
    path: "*",
    redirect: "/login"
  }
]
});

export default vueRouter
