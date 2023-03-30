<template>
  <nav class="navbar navbar-dark navbar-expand-lg position-relative py-5">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="/">
        <img class="logo" src="/logo.png" alt="">
      </a>
      <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel" >
        <div class="offcanvas-header">
          <button type="button" class="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link class="nav-link text-uppercase" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-uppercase" to="/signUp" >Sign Up</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div class="enlaces d-flex justify-content-center">
    <ul class="nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/">HOME</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/starships">STARSHIPS</router-link>
      </li>
    </ul>
  </div> 
</template>

<script>
export default {
  name: "Navegacion",
};
</script>

<style lang="scss" soped>
.navbar,
.enlaces {
  background: #000;
}

.navbar {
  .logo {
    width: 10em;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .navbar-toggler-icon {
    background-image: url("/burger.svg");
  }
  .navbar-toggler,
  .navbar-toggler:focus,
  .navbar-toggler:active {
    box-shadow: none;
    border: none !important;
  }
  .offcanvas-header{
    padding-left: 1.5em;
    padding-top:  3.5rem;
  }
  .offcanvas-header,
  .offcanvas-body{
    background: #000;
  }
  .btn-close,
  .btn-close:focus,
  .btn-close:active {
    background-image: url("/close.svg") !important;
    background-size: contain;
    box-shadow: none !important;
    opacity: 1 !important;
  }
}

.enlaces {
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  .nav {
    border-left: 1px solid #333;
  }
  .nav-link {
    border-right: 1px solid #333;
    color: #999;
  }
  .nav-link:focus,
  .nav-link:hover {
    color: #fff;
  }
  .router-link-exact-active {
    color: #fff;
    border-bottom: 1px solid #0d6efd;
    line-height: 22px;
  }
}
</style>