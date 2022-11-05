<template>
  <!-- Website Logo
  ================= -->
  <section id="logo">
    <div class="container text-center">
      <img src="../assets/logo-white.svg" alt="logo" />
      <br />
      <h1>Recipe Page</h1>
    </div>
  </section>

  <!-- Recipe Section
  =================== -->
  <section id="recipe">
    <div class="container">
      <div class="row">
        <!-- Title -->
        <div class="col-12">
          <h2>{{ title }}</h2>
        </div>
      </div>
      <div class="row">
        <!-- Picture -->
        <div class="col-md-7 c1">
          <img :src="image" class="recipe-picture" />
          <button class="bookmark">bookmark</button>
        </div>
        <!-- Info -->
        <div class="col-md-5 c2">
          <div class="recipe-info">
            <h3>Info</h3>
            <!-- Time -->
            <div class="row">
              <div class="col-2 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-stopwatch"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z"
                  />
                  <path
                    d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z"
                  />
                </svg>
              </div>
              <div class="col-6">Time</div>
              <div class="col-4">{{ minutes }} mins</div>
            </div>
            <!-- Difficulty -->
            <div class="row">
              <div class="col-2 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-fire"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"
                  />
                </svg>
              </div>
              <div class="col-6">Calories</div>
              <div class="col-4">{{ calories }}</div>
            </div>
            <!-- Serves -->
            <div class="row">
              <div class="col-2 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-people-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                  />
                  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                </svg>
              </div>
              <div class="col-6">Servings</div>
              <div class="col-4">{{ servings }}</div>
            </div>
            <!-- End of serves -->
          </div>
          <!--BOOKMARK-->
          
        </div>
      </div>
      <!-- Ingredients -->
      <div class="row">
        <div class="col-12">
          <h3>Ingredients</h3>
          <ul class="list-group">
            <li
              v-for="ingredient in ingredient_list"
              :key="ingredient"
              class="list-group-item"
            >
              <span class="pull-left"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                  />
                </svg>
              </span>
              &nbsp;{{ ingredient }}
            </li>
          </ul>
        </div>
      </div>
      <!-- Directions -->
      <div class="row">
        <div class="col-12">
          <div class="recipe-steps">
            <h3>Steps</h3>
            <ol>
              <li v-for="instruction in instructions" :key="instruction">
                {{ instruction }}
              </li>
            </ol>
          </div>
        </div>
      </div>
      <!--End of directions-->
    </div>
  </section>
  <!-- <section class="py-5">
    <div class="container px-4 px-lg-5 my-5">
      <div class="row">
        <div class="col-md-6">
          <img class="card-img-top mb-5 mb-md-0" :src="image" alt="..." />
        </div> -->
  <!-- End of Column1 -->
  <!-- <div class="col-md-6">
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
        </div> -->
  <!-- end of column2 -->
  <!-- </div>
      <hr />
      <h3>Instructions</h3>
      <ol>
        <li v-for="instruction in instructions" :key="instruction">
          {{ instruction }}
        </li>
      </ol>
      <p>The recipe ID is {{ id }}</p>
    </div>
  </section> -->
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
      servings: null,
      ingredient_list: [],
    };
  },
  created() {
    // api for title, image, minutes to make, summary,analysed instructions and servings
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
      this.servings = response.data.servings;

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
<!-- CSS files
  ============== -->
<style scoped>
body {
  background-color: #a44c9f;
  color: #666;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  line-height: 1.5;
  overflow-x: hidden;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/*
** Website Logo
** -----------------------------------------------------------------------------
*/

#logo {
  width: 100%;
  min-height: 250px;
  margin-left: auto;
  margin-right: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: radial-gradient(
      rgba(126, 0, 119, 0.15),
      rgba(126, 0, 119, 0.75)
    ),
    url("../assets/kitchen-banner.jpg");
}
#logo img {
  height: 100px;
  width: auto;
  margin-top: 24px;
}
#logo h1 {
  font-family: "Quirlycues";
  font-size: 72px;
  font-weight: normal;
  padding-top: 24px;
  color: #f9f9f9;
}

/*
** Recipe Section
** -----------------------------------------------------------------------------
*/

#recipe {
  background-color: #f1f1f1;
  padding-top: 12px;
  padding-bottom: 24px;
}
#recipe h2 {
  color: #333;
  font-family: "Dancing Script", cursive;
  font-size: 2em;
  margin-bottom: 24px;
  margin-top: 12px;
}
#recipe h3 {
  background-color: #f1f1f1;
  margin-top: 24px;
}
.recipe-picture {
  width: auto;
  height: auto;
  margin-bottom: 24px;
  margin-top: 6px;
  z-index: -1;
  -webkit-box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.6), 0px 0px 0px 14px #fff,
    0px 0px 0px 18px rgba(0, 0, 0, 0.2), 6px 6px 8px 17px #555;
  -moz-box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.6), 0px 0px 0px 14px #fff,
    0px 0px 0px 18px rgba(0, 0, 0, 0.2), 6px 6px 8px 17px #555;
  box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.6), 0px 0px 0px 14px #fff,
    0px 0px 0px 18px rgba(0, 0, 0, 0.2), 6px 6px 8px 17px #555;
}
.recipe-info .row {
  margin-top: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
  background-color: #f9f9f9;
  -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
}


.recipe-steps ol {
  counter-reset: li;
  list-style: none;
  padding: 0;
  margin-bottom: 4em;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
}
.recipe-steps ol ol {
  margin: 0 0 0 2em;
}
.recipe-steps li {
  position: relative;
  display: block;
  padding: 0.4em 0.4em 0.4em 0.8em;
  *padding: 0.4em;
  margin: 0.5em 0 0.5em 2.5em;
  background: #f9f9f9;
  color: #222;
  text-decoration: none;
  transition: all 0.3s ease-out;
  -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
}
.recipe-steps li:hover {
  background: #f1f1f1;
}
.recipe-steps li:before {
  content: counter(li);
  counter-increment: li;
  position: absolute;
  left: -2.5em;
  top: 50%;
  margin-top: -1em;
  background: #a44c9f;
  height: 2em;
  width: 2em;
  line-height: 2em;
  text-align: center;
  font-weight: bold;
  color: #f9f9f9;
}
.recipe-steps li:after {
  position: absolute;
  content: "";
  border: 0.5em solid transparent;
  left: -1em;
  top: 50%;
  margin-top: -0.5em;
  transition: all 0.3s ease-out;
}
.recipe-steps li:hover:after {
  left: -0.5em;
  border-left-color: #a44c9f;
}

.c1{
  padding-left: 25px;
  padding-right:0px;
  width: 670px;
  position: relative;
}
.c2{
  margin-top: 100px;
  /* margin-right: 100px; */
  padding-left: 0;
  padding-right: 100px;
  
}
.bookmark{
  position: absolute;
  border-radius: 50%;
  bottom: 0;
  right:50px;
  padding: 10px;
}
svg {
  color: #a44c9f;
}
</style>
