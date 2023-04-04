<template>
  <div class="container">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item foto1 active">
          <div class="d-flex justify-content-center p-2 p-md-0">
            <div class="saludo d-flex text-center p-3">
              <img src="/img/logo.png" class="w-100" alt="">
            </div>
          </div>
        </div>
        <div class="carousel-item foto2">
          <div></div>
        </div>
        <div class="carousel-item foto3">
          <div></div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style lang="scss" scoped>

.container{
  max-width: 1600px;
  .carousel{

    .carousel-item{
      background-size:cover;
      background-position:center;
      background-repeat:no-repeat;
      div{
        width: 100%;
        height: 535px;
      }
      .saludo{
        width: 30em;
        height: 8em;
        border: 0.5em solid #fff;
        border-radius: 1em;
        position: relative;
        top: 24em;
        animation-name: saludo;
        animation-duration: 6s;
        animation-timing-function: ease;
        filter: drop-shadow(0 0 1px #fff);
      }

      @keyframes saludo {
        0%{opacity: 0; translate: (-160% -400%); width: 20%;}
        100%{opacity : 10; filter: drop-shadow(0 0 5px #fff);}
      }
    }
    .foto1{
      background-image: url('/img/grogu.png');
    }
    .foto2{
      background-image: url('/img/img1.png');
    }
    .foto3{
      background-image: url('/img/img2.png');
    }
  }
}

</style> 
