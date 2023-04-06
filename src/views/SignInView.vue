<template>
  <div class="text-center text-white">
    <div>
      <h1>Sign In</h1>
      <a href="#">My account</a><br>
      <p @click="logout()">Logout</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  methods: {
    logout(){
      this.$store.commit('setLogin', {valor: false, datos: ''});
      this.$router.push('/');
      console.log('Sesion cerrada.')
    }
  }
};
</script>

<style lang="scss" scoped>
a, p{
  color: #edd700;
  text-decoration: none;
  cursor: pointer;
}
</style>