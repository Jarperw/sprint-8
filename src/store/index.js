import { createStore } from 'vuex'

export default createStore({
    state: {
        naves: [],
        url: "https://swapi.dev/api/starships/?page=1"
    },
    mutations: {
        addNaves( state, resp ){
            state.naves = [...state.naves, ...resp.results]
            state.url = resp.next
        },
        resetUrl( state ){
            state.url = "https://swapi.dev/api/starships/?page=1";
        }
    },
    actions: {
        async buscar({ state, commit }) {
            const data = await fetch( state.url );
            const resp = await data.json();
            commit('addNaves', resp)
        },
    },
    getters: {
    },
    modules: {
    }
})