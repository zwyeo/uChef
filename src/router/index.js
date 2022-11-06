import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MyRecipes from "../views/MyRecipes.vue";
import MyBookmarks from "../views/MyBookmarks.vue";
import RecipeDetails from "../views/RecipeDetails.vue";
import SearchRecipeResults from "../views/SearchRecipeResults.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/my-recipes",
    name: "my-recipes",
    component: MyRecipes,
  },
  {
    path: "/my-bookmarks",
    name: "my-bookmarks",
    component: MyBookmarks,
  },
  {
    path: "/recipe-details/:id",
    name: "recipe-details",
    component: RecipeDetails,
    props: true,
  },
  {
    path: "/search-recipe-results",
    name: "search-recipe-results",
    component: SearchRecipeResults,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
