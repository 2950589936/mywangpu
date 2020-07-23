import Vue from 'vue'
import Vuex from 'vuex'
import mainLay from './modules/mainLay'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    mainLay
  }
})
