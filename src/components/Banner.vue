<template>
  <!-- CURRENTLY PICTURES ARE HARDCODED, NEED TO EDIT -->
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="../assets/img/bg-img/bg1.jpg"
          class="d-block w-100"
          alt="..."
        />
        <div
          class="carousel-caption d-none d-md-block animate__animated animate__fadeInUp animate__delay-2 animate__slow carousel-label"
        >
          <h2
            class="animate__animated animate__fadeInUp animate__delay-4 animate__slower"
          >
            Delicious burger
          </h2>
          <p
            class="animate__animated animate__fadeInUp animate__delay-5 animate__slower carousel-text"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            et illum voluptatibus at blanditiis expedita. Ab, maiores nisi?
            Pariatur explicabo porro modi velit mollitia magnam officiis error
            recusandae optio beatae!
          </p>
          <button class="text-btn">See Recipe</button>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../assets/img/bg-img/bg1.jpg"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../assets/img/bg-img/bg2.jpg"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
body,
html {
  height: 100%;
}
body,
html {
  height: 100%;
}
.active {
  color: #1c8314;
}
.carousel-label {
  /* position: absolute;
  top: 30%;
  bottom: 20%;
  left: 10%; */
  border-left: 3px solid #40ba37;
  background-color: rgba(24, 24, 24, 0.54);
  padding: 60px 10px;
  margin-bottom: 10%;
  color: white;
  width: 40%;
  text-align: center;
}
.carousel-text {
  font-size: larger;
  padding: 10%;
}
.text-btn {
  background: #40ba37;
  padding: 1em;
  color: white;
  border-left: 3px solid #1c8314;
  font-weight: bold;
}
</style>
