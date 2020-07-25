import Vue from 'vue'
import Vuex from 'vuex'
import counter from './store/modules/counter'

Vue.use(Vuex)

export default new Vuex.Store({
    //厳格モード
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        counter,
    },
    state: {
    },
    mutations: {

    },
    actions: {

    }
})
