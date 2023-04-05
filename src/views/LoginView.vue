<template>
  <div class="card text-center ms-auto me-auto p-5 mt-4 rounded-1">
    <router-link to="/"
      ><img class="close" src="/icons/close.svg" alt=""
    /></router-link>
    <div class="d-flex justify-content-center mb-5">
      <img class="w-75" src="/img/logo3.png"/>
    </div>
    <div v-if="!validacion" class="d-flex flex-column">
      <p class="text-warning fs-2">ENTER YOUR EMAIL ADDRESS</p>
      <input
        :class="{ 'border-danger text-danger': error }"
        class="form-control"
        type="email"
        v-model.trim="email"
        placeholder="email"
      />
      <small class="text-danger text-start mt-1">{{ error }}</small>
      <button class="w-100 btn btn-secondary mt-4" @click="continuar()">
        Continue
      </button>
    </div>

    <div v-else class="d-flex flex-column">
      <p class="text-warning fs-2 p-0">ENTER YOUR PASSWORD</p>
      <div class="d-flex">
        <img class="retroceder col-4 d-flex"
          type="button"
          @click="refrescarPagina()"
          src="/icons/flecha.svg"
        />
        <p class="col-7 text-secondary text-end mb-4">{{ email }}</p>
      </div>
      <input
        :class="{ 'border-danger text-danger': error }"
        class="form-control"
        type="text"
        v-model.trim="password"
        placeholder="Password"
      />
      <small class="text-danger text-start mt-1">{{ error }}</small>
      <small class="text-end mt-3"><a href="#">Forgot your password?</a></small>
      <button class="w-100 btn btn-secondary mt-4" @click="login()">
        login
      </button>
    </div>
  </div>
</template>

<script>
import Register from "../views/RegisterView.vue";

export default {
  components: { Register },
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
      validacion: false,
      error: "",
    };
  },
  methods: {
    continuar() {
      this.email = this.email.toLowerCase();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!emailRegex.test(this.email)) {
        this.error = "Please enter a valid email address.";
        return;
      }

      if (localStorage.usuarios) {
        const [usuario] = this.filtrar();

        if (usuario) {
          console.log("el usuario existe, haz login");
          this.validacion = true;
        } else {
          console.log("registrate");
          this.$store.commit("addEmail", this.email);
          this.$router.push("/register");
        }
      } else {
        console.log("no existe localStorage.usuarios");
        this.$store.commit("addEmail", this.email);
        this.$router.push("/register");
      }
    },
    login() {
      if (this.password.length < 6) {
        this.error = "Please enter a password min 6 characters.";
        return;
      }

      const [usuario] = this.filtrar();

      if (usuario.password == this.password) {
        console.log(`La sesion de ${usuario.name}, con correo ${usuario.email} esta iniciada`);
        this.email = "";
        this.password = "";
        this.$router.push("/");
      } else {
        console.log("contraseña incorrecta");
        this.error = "The credentials you entered are incorrect.";
      }
    },
    filtrar() {
      return JSON.parse(localStorage.usuarios).filter((item) => item.email == this.email);
    },
    refrescarPagina() {
      location.reload();
    },
  },
  watch: {
    email() {
      this.error = "";
    },
    password() {
      this.error = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background: #171717;
  max-width: 34em;
  input {
    border-radius: 0.1em;
  }
  input:focus {
    color: #edd700;
    background: #444;
    border: 0.1em solid #edd700;
    box-shadow: none;
  }
  input:focus::placeholder {
    color: #aaa;
  }
  button {
    border: 0.1em solid #444;
    border-radius: 0.1em;
    background: #444;
  }
  button:hover {
    background: #3f6dac;
  }
  small {
    letter-spacing: 0.06em;
    a {
      text-decoration: none !important;
      color: #edd700 !important;
    }
  }
}

.retroceder {
  position: relative;
  bottom: 0.6em;
  width: 1.8em;
}

.close {
  position: absolute;
  top: 1em;
  right: 1em;
  fill: #3f6dac;
}
</style>