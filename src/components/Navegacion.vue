<template>
  <div :class="{ margen: !burger }">
    <nav class="container-fluid pt-5 pt-lg-3" :class="{ 'fixed-top': !burger }">
      <div v-if="mobile" class="boton-burger">
        <span v-if="burger" @click="burger = !burger"
          ><img src="/icons/burger.svg"
        /></span>
        <span v-if="!burger" @click="burger = !burger"
          ><img src="/icons/close.svg"
        /></span>
      </div>
      <a class="navbar-brand" href="/">
        <img v-if="mobile" class="logo" src="/img/logo.png" alt="" />
        <img v-else class="logo2" src="/img/logo2.png" alt="" />
      </a>
      <div class="d-flex justify-content-between">
        <div v-if="!mobile" class="izquierda ms-3 ps-3">
          <ul class="navbar-nav d-flex flex-row">
            <li class="nav-item ms-lg-2">
              <a class="nav-link pe-2" href="#">
                <img class="red" src="/icons/facebook.svg" alt="" />
              </a>
            </li>
            <li class="nav-item ms-2">
              <a class="nav-link p-2" href="#">
                <img class="red" src="/icons/instagram.svg" alt="" />
              </a>
            </li>
            <li class="nav-item ms-2">
              <a class="nav-link p-2" href="#">
                <img class="red" src="/icons/youtube.svg" alt="" />
              </a>
            </li>
            <li class="nav-item ms-2">
              <a class="nav-link p-2" href="#">
                <img class="red color" src="/icons/twitter.svg" alt="" />
              </a>
            </li>
            <span class="align-self-center"></span>
            <li class="nav-item ms-2">
              <a class="nav-link p-2" href="#">
                <img src="/icons/kids.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div v-if="!mobile" class="derecha alinear d-flex align-items-end me-5">
          <ul class="navbar-nav flex-row pe-3 fw-bold">
            <li class="nav-item">
              <Router-link class="nav-link text-white text-uppercase p-2" to="#" >Search</Router-link>
            </li>
            <li class="nav-item">
              <Router-link v-if="login" class="nav-link text-white text-uppercase p-2 d-flex" to="/signIn">
                <img class="pe-2" src="/icons/user.svg" alt="" />{{ datosLogin.name }}
              </Router-link>
              <Router-link v-else class="nav-link text-white text-uppercase p-2 d-flex" to="/login">
                <img class="pe-2" src="/icons/user.svg" alt="" /> Sign In
              </Router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- //transicion -->
    <transition v-if="mobile" name="desplazamiento">
      <div v-if="!burger" class="desplazamiento pt-3 fw-bold">
        <ul class="navbar-nav enlaces ps-5 mb-4">
          <li class="nav-item ms-3 mb-2 position-relative">
            <Router-link class="nav-link" to="/"><span class="mob"></span>HOME</Router-link>
          </li>
          <li class="nav-item ms-3 mb-2 position-relative">
            <Router-link class="nav-link" to="/starships"><span class="mob"></span>STARSHIPS</Router-link>
          </li>
        </ul>
        <ul class="navbar-nav derecha ps-5 mb-5 border-top border-secondary">
          <li class="nav-item ms-3 mt-4">
            <Router-link v-if="login" class="nav-link text-uppercase text-white d-flex" to="/signIn">
              <img class="pe-2" src="/icons/user.svg" alt="" />{{ datosLogin.name }}
            </Router-link>
            <Router-link v-else class="nav-link text-white d-flex" to="/login">
              <img class="pe-2" src="/icons/user.svg" alt="" />SIGN IN
            </Router-link>
          </li>
        </ul>
        <ul class="navbar-nav izquierda ps-5 ms-3 pt-4 d-flex flex-row">
            <li class="nav-item ms-lg-2">
              <a class="nav-link pe-2" href="#">
                <img class="red" src="/icons/facebook.svg" alt="" />
              </a>
            </li>
            <li class="nav-item ms-2">
              <a class="nav-link p-2" href="#">
                <img class="red" src="/icons/instagram.svg" alt="" />
              </a>
            </li>
            <li class="nav-item ms-2">
              <a class="nav-link p-2" href="#">
                <img class="red" src="/icons/youtube.svg" alt="" />
              </a>
            </li>
            <li class="nav-item ms-2">
              <a class="nav-link p-2" href="#">
                <img class="red color" src="/icons/twitter.svg" alt="" />
              </a>
            </li>
            <li class="nav-item ms-2">
              <a class="nav-link p-2" href="#">
                <img src="/icons/kids.svg" alt="" />
              </a>
            </li>
          </ul>
      </div>
    </transition>

    <!-- enlaces -->
    <div class="enlaces d-flex justify-content-center border-bottom border-secondary">
      <ul v-if="!mobile" class="nav mb-1 position-relative fw-bold">
        <li class="nav-item">
          <router-link class="nav-link" to="/">HOME<span></span></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/starships"
            >STARSHIPS<span></span
          ></router-link>
        </li>
      </ul>
    </div>
  </div>
  <div class="enlace-app text-center">
    <a class="text-decoration-none text-white" href="#">
      <h6 >
        <span class="uno"></span>
        <span class="dos"></span>
        ON DISNEY+
      </h6>
    </a>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "Navegacion",
  data() {
    return {
      mobile: window.innerWidth <= 992,
      burger: true,
      clicks: 0,
      logged: false,
    };
  },
  computed: {
    ...mapState(['login', 'datosLogin']),
  },
  methods: {
    mostrar() {
      if (window.innerWidth <= 992) this.mobile = true;
      else {
        this.mobile = false;
        this.burger = true;
        this.clicks = 0;
      }
    },
    cerrar(e) {
      if (this.burger == true) {
        return (this.clicks = 0);
      } else if (e.key == "Enter" || (e.type == "click" && this.clicks > 0)) {
        this.burger = true;
        this.clicks = 0;
      } else if (e.type == "click" && this.clicks == 0) {
        this.clicks++;
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.mostrar);
    window.addEventListener("click", this.cerrar);
    window.addEventListener("keyup", this.cerrar);
  },
};
</script>

<style lang="scss" scoped>
.margen {
  margin-top: 4.5em;
  border-bottom: 0.1em solid #222;
}

.container-fluid,
.enlaces {
  background: #000;
}

.container-fluid {
  padding-bottom: 1.55em !important;
  @media (min-width: 992px) {
    padding-bottom: 4.6em !important;
  }
}

.boton-burger {
  position: absolute;
  top: 1.3em;
  left: 1.3em;
}

.logo {
  width: 16em;
  position: absolute;
  top: 2.2em;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: 768px) {
    width: 20em;
  }
}
.logo2 {
  width: 11.5em;
  position: absolute;
  top: 4em;
  left: 50%;
  transform: translate(-50%, -50%);
}

.izquierda {
  li {
    align-self: center;
    .red {
      width: 1.3em;
    }
  }
  img:hover {
    filter: drop-shadow(0 0 5px #fff);
  }
  span {
    margin-left: 1.5em;
    padding-top: 1.6em;
    border-left: 0.1em solid #555;
  }
}

.derecha,
.enlaces {
  .nav-link {
    color: #999;
  }
  .nav-link:focus,
  .nav-link:hover {
    color: #fff;
    img {
      filter: drop-shadow(0 0 1px #fff);
    }
  }
  .router-link-exact-active {
    color: #fff;
    span {
      position: relative;
      top: 0.8em;
      display: block;
      height: 0.1em;
      background: #fff;
      box-shadow: 0 0 0.25em 0.1em #fade4b;
      border-radius: 0.25em;
    }
    .mob {
      position: absolute;
      height: 1.5em;
      width: 0.13em;
      top: 0.5em;
      right: 19.6em;
    }
  }
}

.alinear {
  position: relative;
  top: 8px;
}

.desplazamiento {
  background: #000;
  position: fixed;
  top: 4.6.9em;
  z-index: 5;
  width: 370px;
  height: 100%;
}

.desplazamiento-enter-active,
.desplazamiento-leave-active {
  transition: all 0.1s ease;
}

.desplazamiento-enter-from,
.desplazamiento-leave-to {
  transform: translateX(-370px);
}

.desplazamiento-enter-to,
.desplazamiento-leave-from {
  transform: translateX(0);
}

.enlace-app {
  background: #121212;
  cursor: pointer;
  padding: 0.8em 0;
  h6 {
    font-size: 0.86em;
    .uno::before {
      content: "STREAM STAR WARS";
    }
  }
  @media (min-width: 480px) {
    h6 {
      .uno::before {
        content: "ALL OF YOUR STAR WARS";
      }
      .dos::before {
        content: " FAVORITES NOW STREAMING";
      }
    }
  }
}
</style>