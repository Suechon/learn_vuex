const getters = {
    count(state, getters, rootState) {
        return rootState.counter.count + rootState.doubleCounter.count
    }
}

export default {
    namespaced: true,
    getters
}

