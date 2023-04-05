<template>
  <div class="local text-center text-white">
    <h1 class="text-center text-white">Login</h1>
    <h2>LoclaStorage simple</h2>
    <input type="text" v-model="name" placeholder="name">
    <input type="text" v-model="password" placeholder="contraseña">
    <button @click="add">add</button>
    <br><input type="text" v-model="entrar" placeholder="verificar nombre">
    <button @click="verificar">verificar</button>
    <hr>
    

    <h2>Con objetos</h2>
    <h6>gatos</h6>
    <div 
      v-for="(item, index) in gatos" :key="index"
      class="alert bg-secondary"
    >
      <span>{{item}}</span>
      <button @click="eliminarGatos(index)">Eliminar gatos</button>
    </div>
    <div>
      <input type="text" v-model="gato" placeholder="nuevo gato">
      <button @click="addGatos()" >Añadir gatos</button>
      <br><input type="text" v-model="buscar" placeholder="buscar gato">
      <button @click="buscarGato()">buscar</button>
    </div><hr>

    <h2>Eliminar una variable o todo el LocalStorage</h2>
    <button @click="deleteItem()">Elimininar Items</button>
    <button @click="deleteILocalStorage()">Elimininar LocalStorage</button>
    <br><br><br><br>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      name: '',
      password: '',
      entrar: '',
      gatos: [],
      gato: '',
      buscar: ''
    }
  },
  methods: {
    verificar(){
      //verifica si el dato introducido esta en localStorage
      if(this.entrar == localStorage.name){
        console.log('puede acceder')
      }else{
        console.log('no esta logeado')
      }
    },
    add(){
      //añade al localStorage cuando haces click
      localStorage.name = this.name;
      localStorage.password = this.password;      
    },
    eliminarGatos(index){
      this.gatos.splice(index, 1)
      console.log(this.gatos)
      this.gurdarGatos()
    },
    addGatos(){
      if(!this.gato)return console.log('no hay gatos');
      this.gatos.push(this.gato);
      console.log(this.gatos);
      this.gurdarGatos()
    },
    gurdarGatos(){//pasa el array gatos a el localStorage
      //guarda en parsed el array gatos pasandolo a formato .json
      //1ª opcion se pasa en formato json xq solo se puede gurdar texto plano
      const parsed = JSON.stringify(this.gatos);
      //añade al localStorage parsed con el nombre de gatos
      //setItem al igual que getItem unsa una clave(gatos): valor(parsed)
      localStorage.setItem('gatos', parsed);
      console.log('parsed: ', parsed);

      //se puede crear una segunda copia del mismo array simplemente dandole otro nombre
      //de esta manera una copia seria de sesion y otra de registro del usuario
      // localStorage.gatos2 = JSON.stringify(this.gatos);

      // //2ª opcion mas simple de hacerlo es substituir el setItem
      // localStorage.gatos = JSON.stringify(this.gatos);
    },
    buscarGato(){
        if(localStorage.gatos){
          localStorage.gatos.includes(this.buscar)
          console.log(`aqui esta ${this.buscar}`)
        }else{
          console.log('no existe')
        }
    },
    deleteItem(){
      //elimina solo la variable gatos de localStorage, pero name y password siguen 
      localStorage.removeItem('gatos');
      this.gatos = []//con esto tambien se borra la variable de data
    },
    deleteILocalStorage(){
      //elimina todas las variables almacenadas 
      localStorage.clear();
    }
  },
  mounted() {
    //esto vuelve a cargar los datos en sus variables si existen
    //if para que no salte error al intenar cargar el localStorage si no exite ese localStorage
    if(localStorage.name) {
      this.name = localStorage.name
    }
    if(localStorage.password) {
      this.password = localStorage.name
    }

    //si existe el array gatos
    if(localStorage.getItem('gatos')){
      try {
        //si existe carga en el array gatos los datos del array gatos del localStorage
        //JSON.parse(para sincrono) es como .JSON(para asincrono)
        this.gatos = JSON.parse(localStorage.getItem('gatos'));

        // //2ª opcion mas simple de hacerlo es substituir el getItem
        // this.gatos = JSON.parse(localStorage.gatos)
      } catch(e) {
        //sino borra el array gatos
        localStorage.removeItem('gatos')
      }
    }
  },
  // watch: {
  //   // // añade al localStorage a tiempo real
  //   // name(valor){
  //   //   console.log('valor')
  //   //   localStorage.name = valor;
  //   //   console.log('localStorage', localStorage)
  //   // },
  //   // password(valor){
  //   //   console.log('valor')
  //   //   localStorage.password = valor;
  //   //   console.log('localStorage', localStorage)
  //   // }
  // },
};
</script>

<style lang="scss" scoped>
.local{
  margin-left: 1em;
}

</style>