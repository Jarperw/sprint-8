<template>
  <div class="container py-5 text-white bg-black">
    <div class="info card mb-3 mx-auto mx-md-5">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="`https://starwars-visualguide.com/assets/img/characters/${idPersonaje}.jpg`" class="img-fluid"/>
        </div>
        <div class="col-md-8 position-relative">
          <div class="card-body text-white text-capitalize mb-3 ms-2 ms-md-4 ms-xxl-0">
            <img class="close" src="/icons/close.svg" @click="setMostrarPersonaje(false)">
            <div class="d-flex mt-1 mb-3">
              <span class="efecto"></span>
              <span class="efecto2 ms-1"></span>
            </div>
            <div v-for="(item, index) in personaje" :key="index">
              <h5 v-if="index == 'name'" class="fs-3 text-uppercase">{{ item }}</h5>
              <h6 class="p-0 fw-bold" v-if="index == 'height'">
                {{ index }}: <span class="ms-2 fw-bold text-secondary">{{ item }}cm</span>
              </h6>
              <h6 class="p-0 fw-bold" v-else-if="index == 'mass'">
                {{ index }}: <span class="ms-2 fw-bold text-secondary">{{ item }}kg</span>
              </h6>
              <h6
                class="p-0 fw-bold"
                v-else-if="
                  index != 'name' &&
                  index != 'films' &&
                  index != 'homeworld' &&
                  index != 'starships' &&
                  index != 'species' &&
                  index != 'vehicles' &&
                  index != 'created' &&
                  index != 'edited' &&
                  index != 'url'
                "
              >
                {{ index.split("_").join(" ") }}: <span class="ms-2 fw-bold text-secondary">{{ item }}</span>
              </h6>
              <h6 class="p-0 fw-bold" v-if="index == 'species'">
                {{ index }}: <span class="ms-2 fw-bold text-secondary">{{ specie }}</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="films mx-5 mt-3 py-3 bg-black border-black rounded-2">
      <div class="position-relative">
        <h4 class="pb-4 mb-4">Peliculas</h4>
        <span class="efecto3"></span>
      </div>
      <div class="d-flex flex-wrap">
        <div
          class="card bg-dark border-black rounded-3"
          v-for="(item, index) in idFilmsPersonaje"
          :key="index"
        >
          <img :src="`https://starwars-visualguide.com/assets/img/films/${item}.jpg`" class="card-img-top rounded"/>
          <div class="card-body">
            <div class="d-flex mb-3">
              <span class="efecto"></span>
              <span class="efecto2 ms-1"></span>
            </div>
            <div class="text-white fw-bold mb-3">
              <p class="m-0">Episode {{ films[index]?.episode_id }}</p>
              <p class="m-0">{{ films[index]?.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="idNavesPersonaje.length" class="starships mx-5 mt-3 py-3 bg-black border-black rounded-2">
      <div class="position-relative">
        <h4 class="pb-4 mb-4">Naves</h4>
        <span class="efecto3"></span>
      </div>
      <div class="d-flex flex-wrap">
        <div
          class="card bg-dark border-black rounded-3"
          v-for="(item, index) in idNavesPersonaje"
          :key="index"
        >
          <img :src="`https://starwars-visualguide.com/assets/img/starships/${item}.jpg`" class="card-img-top"/>
          <div class="card-body">
            <div class="d-flex mb-3">
              <span class="efecto"></span>
              <span class="efecto2 ms-1"></span>
            </div>
            <div class="text-white fw-bold mb-3">
              <p class="m-0">{{ navesPersonaje[index]?.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "Personaje",
  computed: {
    ...mapGetters(["personaje", "specie", "idPersonaje", "idFilmsPersonaje", "idNavesPersonaje",]),
    ...mapState(["films", "navesPersonaje"]),
  },
  methods: {
    ...mapMutations(["setMostrarPersonaje"]),
    ...mapActions(["buscar"]),
  },
  created() {
    this.personaje.species.map((item) => this.buscar(item));
    this.personaje.films.map((item) => this.buscar(item));
    this.personaje.starships.map((item) => this.buscar(item));
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1400px;
  .close{
    cursor: pointer;
    position: absolute;
    top: 1em;
    right: 1em;
  }
  .close:hover{
    filter: drop-shadow(0 0 5px #fff);
  }
  .info {
    max-width: 25.18em;
    img {
      border-top-left-radius: 0.3em;
      border-top-right-radius: 0.3em;
    }
    h6 {
      margin: 0;
    }
    @media (min-width: 768px) {
      max-width: none;
      img {
        border-top-right-radius: 0;
        border-bottom-left-radius: 0.3em;
      }
    }
  }
  .films,
  .starships {
    .card{
      cursor: pointer;
      width: 13em;
      margin: 0.4em;
      p{
        font-size: 0.92em;
      }
      @media (min-width: 768px) {
        width: 14em;
        p{
          font-size: 1em;
        }
      }
    }
  }
  .info,
  .films,
  .starships {
    background: #1d1e1f;
  }
  .efecto {
    display: block;
    position: relative;
    border-radius: 1em;
    width: 1.5em;
    height: 0.23em;
    background: #555;
  }
  .efecto2 {
    display: inline;
    position: relative;
    border-radius: 1em;
    width: 0.3em;
    height: 0.23em;
    background: #555;
  }
  h4{
    border-bottom: 0.1em solid #555;
  }
  .efecto3 {
    position: absolute;
    width: 0.3em;
    height: 0.8em;
    background: #000;
    top: 2.9em;
    left: 0.3em;
  }
  .card {
    .efecto,
    .efecto2 {
      height: 0.25em;
      transition: background-color .3s;
    }
  }
  .card:hover {
    .efecto,
    .efecto2 {
      background: #fff;
      filter: drop-shadow(0 0 10px #fff);
    }
  }
}
</style>