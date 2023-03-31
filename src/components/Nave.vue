<template>
  <div
    class="nave alert mx-1 mx-lg-5 text-uppercase text-center"
    role="alert"
    @click="volver()"
  >
    <h4 class="text-uppercase text-center fw-bold text-white mb-4">
      {{ nave.name }}
    </h4>
    <img
      class="border-bottom border-3 border-primary mb-4"
      :src="`https://starwars-visualguide.com/assets/img/starships/${idNave}.jpg`"
      :alt="nave.name"
    />
    <h6>model: <span>{{ nave.model }}</span></h6>
    <h6>starship class: <span>{{ nave.starship_class }}</span></h6>
    <h6>manufacturer: <span>{{ nave.manufacturer }}</span></h6>
    <h6>cost: <span>{{ nave.cost_in_credits }} credits</span></h6>
    <div class="info d-flex flex-column flex-lg-row text-start">
      <div class="col-12 col-lg-6">
        <h6>crew: <span>{{ nave.crew }}</span></h6>
        <h6>passenger capacity: <span>{{ nave.passengers }}</span></h6>
        <h6>cargo capacity: <span>{{ nave.cargo_capacity }} tons</span></h6>
        <h6>consumables: <span>{{ nave.consumables }}</span></h6>
        <h6>created: <span>{{ fecha(nave.created) }}</span></h6>
      </div>
      <div class="col-12 col-lg-6">
        <h6>length: <span>{{ nave.length }} meters</span></h6>
        <h6>maximum atmosphering speed: <span>{{ nave.max_atmosphering_speed }} km/h</span></h6>
        <h6>hyperdriver rating: <span>{{ nave.hyperdrive_rating }}</span></h6>
        <h6>maximum speed in realspace: <span>{{ nave.MGLT }} mglt</span></h6>
        <h6>edited: <span>{{ fecha(nave.edited) }}</span></h6>
      </div>
    </div>
    <Pilotos :idPilotos="idPilotos" />
  </div>
</template>

<script>
import Pilotos from "./Pilotos.vue";

export default {
  components: { Pilotos },
  name: "Nave",
  props: ["nave", "pulsado"],
  data() {
    return {
      idNave: "",
      idPilotos: [],
    };
  },
  methods: {
    volver() {
      this.$emit("pulsado", false);
    },
    addIdNave() {
      this.idNave = this.nave.url.replace(/[^0-9]+/g, "");
    },
    addIdPolotos() {
      this.idPilotos = this.nave.pilots.map((item) => item.replace(/[^0-9]+/g, ""));
    },
    fecha(fecha){
      fecha = new Date(fecha)
      return fecha.toLocaleString()
    }
  },
  created() {
    this.addIdNave();
    this.addIdPolotos();
  },
};
</script>

<style lang="scss" scoped>

.nave {
  background: #8882 !important;
  img {
    width: 100%;
  }
  .info {
    margin-top: 2em;
  }
  h6 {
    color: #fff;
    margin-bottom: 0;
  }
  span {
    color: #999;
  }

  @media (max-width: 450px) {
    h6 {
      font-size: 0.65em !important;
    }
  }

  @media (max-width: 576px) {
    h6 {
      font-size: 0.9em;
    }
  }

  @media (min-width: 768px) {
    img {
      width: auto;
    }
    .info {
      margin-left: 2em;
    }
  }

  @media (min-width: 1200px) {
    .info {
      margin: 2em 6em 0 6em;
    }
  }
}

</style>