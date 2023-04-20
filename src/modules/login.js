export default {
    namespaced: true,
    
    state:{
        usuarios: [],
        emailActual: '',
        login: false,
        datosLogin: '',
    },
    mutations:{
        addUsuarios( state, resp ) {
            state.usuarios = resp;
        },
        addEmail( state, resp ) {
            state.emailActual = resp;
        },
        setLogin( state, payload ) {
            state.login = payload.valor;
            state.datosLogin = payload.datos;
        },
    },
    getters:{
        usuariosRegistrados( state ){
            return state.usuarios;
        },
        filtrar( state ){
            return state.usuarios.filter((item) => item.email == state.emailActual);
        },
        email( state ){
            return state.emailActual;
        },
        logeado( state ){
            return state.login;
        },
        nameLogin( state ){
            return state.datosLogin.name;
        }
    }
}