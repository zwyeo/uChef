import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    recipes: {},
    queryParam: "",
    previews: {},
    searchDesc: "Search food recipe",
    categories: ["Nutrition", "Prep Time", "Allergy"],
    selectedCategory: "Nutrition",
    calories: "",
    nutrition: {},
    maxtime: "",
    selectedAllergies: [],
    ingredientSearch: {},
    sortBy: "",
  },
  mutations: {
    getRecipes(state, payload) {
      state.recipes = payload;
    },
    // set the query param based on user search
    setQueryParam(state, newValue) {
      state.queryParam = newValue;
    },
    showPreviews(state, payload) {
      state.previews = payload;
    },
    searchByIngredients(state) {
      state.searchDesc = "Enter ingredients";
    },
    setCategory(state, selectedCategory) {
      state.selectedCategory = selectedCategory;
    },
    setCalories(state, setCalories) {
      state.calories = setCalories;
    },
    nutritionFilterBlank(state, payload) {
      state.nutrition = payload;
    },
    setMaxTime(state, setMaxTime) {
      state.maxtime = setMaxTime;
    },
  },
  actions: {
    // This fn is to retrive recipe data from SPOONACULAR API
    getRecipes({ commit }) {
      let userQuery = this.state.queryParam;
      let url = "";
      if (userQuery.includes(",")) {
        //for searching by ingredients
        url = "https://api.spoonacular.com/recipes/findByIngredients";
        axios(url, {
          params: {
            ingredients: userQuery, //different param for ingredient search
            apiKey: process.env.VUE_APP_SPOONACULAR_API,
          },
        }).then((res) => {
          const data = res.data;
          console.log(data);
          this.state.ingredientSearch = data; //to save search by ingredient results into a separate array for comparing purposes
          commit("getRecipes", data); // This will pass data into getRecipe muatation as payload

          //find matching title using normal search?? do this so if search by ingredients also can use filters
        });
      } else {
        let parameters = {
          //init new params object
          query: userQuery,
          apiKey: process.env.VUE_APP_SPOONACULAR_API,
        };
        if (this.state.calories > 0) {
          //check if calories field is filled
          parameters.maxCalories = this.state.calories;
        }
        if (this.state.maxtime > 0) {
          //check if max time field is filled
          parameters.maxReadyTime = this.state.maxtime;
        }
        if (this.state.selectedAllergies.length > 0) {
          //check for allergies
          console.log(this.state.selectedAllergies);
          parameters.intolerances = this.state.selectedAllergies.join();
        }
        if (this.state.sortBy.length > 0) {
          parameters.sort = this.state.sortBy;
          if (this.state.sortBy == "price") {
            parameters.sortDirection = "asc"; //sort price by descending order/ cheapest first
          }
        }
        url = "https://api.spoonacular.com/recipes/complexSearch";
        axios(url, {
          params: parameters,
        }).then((res) => {
          const data = res.data.results;

          console.log(data);
          commit("getRecipes", data); // This will pass data into getRecipe muatation as payload
        });
      }
    },
    // This fn receive user input from searchbar and pass payload to mutation
    setQueryParam({ commit }, newValue) {
      commit("setQueryParam", newValue);
    },
    showPreviews({ commit }) {
      //for showing previews, BUT only works with normal search and not ingredient search
      //ingredient search previews KIV for now
      axios("https://api.spoonacular.com/recipes/autocomplete", {
        params: {
          query: this.state.queryParam,
          number: 5,
          apiKey: process.env.VUE_APP_SPOONACULAR_API,
        },
      }).then((response) => {
        const data = response.data;
        // console.log(response.data);
        commit("showPreviews", data);
      });
    },
    setCategory({ commit }, selectedCategory) {
      commit("setCategory", selectedCategory);
    },
    setCalories({ commit }, setCalories) {
      commit("setCalories", setCalories);
    },
    nutritionFilterBlank({ commit }) {
      //returns food that matches max calories set by user BUT cannot take search query into account
      axios("https://api.spoonacular.com/recipes/findByNutrients", {
        params: {
          maxCalories: this.state.calories,
          apiKey: process.env.VUE_APP_SPOONACULAR_API,
        },
      }).then((response) => {
        const data = response.data;
        console.log(response.data);
        commit("nutritionFilterBlank", data);
      });
    },
    setMaxTime({ commit }, setMaxTime) {
      commit("setMaxTime", setMaxTime);
    },
  },
  getters: {},
  modules: {},
});
