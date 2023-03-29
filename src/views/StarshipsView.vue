<template>
  <div class="container my-4">
    <div
      class="alert mx-1 mx-lg-5"
      role="alert"
      v-for="(nave, index) in naves"
      :key="index"
    >
      <h5 class="text-uppercase">{{ nave.name }}</h5>
      <p>{{ nave.model }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Starships",
  data() {
    return {};
  },
  computed: {
    ...mapState(["naves"]),
  },
  methods: {
    ...mapActions(["buscar"]),
  },
  created() {
    this.buscar();
  },
};
</script>

<style lang="scss" scoped>
.alert {
  color: #999;
  background: #151515;
  p {
    margin-bottom: 0;
  }
}
</style>