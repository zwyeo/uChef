<template>
  <div class="card card-css p-2" style="width: 18rem">
    <img :src="img" class="card-img-top" :alt="title" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">Delicious</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "img"],
};
</script>

<style scoped>
.card-css {
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
}
</style>
