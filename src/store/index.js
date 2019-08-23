import Vue from 'vue'
import Vuex from 'vuex'
import CodeGen from './modules/CodeGen'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
      CodeGen,
    },
})

export default store;