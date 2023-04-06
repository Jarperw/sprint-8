import { createStore } from 'vuex'

export default createStore({
    state: {
        naves: [],
        url: "https://swapi.dev/api/starships/?page=1",
        emailRegister: '',
        login: false,
        datosLogin: '',
    },
    mutations: {
        addNaves( state, resp ) {
            state.naves = [...state.naves, ...resp.results];
            state.url = resp.next;
        },
        addEmail( state, resp ) {
            state.emailRegister = resp;
        },
        setLogin( state, payload ) {
            state.login = payload.valor;
            state.datosLogin = payload.datos;
        }
    },
    actions: {
        async buscar({ state, commit }) {
            const data = await fetch(state.url);
            const resp = await data.json();
            commit('addNaves', resp);
        },
    },
    getters: {
    },
    modules: {
    }
})