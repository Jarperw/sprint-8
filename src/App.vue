<template>
  <Navegacion />
  <router-view></router-view>
  <Footer/>
</template>

<script>
import Footer from './components/Footer.vue';
import Navegacion from "./components/Navegacion.vue";

export default {
  components: { Navegacion, Footer },
  name: "App",
};
</script>

<style lang="scss">

body{
  background-image: url('/img/fondo2.png');
  background-size: contain;
  background-position: center;
}

</style>
