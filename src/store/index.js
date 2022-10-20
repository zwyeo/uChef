import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    recipes: {},
    queryParam: "",
  },
  mutations: {
    getRecipes(state, payload) {
      state.recipes = payload;
    },
    // set the query param based on user search
    setQueryParam(state, newValue) {
      state.queryParam = newValue;
    },
  },
  actions: {
    // This fn is to retrive recipe data from SPOONACULAR API
    getRecipes({ commit }) {
      axios("https://api.spoonacular.com/recipes/complexSearch", {
        params: {
          query: this.state.queryParam,
          apiKey: process.env.VUE_APP_SPOONACULAR_API,
        },
      }).then((res) => {
        const data = res.data.results;
        console.log(data);
        commit("getRecipes", data); // This will pass data into getRecipe muatation as payload
      });
    },
    // This fn receive user input from searchbar and pass payload to mutation
    setQueryParam({ commit }, newValue) {
      commit("setQueryParam", newValue);
    },
  },
  getters: {},
  modules: {},
});
