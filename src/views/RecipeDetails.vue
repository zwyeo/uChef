<template>
  <h1>Recipe Details Page</h1>
  <p>The recipe ID is {{ id }}</p>
  <span>{{ title }}</span>
  <div>
    <img :src="image" />
  </div>

  <h3>It has {{ calories }} calories</h3>

  <br />
  Ingredient list: <br />
  <ol>
    <li v-for="ingredient in ingredient_list" :key="ingredient">
      {{ ingredient }}
    </li>
  </ol>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      title: null,
      image: null,
      calories: null,
      ingredient_list: [],
    };
  },
  created() {
    // api for title and image
    let url = "https://api.spoonacular.com/recipes/" + this.id + "/information";
    axios(url, {
      params: {
        apiKey: process.env.VUE_APP_SPOONACULAR_API,
      },
    }).then((response) => {
      // console.log(response.data);
      this.title = response.data.title;
      this.image = response.data.image;
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
      console.log(this.ingredient_list);
    });
  },
};
</script>

<style></style>
