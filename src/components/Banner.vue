<template>
  <!-- #TODO: SHUFFLE THE BG IMAGE IN THE CLASS  -->
  <div class="hero-image">
    <div class="hero-text">
      <h1 class="mb-5">Delicous Homemade Burger</h1>
      <p class="mb-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, quam.
        Veniam quis beatae velit impedit, tempora, nesciunt omnis inventore
        aliquid recusandae maxime ab nemo quas praesentium nostrum sed facere
        dicta.
      </p>
      <button class="btn btn-lg hero-btn">See Recipe</button>
    </div>
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
/* The hero image */
.hero-image {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  /* linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) */
  background-image: url("../assets/img/bg-img/bg1.jpg");
  /* Set a specific height */
  height: 50%;
  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding-top: 25rem;
  padding-bottom: 25rem;
}
/* Place text in the middle of the image */
.hero-text {
  position: absolute;
  top: 15rem;
  left: 10rem;
  border-left: 3px solid #40ba37;
  background-color: rgba(24, 24, 24, 0.54);
  padding: 60px 50px;
  color: white;
  width: 35rem;
  text-align: center;
}

.hero-btn {
  background-color: #40ba37;
  color: white;
}
</style>
