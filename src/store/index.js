import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    recipes: {},
    foodCategories: [
      "Beef",
      "Breakfast",
      "Chicken",
      "Dessert",
      "Goat",
      "Lamb",
      "Miscellaneous",
      "Pasta",
      "Pork",
      "Seafood",
      "Side",
      "Starter",
      "Vegan",
      "Vegetarian",
    ],
    selectedCategory: "Beef",
    queryParam: "",
    searchDesc: "Search food recipe",
    // This will store all the popular recipe from DB
    popularRecipe: {},
    // This will store all the community recipe from db
    communityRecipe: {},
    //for reviews posting
    starrating: "",
    activerecipeid: "",
    reviewsubject: "",
    reviewcomments: "",

    // To track user session
    userId: "",
  },
  mutations: {
    getRecipes(state, payload) {
      state.recipes = payload;
    },
    // set the query param based on user search
    setQueryParam(state, newValue) {
      state.queryParam = newValue;
    },

    // To populate popularRecipe
    setPopularRecipe(state, setPopularRecipe) {
      state.popularRecipe = setPopularRecipe;
    },
    // To populate communityRecipe
    setCommunityRecipe(state, setCommunityRecipe) {
      state.communityRecipe = setCommunityRecipe;
    },

    // For user authetication
    set_userId(state, data) {
      state.userId = data;
    },
  },
  actions: {
    // This fn is to retrive recipe data from themealdb API
    getRecipes({ commit }) {
      let userQuery = this.state.queryParam;
      let url = "https://themealdb.com/api/json/v1/1/search.php";
      axios
        .get(url, {
          params: {
            s: userQuery,
          },
        })
        .then((res) => {
          const data = res.data.meals;
          console.log(data);
          commit("getRecipes", data); // This will pass data into getRecipe mutation as payload
        });
    },
    filterCategory({ commit }) {
      let selectedCat = this.state.selectedCategory;
      let url = "https://themealdb.com/api/json/v1/1/filter.php";
      axios.get(url, { params: { c: selectedCat } }).then((response) => {
        const data = response.data.meals;
        console.log(data);
        commit("getRecipes", data); // This will pass data into getRecipe mutation as payload
      });
    },
    postReview({ commit }) {
      console.log(
        this.state.activerecipeid,
        this.state.starrating,
        this.state.reviewsubject,
        this.state.reviewcomments,
        this.state.userName
      );
      let date = new Date();
      const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let wordmonth = month[date.getMonth()];
      let year = date.getFullYear();
      let day = date.getDate();
      let formatdate = `${day} ${wordmonth} ${year}`;
      axios.post(
        `https://wad-proj-22042-default-rtdb.asia-southeast1.firebasedatabase.app/recipes/${this.state.activerecipeid}/reviews.json`,
        {
          user: this.state.userName,
          rating: this.state.starrating,
          subject: this.state.reviewsubject,
          message: this.state.reviewcomments,
          date: formatdate,
        }
      );
      this.state.reviewsubject = "";
      this.state.reviewcomments = "";
    },

    // This fn receive user input from searchbar and pass payload to mutation
    setQueryParam({ commit }, newValue) {
      commit("setQueryParam", newValue);
    },

    setPopularRecipe({ commit }) {
      const url = `https://wad-proj-22042-default-rtdb.asia-southeast1.firebasedatabase.app/popularRecipe.json`;
      axios.get(url).then((res) => {
        const data = res.data;
        commit("setPopularRecipe", data);
      });
    },
    setCommunityRecipe({ commit }) {
      const url = `https://wad-proj-22042-default-rtdb.asia-southeast1.firebasedatabase.app/community.json`;
      axios.get(url).then((res) => {
        const data = res.data;
        commit("setCommunityRecipe", data);
      });
    },

    /// sdadasdadadada
    async fetchUser(context, user) {
      context.commit("SET_LOGGED_IN", user !== null);
      if (user) {
        context.commit("SET_USER", {
          displayName: user.displayName,
          email: user.email,
        });
      } else {
        context.commit("SET_USER", null);
      }
    },
  },

  getters: {
    user(state) {
      return state.user;
    },
    commuityRecipe(state) {
      return state.commuityRecipe;
    },
  },
  modules: {},
});
