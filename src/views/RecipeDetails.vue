<template>
  <section class="py-5">
    <div class="container px-4 px-lg-5 my-5">
      <div class="row">
        <div class="col-md-6">
          <img class="card-img-top mb-5 mb-md-0" :src="image" alt="..." />
          <p></p>
        </div>
        <!-- End of Column1 -->
        <div class="col-md-6">
          <h1 class="display-5 fw-bolder">{{ title }}</h1>
          <div class="fs-5 ms-4">
            <p
              class="lead"
              style="font-family: 'Courier New', Courier, monospace"
            >
              {{ numOfIngredients }} Ingredients <span>|</span>
              {{ minutes }} Minutes
            </p>
          </div>
          <h3>Summary</h3>
          <p v-html="summary"></p>
        </div>
        <!-- end of column2 -->
      </div>
      <hr />
      <h3>Instructions</h3>
      <ol>
        <li v-for="instruction in instructions" :key="instruction">
          {{ instruction }}
        </li>
      </ol>
      <p>The recipe ID is {{ id }}</p>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-4" style="background-color: red">some content</div>
        <div class="col-md-4" style="background-color: yellow">
          catz
          <img
            width="100"
            height="100"
            src="https://placekitten.com/100/100/"
          />
        </div>
        <div class="col-md-4" style="background-color: green">
          some more content
        </div>
      </div>
    </div>
  </section>

  <!-- <span>{{ title }}</span> -->
  <!-- <div>
    <h2>Description</h2>
    <img :src="image" />
    <p v-html="summary"></p>
  </div>

  <h3>It has {{ calories }} calories</h3>
  <h3>It takes {{ minutes }} to make</h3>
  <br />
  <h3>Ingredient list:</h3>
  <br />
  <ol>
    <li v-for="ingredient in ingredient_list" :key="ingredient">
      {{ ingredient }}
    </li>
  </ol> -->
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      title: null,
      image: null,
      minutes: null,
      summary: null,
      instructions: [],
      calories: null,
      ingredient_list: [],
    };
  },
  created() {
    // api for title, image, minutes to make, summary, analysed instructiions
    let url = "https://api.spoonacular.com/recipes/" + this.id + "/information";
    axios(url, {
      params: {
        apiKey: process.env.VUE_APP_SPOONACULAR_API,
      },
    }).then((response) => {
      // console.log(response.data);
      this.title = response.data.title;
      this.image = response.data.image;
      this.minutes = response.data.readyInMinutes;
      this.summary = response.data.summary;

      // retrieving analysed instructions and formatting it
      let stepsarray = response.data.analyzedInstructions[0].steps;
      console.log(stepsarray);
      for (let s of stepsarray) {
        this.instructions.push(s.step);
      }
    });

    // api for calories
    let url2 =
      "https://api.spoonacular.com/recipes/" +
      this.id +
      "/nutritionWidget.json";
    axios(url2, {
      params: {
        apiKey: process.env.VUE_APP_SPOONACULAR_API,
      },
    }).then((response) => {
      //   console.log(response);
      this.calories = response.data.calories.slice(0, -1);
    });

    // api for ingredients
    let url3 =
      "https://api.spoonacular.com/recipes/" +
      this.id +
      "/ingredientWidget.json";
    axios(url3, {
      params: {
        apiKey: process.env.VUE_APP_SPOONACULAR_API,
      },
    }).then((response) => {
      let ingredients = response.data.ingredients;
      let desc = "";
      for (let i of ingredients) {
        let name = i.name;
        let value = i.amount.metric.value;
        let unit = i.amount.metric.unit;
        if (unit == "" || unit == "g") {
          desc = value + unit + " " + name;
        } else {
          desc = value + " " + unit + " " + name;
        }
        this.ingredient_list.push(desc);
      }
      // console.log(this.ingredient_list);
    });
  },
  computed: {
    numOfIngredients() {
      return this.ingredient_list.length;
    },
  },
};
</script>

<style>
.foodimg {
  height: 100%;
  width: 100%;
}
</style>
