<template>
  <div class="card card-style" style="width: 18rem">
    <img :src="ImageBitmap" class="img-style" :alt="title" />
    <div class="card-body">
      <div class="receipe-content">
        <h5>{{ title }}</h5>

        <div class="ratings">
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star-o" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "img"],
};
</script>

<style scoped>
.card-style {
  cursor: pointer;
  font-size: 16px;
  background-color: #f6f6c9;
  color: #40ba37;
  border-radius: 5px;
  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  outline: none;
  transition: 0.2s all;
}

.card-style:hover {
  transform: scale(0.98);
  /* Scaling button to 0.98 to its original size */
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  /* Lowering the shadow */
  box-shadow: 70%;
}

/* Section Heading */

.best-receipe-area {
  position: relative;
  z-index: 1;
  padding-bottom: 50px;
}

.single-best-receipe-area {
  position: relative;
  z-index: 1;
}
.img-style {
  border-bottom: 3px solid #40ba37;
}
.receipe-content {
  padding-top: 30px;
  text-align: center;
}
.receipe-content h5 {
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 400;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
}
.receipe-content h5:hover,
.receipe-content h5:focus {
  color: #40ba37;
}
.ratings i {
  font-size: 11px;
  color: #fbb710;
  display: inline-block;
  padding: 0 1px;
}
</style>

<!-- <div class="card card-css p-2" style="width: 18rem">
  <img :src="img" class="card-img-top" :alt="title" />
  <div class="card-body">
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">Delicious</p>
  </div>
</div> -->

<!-- .card-css {
  cursor: pointer;

  font-size: 16px;
  background-color: #808080;
  color: #fff;
  border-radius: 5px;
  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  outline: none;
  transition: 0.2s all;
}
/* Adding transformation when the button is active */

.card-css:hover {
  transform: scale(0.98);
  /* Scaling button to 0.98 to its original size */
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  /* Lowering the shadow */
  box-shadow: 70%;
} -->
