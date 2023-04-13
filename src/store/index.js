import { createStore } from 'vuex'
import login from '../modules/login'

export default createStore({
    state: {
        naves: [],
        personajes: [],
        films: [],
        navesPersonaje: [],
        url: "https://swapi.dev/api/starships/?page=1",
        urlPersonajes: "https://swapi.py4e.com/api/people/?page=1",
        naveActual: '',
        personajeActual: '',
        mostrarNave: false,
        mostrarPersonaje: false,
        species: '',
    },
    mutations: {
        addNaves( state, resp ) {
            state.naves = [...state.naves, ...resp.results];
            state.url = resp.next;
        },
        addPersonajes( state, resp ) {
            state.personajes = [...state.personajes, ...resp.results];
            state.urlPersonajes = resp.next;
        },
        addFilms( state, resp ) {
            state.films = [...state.films, resp];
        },
        addNavesPersonaje( state, resp ) {
            state.navesPersonaje = [...state.navesPersonaje, resp];
        },
        addNaveActual( state, resp ){
            state.naveActual = resp;
        },
        addPersonajeActual( state, resp ){
            state.personajeActual = resp;
        },
        addSpecies( state, resp ){
            state.species = resp;
        },
        setMostrarNave( state, resp ){
            state.mostrarNave = resp;
        },
        setMostrarPersonaje( state, resp ){
            state.films =  [];
            state.navesPersonaje =  [];
            state.mostrarPersonaje = resp;
        },
    },
    actions: {
        async buscar({ commit }, url) {
            const data = await fetch(url);
            const resp = await data.json();

            if(url.includes('people')){
                commit('addPersonajes', resp)
            }else if(url.includes('py4e') && url.includes('starships')){
                commit('addNavesPersonaje', resp)
            }else if(url.includes('starships')){
                commit('addNaves', resp)
            }else if(url.includes('species')){
                commit('addSpecies', resp)
            }else{
                commit('addFilms', resp)
            }
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
            return state.naveActual.url.replace(/.*\/(\d+)\/?$/, "$1");
        },
        idPolotos( state ) {
            return state.naveActual.pilots.map((item) => item.replace(/.*\/(\d+)\/?$/, "$1"));
        },
        idPersonaje( state ){
            return state.personajeActual.url.replace(/.*\/(\d+)\/?$/, "$1");
        },
        personaje( state ){
            return state.personajeActual;
        },
        idFilmsPersonaje( state ){
            return state.personajeActual.films.map(item => item.replace(/.*\/(\d+)\/?$/, "$1"));
        },
        idNavesPersonaje( state ){
            return state.personajeActual.starships.map(item => item.replace(/.*\/(\d+)\/?$/, "$1"));
        },
        specie( state ){
            return state.species.name;
        },
    },
    modules: {
        login
    }
})