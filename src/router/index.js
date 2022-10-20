import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MyCookbook from "../views/MyCookbook.vue";
import RecipeDetails from "../views/RecipeDetails.vue";
import SearchRecipeResults from "../views/SearchRecipeResults.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/my-cookbook",
    name: "my-cookbook",
    component: MyCookbook,
  },
  {
    path: "/recipe-details",
    name: "recipe-details",
    component: RecipeDetails,
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
