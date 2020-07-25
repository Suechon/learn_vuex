const state = {
    step: 2,
    count: 0
}

const getters = {
    step: state => state.step,
    count: state => state.count
}

const actions = {
    increment({ commit }) {
        console.log("あくしょん")
        commit('mutation_increment')
    }
}

const mutations = {
    mutation_increment(state) {
        console.log("みゅーてーしょん")
        state.count += state.step
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}