<template>
  <div class="container my-4">
    <div v-if="!pulsado">
      <div
        class="alert mx-1 mx-lg-5"
        role="alert"
        v-for="(nave, index) in naves"
        :key="index"
        @click="mostrar(nave)"
      >
        <h5 class="text-uppercase">{{ nave.name }}</h5>
        <p>{{ nave.model }}</p>
      </div>
    </div>
    <Nave v-if="pulsado" :nave="naveActual" :pulsado="pulsado" @pulsado="pulsado=$event"/>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import Nave from "../components/Nave.vue";

export default {
  components: { Nave },
  name: "Starships",
  data() {
    return {
      pulsado: false,
      naveActual: "",
    };
  },
  computed: {
    ...mapState(["naves", "url"]),
  },
  methods: {
    ...mapActions(["buscar"]),
    ...mapMutations(["resetUrl"]),
    mostrar(nave) {
      this.pulsado = true;
      this.naveActual = nave;
    },
  },
  created() {
    this.resetUrl()
    this.buscar();
  },
  watch: {
    url(value){
      if(value !== null) this.buscar()
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