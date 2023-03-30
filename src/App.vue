<template>
  <Navegacion />
  <router-view></router-view>
</template>

<script>
import Navegacion from "./components/Navegacion.vue";

export default {
  components: { Navegacion },
  name: "App",
};
</script>

<style lang="scss">

body{
  background-image: url('/fondo2.png');
  background-size: 100%;
  background-position: center;
}

</style>
