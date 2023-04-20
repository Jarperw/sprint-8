<template>
  <footer class="text-center text-white position-relative">
    <div class="logo text-start ms-4">
      <img src="/icons/footer.svg" alt="" />
    </div>
    <div class="container pb-md-2">
      <section class="social">
        <p class="mb-1">More From Star Wars:</p>
        <ul class="navbar-nav d-flex flex-row justify-content-center">
          <li class="nav-item ms-md-2">
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
      </section>
    </div>
    <div class="copyright text-center py-3 pt-md-5 pb-md-0">
      <p class="mb-md-2">TM & © Lucasfilm Ltd. All Rigths Reserved</p>
    </div>
    <div class="lista py-1 pt-md-0">
      <ul class="d-flex flex-column flex-md-row flex-wrap justify-content-center px-4 mb-1 mb-md-5">
        <li class="nav-link"><a href="#">Terms of use</a></li>
        <li class="nav-link"><a href="#">Additional Content Information</a></li>
        <li class="nav-link"><a href="#">Privacy Policy</a></li>
        <li class="nav-link"><a href="#">Children's Online Privacy PolicY</a></li>
        <li class="nav-link"><a href="#">Your California Privacy Rights</a></li>
        <li class="nav-link"><a href="#">Star Wars at shopDisney</a></li>
        <li class="nav-link"><a href="#">Star Wars Helpdesk</a></li>
        <li class="nav-link"><a href="#">Interest-Based Ads</a></li>
        <li class="nav-link mb-0"><a href="#">Do Not Sell My Personal Information</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
footer {
  padding-top: 2.5em;
  background: #000;
}

.logo {
  position: absolute;
  top: 0;
  @media (min-width: 768px) {
    left: 7em;
  }
}

.copyright,
.social {
  p {
    font-size: 0.9em;
  }
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

.lista {
  li {
    position: relative;
    margin-bottom: 0.45em;
    a {
      color: #fff;
      font-size: 0.75em;
      margin-right: 1em;
    }
    a:hover {
      filter: drop-shadow(0 3px 10px #fff);
    }
  }
  @media (min-width: 768px) {
    li {
      margin-bottom: 0em;
    }
  }
}
</style>