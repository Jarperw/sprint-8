<template>
  <div class="container my-4">
    <div v-if="!mostrar">
      <div
        class="alert mx-1 mx-lg-5"
        role="alert"
        v-for="(nave, index) in naves"
        :key="index"
        @click="mostrarNave(nave)"
      >
        <h5 class="text-uppercase">{{ nave.name }}</h5>
        <p>{{ nave.model }}</p>
      </div>
      <div ref="last"></div>
    </div>
    <Nave v-if="mostrar"/>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import Nave from "../components/Nave.vue";

export default {
  components: { Nave },
  data() {
    return {
      // scroll: '',
    }
  },
  name: "Starships",
  computed: {
    ...mapState(["naves", "url"]),
    ...mapGetters(["mostrar"]),
  },
  methods: {
    ...mapActions(["buscar"]),
    ...mapMutations(["addNaveActual", "setMostrarNave"])
    ,
    mostrarNave(nave) {
      this.setMostrarNave(true);
      this.addNaveActual(nave);
    },
    //metodo para manejar scroll
    async addObserver(){
      //this.$nextTick() hace que se espera a que se actualize del DOM y await por que llamas a una api asincrona
      await this.$nextTick();

      //options: para cofigurar IntersectionObserver
      //root: Es el elemento que se utilizará como contenedor para la detección de la intersección. Si no se especifica, se utilizará el viewport (el área visible en la ventana del navegador).
      //rootMargin: para añadir margen al area de interseccion con pixeles '0px 0px 100px 0px' como css  
      //threshold: 0 llamará a la función cada vez que se detecte cualquier intersección/ 1 solo se llamará cuando el elemento esté completamente dentro del área de intersección
      const options = { root: document, rootMargin: '5px', threshold: 0 };

      //en esta fucion se dice que hacer, entries es el evento que le da la new IntersectionObserver
      const callback = (entries) => {
        //entries[0].isIntersecting entries es un array con un solo objeto que tiene entre ellos el valor isIntersecting
        //entries[0].isIntersecting cuando se intersecta pasa a tener valor true
        if(entries[0].isIntersecting && this.url != null){
          this.buscar(this.url);
        }
      };
      
      //new IntersectionObserver(callback, options): permite observar en el html com un elemento intersecta con otro
      //callback es la funcion que se ejecuta cuando se produce la interseccion
      //options es un objeto con la configuracion la configuracion, se explica mas arriba
      this.observer = new IntersectionObserver(callback, options);
      //aqui se le dice a observer que es la new IntersectionObserver lo que tiene que observar
      this.observer.observe(this.$refs.last);
    }
  },
  created() {
    this.setMostrarNave(false);
    if (this.url == 'https://swapi.dev/api/starships/?page=1') this.addObserver(); 
  },
  watch: {
    // cada vez que se mostrar es false se activa el addObserver
    mostrar(valor){
      if(!valor)this.addObserver()
    }
  },
};
</script>

<style lang="scss" scoped>
.alert {
  cursor: pointer;
  color: #999;
  background: #151515;
  p {
    margin-bottom: 0;
  }
}
</style>