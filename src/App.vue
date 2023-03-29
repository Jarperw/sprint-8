<template>
  <Navegacion />
  <router-view></router-view>
</template>

<script>
import Navegacion from "./components/Navegacion.vue";

export default {
  components: { Navegacion },
  name: "App",

  Navegacion,
};
</script>

<style lang="scss">

</style>
