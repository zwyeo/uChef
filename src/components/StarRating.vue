<template>
  <div class="row">
    <div class="col-md-12">
      <div class="stars">
        <form action="">
          <input
            class="star star-5"
            id="star-5"
            type="radio"
            name="star"
            value="5"
            v-model="$store.state.starrating"
            @click="checkRating"
          />

          <label class="star star-5" for="star-5"></label>

          <input
            class="star star-4"
            id="star-4"
            type="radio"
            name="star"
            value="4"
            v-model="$store.state.starrating"
            @click="checkRating"
          />

          <label class="star star-4" for="star-4"></label>

          <input
            class="star star-3"
            id="star-3"
            type="radio"
            name="star"
            value="3"
            v-model="$store.state.starrating"
            @click="checkRating"
          />

          <label class="star star-3" for="star-3"></label>

          <input
            class="star star-2"
            id="star-2"
            type="radio"
            name="star"
            value="2"
            v-model="$store.state.starrating"
            @click="checkRating"
          />

          <label class="star star-2" for="star-2"></label>

          <input
            class="star star-1"
            id="star-1"
            type="radio"
            name="star"
            value="1"
            v-model="$store.state.starrating"
            @click="checkRating"
          />

          <label class="star star-1" for="star-1"></label>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarRating",
  data() {
    return {};
  },
  methods: {
    checkRating() {
      this.$store.state.starrating = event.target.value;
      console.log(this.$store.state.starrating);
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  background-color: #eee;
}

div.stars {
  width: 270px;

  display: inline-block;
}

.mt-200 {
  margin-top: 200px;
}

input.star {
  display: none;
}

label.star {
  float: right;

  padding: 10px;

  font-size: 36px;

  color: #4a148c;

  transition: all 0.2s;
}

input.star:checked ~ label.star:before {
  content: "\f005";

  color: #fd4;

  transition: all 0.25s;
}

input.star-5:checked ~ label.star:before {
  color: #fe7;

  text-shadow: 0 0 20px #952;
}

input.star-1:checked ~ label.star:before {
  color: #f62;
}

label.star:hover {
  transform: rotate(-15deg) scale(1.3);
}

label.star:before {
  content: "\f006";

  font-family: FontAwesome;
}
</style>
