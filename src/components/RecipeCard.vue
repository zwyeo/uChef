<template>
  <div class="card" style="width: 18rem">
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

<style></style>
