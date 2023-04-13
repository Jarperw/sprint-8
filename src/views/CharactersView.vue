<template>
  <div v-if="!mostrarPersonaje" class="container-fluid text-white bg-black">
    <div class="position-relative mx-sm-3">
      <h4 class="pt-3 pt-md-5 pb-2 mb-4">Characters</h4>
      <span class="efecto3"></span>
    </div>
    <div class="d-flex flex-wrap justify-content-center mt-1">
      <div @click="verPersonaje(item)" v-for="(item, index) in personajes" :key="index" class="card">
        <img :src="`https://starwars-visualguide.com/assets/img/characters/${idUrl(item.url)}.jpg`" class="card-img-top"/>
        <div class="card-body">
          <div class="d-flex">
            <span class="efecto"></span>
            <span class="efecto2 ms-1"></span>
          </div>
          <p class="card-text fw-bold mt-2 mb-3">
            {{ item.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <Personaje v-if="mostrarPersonaje"/>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import Personaje from '../components/Personaje.vue';

export default {
  components: { Personaje },
  data() {
    return {
      scroll: '',
    }
  },
  name: "Characters",
  computed: {
    ...mapState(["personajes", "urlPersonajes", "mostrarPersonaje"]),
  },
  methods: {
    ...mapActions(["buscar"]),
    ...mapMutations(["addPersonajeActual", "setMostrarPersonaje"])
    ,
    idUrl(url){
      return url.replace(/.*\/(\d+)\/?$/, "$1");
    },
    handleCharactersScroll() {
      this.scroll = window.scrollY;
    },
    verPersonaje(personaje){ 
      this.addPersonajeActual(personaje);
      this.setMostrarPersonaje(true);
    }
  },
  created() {
    this.setMostrarPersonaje(false);
    if(this.urlPersonajes == 'https://swapi.py4e.com/api/people/?page=1') this.buscar(this.urlPersonajes);
  },
  mounted() {
    window.addEventListener("scroll", this.handleCharactersScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleCharactersScroll);
  },
  watch: {
   scroll(valor){
     if (this.urlPersonajes == null || this.mostrarPersonaje) return;
     const {scrollHeight, clientHeight } = document.documentElement;
     if (valor + clientHeight >= scrollHeight) {
       console.log('scroll');
       this.buscar(this.urlPersonajes);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  max-width: 1600px;
  .card{
    cursor: pointer;
    background: #1d1e1f;
    color: #fff;
    width: 9.5em;
    margin: 0.4em;
    .efecto{
        display: block;
        border-radius: 1em;
        width: 1.5em;
        height: 0.23em;
        background: #555;
        transition: background-color .3s;
    }
    .efecto2{
        display: inline;
        border-radius: 1em;
        width: 0.35em;
        height: 0.23em;
        background: #555;
        transition: background-color .3s;
    }
    @media (min-width: 450px) {
      width: 12em;
    }
    @media (min-width: 768px) {
      width: 13.9em;
      margin: 0.5em;
    }
    @media (min-width: 1200px) {
      width: 16em;
      margin: 1em;
    }
  }
  .card:hover{
    .efecto,
    .efecto2{
        background: #fff;
        filter: drop-shadow(0 0 3px #fff);
    }
  }
  h4{
  border-bottom: 0.1em solid #555;
  }
  .efecto3 {
    position: absolute;
    width: 0.3em;
    height: 0.8em;
    background: #000;
    top: 2.85em;
    left: 0.3em;
    @media (min-width: 768px) {
      margin-top: 2.1em;
    }
  }
}
</style>