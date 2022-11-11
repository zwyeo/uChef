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
    starrating: "0",
    activerecipeid: "",
    reviewsubject: "",
    reviewcomments: "",
    reviewlist: [],
    // To track user session
    userId: "",
    userName: "",
    // To get the current route name
    routeName: "",
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
    set_userName(state, data) {
      state.userName = data;
    },
    setReviews(state, data) {
      state.reviewlist = data;
    },
    setRouteName(state, data) {
      state.routeName = data;
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
      this.state.starrating = "0";
      // this.state.dispatch("getReviews");
      // console.log(this.state.reviewlist);
      // location.reload(); //to reload page
      // window.scrollTo(0, document.querySelector("#reviewSection").scrollHeight);
    },
    getReviews({ commit }) {
      //trying to use axios call to refresh page
      //review card population
      let review_list = [];
      let rurl = `https://wad-proj-22042-default-rtdb.asia-southeast1.firebasedatabase.app/recipes/${this.id}/reviews.json`;
      axios.get(rurl).then((response) => {
        // console.log(response.data);
        let reviewsObj = response.data;
        for (let review in reviewsObj) {
          review_list.push(reviewsObj[review]);
        }
        review_list = review_list.reverse();
        commit("setReviews", review_list);
      });
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
