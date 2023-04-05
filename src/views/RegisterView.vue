<template>
  <div class="card text-center ms-auto me-auto p-5 mt-4 rounded-1">
    <router-link to="/"
      ><img class="close" src="/icons/close.svg" alt=""
    /></router-link>
    <div class="d-flex justify-content-center mb-5">
      <img class="w-75" src="/img/logo3.png" alt="" />
    </div>
    <div class="text-center text-white">
      <p class="text-warning fs-2">CREATE YOUR ACCOUNT</p>
      <p class="text-secondary text-center mb-4">{{ emailRegister }}</p>
      <div class="d-flex flex-column">
        <input
          class="form-control"
          :class="{ 'border-danger text-danger': errorName }"
          type="text"
          v-model.trim="name"
          placeholder="Nombre"
        />
        <small class="text-danger text-start my-1">{{ errorName }}</small>
        <input
          class="form-control mt-3"
          :class="{ 'border-danger text-danger': errorLast }"
          type="text"
          v-model.trim="lastName"
          placeholder="Apellido"
        />
        <small class="text-danger text-start my-1">{{ errorLast }}</small>
        <input
          class="form-control mt-3"
          :class="{ 'border-danger text-danger': errorPassword }"
          :type="[contraseña]"
          v-model.trim="password"
          placeholder="Password"
        />
        <small class="text-danger text-start my-1">{{ errorPassword }}</small>
        <div class="checkpass text-start my-3">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            @click="mostrarContraseña()"
            id="flexCheckDefault"
          />
          <small class="form-check-label ms-2" for="flexCheckDefault"
            >Show password</small
          >
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="condiciones"
          />
          <label class="form-check-label text-start" for="condiciones">
            <p class="tamaño">
              Yes! I would like to receive by email special offers and updates
              about Lucasfilm Ltd. and other products and services from
              <a href="#">The Walt Disney Family of Companies</a>.
            </p>
          </label>
        </div>
        <div class="condiciones text-start">
          <p>
            By creating an account, you agree to our
            <a href="#">Terms of Use</a>, and acknowledge that you have read our
            <a href="#">Privacy Policy</a>, <a href="#">Cookies Policy</a> and
            <a href="#">UK & EU Privacy Rights</a>.
            <a href="#">More...</a>
          </p>
          <p class="tamaño">
            My home country/region: Spain.<a href="#">Change</a>.
          </p>
        </div>
        <button class="w-100 btn btn-secondary mt-4" @click="registrar()">
          Registrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      name: "",
      lastName: "",
      password: "",
      usuarios: [],
      errorName: "",
      errorLast: "",
      msgEmail: "",
      errorPassword: "",
      contraseña: "password",
    };
  },
  computed: {
    ...mapState(["emailRegister"]),
  },
  methods: {
    registrar() {
      if (!this.validar()) {
        return;
      }

      this.usuarios.push({
        name: this.name,
        lastName: this.lastName,
        email: this.emailRegister,
        password: this.password,
      });

      localStorage.usuarios = JSON.stringify(this.usuarios);
      localStorage.sesionUsuarios = JSON.stringify(this.usuarios);

      console.log(`registro ok de ${this.name} ${this.lastName} con correo ${this.emailRegister}`);
      this.name = "";
      this.lastName = "";
      this.password = "";
      this.$router.push("/login");
    },
    validar() {
      if (this.name == "") {
        this.errorName = "Please enter your first name.";
        return false;
      }
      if (this.lastName == "") {
        this.errorLast = "Please enter your last name.";
        return false;
      }
      if (this.password.length < 6) {
        this.errorPassword = "Please enter a password min 6 characters.";
        return false;
      }
      return true;
    },
    mostrarContraseña() {
      this.contraseña = this.contraseña == "password" ? "text" : "password";
    },
  },
  mounted() {
    if (localStorage.usuarios) this.usuarios = JSON.parse(localStorage.usuarios); 
    if (this.emailRegister == "") this.$router.push('/login');
  },
  watch: {
    name() {
      this.errorName = "";
    },
    lastName() {
      this.errorLast = "";
    },
    password() {
      this.errorPassword = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background: #171717;
  max-width: 34em;
  .close {
    position: absolute;
    top: 1em;
    right: 1em;
    fill: #3f6dac;
  }
  input:not([type="checkbox"]) {
    border-radius: 0.1em;
  }
  input:focus:not([type="checkbox"]) {
    color: #edd700;
    background: #444;
    border: 0.1em solid #edd700;
    box-shadow: none;
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
  .checkpass,
  .form-check,
  .condiciones {
    color: #888;
    small {
      color: #888;
      font-size: 0.7em;
    }
    .tamaño {
      font-size: 0.9em;
    }
    a {
      text-decoration: none;
      color: #edd700;
    }
  }
}
</style>