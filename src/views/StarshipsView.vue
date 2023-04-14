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
      scroll: '',
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
    handleScroll() {
      this.scroll = window.scrollY;
    },
  },
  created() {
    this.setMostrarNave(false);
    if (this.url == 'https://swapi.dev/api/starships/?page=1') this.buscar(this.url);
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  watch: {
    scroll(valor){
      const {scrollHeight, clientHeight } = document.documentElement;

      if (this.url == null || this.mostrar || valor < this.$el.offsetTop ) return;
      if (valor + clientHeight >= scrollHeight) {
        this.buscar(this.url);
      }
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