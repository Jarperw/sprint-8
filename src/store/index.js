import { createStore } from 'vuex'
import login from '../modules/login'

export default createStore({
    state: {
        naves: [],
        url: "https://swapi.dev/api/starships/?page=1",
        naveActual: '',
        mostrarNave: false,
    },
    mutations: {
        addNaves( state, resp ) {
            state.naves = [...state.naves, ...resp.results];
            state.url = resp.next;
        },
        addNaveActual( state, resp ){
            state.naveActual = resp
        },
        setMostrarNave( state, resp ){
            state.mostrarNave = resp;
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
        nave( state ){
            return state.naveActual;
        },
        mostrar( state ){
            return state.mostrarNave;
        },
        idNave( state ) {
            return state.naveActual.url.replace(/[^0-9]+/g, "");
        },
        idPolotos( state ) {
            return state.naveActual.pilots.map((item) => item.replace(/[^0-9]+/g, ""));
        },
    },
    modules: {
        login
    }
})