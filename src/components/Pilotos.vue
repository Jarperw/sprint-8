<template>
  <div class="pilotos d-flex text-start">
    <div class="me-1">
      <h6 class="text-white">pilots:</h6>
    </div>
    <div
      class="piloto col-1 mx-1"
      v-for="(piloto, index) in idPolotos"
      :key="index"
    >
      <img
        class="w-100"
        :src="`https://starwars-visualguide.com/assets/img/characters/${piloto}.jpg`"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Pilotos",
  computed: {
    ...mapGetters(["idPolotos"]),
  },
};
</script>

<style lang="scss" scoped>
.pilotos {
  margin: 2em 0em 0.4em 0em;
  h6 {
    line-height: 0.6em;
  }
}

@media (max-width: 450px) {
  .pilotos {
    h6 {
      font-size: 0.65em !important;
    }
  }
}

@media (max-width: 576px) {
  .pilotos {
    h6 {
      font-size: 0.9em;
    }
  }
}

@media (min-width: 768px) {
  .pilotos {
    margin-left: 2em;
    .piloto {
      width: 3em;
    }
  }
}

@media (min-width: 1200px) {
  .pilotos {
    margin: 2em 6em 0.4em 6em;
  }
}
</style>