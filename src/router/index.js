import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MyRecipes from "../views/MyRecipes.vue";
import MyBookmarks from "../views/MyBookmarks.vue";
import RecipeDetails from "../views/RecipeDetails.vue";
import SearchRecipeResults from "../views/SearchRecipeResults.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import CreateStore from "../store";

import * as firebase from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
    meta: { requriesAuth: true },
  },
  {
    path: "/my-bookmarks",
    name: "my-bookmarks",
    component: MyBookmarks,
    meta: { requriesAuth: true },
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

// NAVIGATION GAURDS
router.beforeEach((to, from, next) => {
  const requriesAuth = to.matched.some((record) => record.meta.requriesAuth);

  const isAuthenthicated = getAuth().currentUser;
  if (requriesAuth && !isAuthenthicated) {
    alert("Sign in first!");
    next("/login");
  } else {
    next();
  }
});

export default router;
