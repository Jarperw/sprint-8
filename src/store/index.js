import { createStore } from 'vuex'

export default createStore({
    state: {
        naves: [],
    },
    mutations: {
        addNaves( state, resp ){
            state.naves = resp.results
        }
    },
    actions: {
        async buscar({commit}) {
            const data = await fetch("https://swapi.dev/api/starships/");
            const resp = await data.json();
            commit('addNaves', resp)
        },
    },
    getters: {
    },
    modules: {
    }
})