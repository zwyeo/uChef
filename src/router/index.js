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
  let authenticatedUser = null;
  const requriesAuth = to.matched.some((record) => record.meta.requriesAuth);
  // will re-directs user if access non-user page
  if (requriesAuth && !authenticatedUser) next("login");
  else next();
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requriesAuth)) {
//     if (getAuth().currentUser) {
//       next();
//     } else {
//       alert("you dont have access");
//       next("/");
//     }
//   }
// });

export default router;
