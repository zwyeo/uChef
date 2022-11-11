<template>
  <!-- ##### Header Area Start ##### -->
  <header class="header-area">
    <!-- Top Header Area -->

    <!-- Navbar Toggler -->
    <div class="classy-navbar-toggler">
      <span class="navbarToggler"><span></span><span></span><span></span></span>
    </div>

    <!-- Search Wrapper -->
    <div class="search-wrapper" :class="{ on: isSearchExpand }">
      <!-- Close Btn -->
      <div class="close-btn" @click="closeSearchBox">
        <i class="fa fa-times" aria-hidden="true"></i>
      </div>

      <div class="container">
        <!-- filter buttons -->

        <select
          class="form-select w-25 float-end"
          aria-label="Default select example"
          id="filter"
          v-model="$store.state.selectedCategory"
          @change="$store.dispatch('filterCategory')"
        >
          <option v-for="cat of $store.state.foodCategories">{{ cat }}</option>
        </select>
        <label for="filter" class="float-end pe-2 pt-2">Filter By:</label>
        <div
          class="d-flex text-center rounded-pill w-50 pe-2 border border-secondary px-2 mt-2"
        >
          <div class="pt-2 icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search mb-1"
              viewBox="0 0 16 16"
              @click="$store.dispatch('getRecipes')"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              ></path>
            </svg>
          </div>
          <router-link :to="{ name: 'home', hash: '#popular-recipe' }">
            <input
              type="text"
              :placeholder="$store.state.searchDesc"
              class="text-light w-5 form-control rounded-pill input border-0"
              v-model="searchQuery"
              style="background-color: #40ba37"
              @keyup.enter="onSearch"
              @change="$store.dispatch('showPreviews'), closeSearchBox"
            />
          </router-link>
        </div>
      </div>
    </div>

    <!-- Navbar Area -->
    <div class="delicious-main-menu mt-5">
      <div class="classy-nav-container breakpoint-off">
        <div class="container">
          <!-- Menu -->
          <nav class="classy-navbar justify-content-between" id="deliciousNav">
            <!-- Logo -->
            <router-link to="/"
              ><a class="nav-brand"
                ><img src="../assets/logo.png" alt="uChef" /></a
            ></router-link>

            <!-- Navbar Toggler -->
            <div class="classy-navbar-toggler">
              <span class="navbarToggler"
                ><span></span><span></span><span></span
              ></span>
            </div>

            <!-- Menu -->
            <div class="classy-menu">
              <!-- close btn -->
              <div class="classycloseIcon">
                <div class="cross-wrap">
                  <span class="top"></span><span class="bottom"></span>
                </div>
              </div>

              <!-- Nav Start -->
              <div class="classynav">
                <ul>
                  <li class="active">
                    <router-link to="/"> Home </router-link>
                  </li>

                  <li>
                    <router-link to="/my-recipes">My Recipes</router-link>
                  </li>
                  <li>
                    <router-link to="/my-bookmarks">My Bookmarks</router-link>
                  </li>
                  <li style="cursor: pointer" @click="logOut">
                    LOG OUT (FOR TESTING)
                  </li>
                </ul>

                <!-- Newsletter Form -->
                <div class="search-btn" @click="openSearchBox">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </div>

                <!-- Profile -->
                <div class="search-btn">
                  <i class="fa fa-user" aria-hidden="true"></i>
                </div>
              </div>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown button
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </div>

              <!-- Nav End -->
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import axios from "axios";
export default {
  name: "NavBar",
  components: {},
  props: [],
  data() {
    return {
      isSearchExpand: false,
    };
  },

  computed: {
    // searchQuery is different from the usual computed because it required getter and setter
    searchQuery: {
      get() {
        return this.$store.state.queryParams;
      },
      // newValue is the user's search result
      set(newValue) {
        // console.log(newValue);
        this.$store.dispatch("setQueryParam", newValue);
      },
    },
  },
  methods: {
    // expand the search functionality when search icon is pressed
    openSearchBox() {
      this.isSearchExpand = true;
    },
    closeSearchBox() {
      this.isSearchExpand = false;
    },
    logOut() {
      // this.$store.state.userId = "";
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.$store.state.userId = null;
          alert("You have logged out!");
          this.$router.push("/");
        })
        .catch((err) => console.log(err));
    },
    onSearch() {
      this.$store.dispatch("getRecipes");
      this.closeSearchBox();
    },
  },
  created() {},
};
</script>

<style scoped>
@import url(../css/font-awesome.min.css);
@import url(../css/classy-nav.min.css);

a {
  text-decoration: none;
}

.logoSize {
  width: 50px;
  height: 50px;
}
.navbar {
  position: sticky;
  z-index: 50;
}

.pill {
  border: 1px solid gray;
  width: 75px;
  height: 25px;
}

.cookbook {
  cursor: pointer;
}

.menu-dropdown {
  cursor: pointer;
}

.input:focus {
  box-shadow: none;
  text-decoration: none;
}
/* Start */
.search-wrapper {
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 200;
  top: -80px;
  left: 0;
  background-color: #40ba37;
  -webkit-transition-duration: 700ms;
  transition-duration: 700ms;
}
.search-wrapper form {
  position: relative;
  z-index: 1;
}
.search-wrapper form input {
  width: 90%;
  height: 40px;
  border: 2px solid #ffffff;
  font-size: 12px;
  font-style: italic;
  padding: 0 20px;
  margin: 15px 0;
}
@media only screen and (max-width: 767px) {
  .search-wrapper form input {
    width: 80%;
  }
}
.search-wrapper form button {
  position: absolute;
  width: 60px;
  height: 40px;
  z-index: 1;
  top: 15px;
  border: none;
  right: 10%;
  cursor: pointer;
  outline: none;
}
@media only screen and (max-width: 767px) {
  .search-wrapper form button {
    right: 20%;
  }
}
.search-wrapper .close-btn {
  position: absolute;
  width: 70px;
  height: 100%;
  background-color: #000000;
  line-height: 50px;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  line-height: 70px;
  font-size: 12px;
  right: 0;
  top: 0;
  z-index: 100;
}
.search-wrapper.on {
  top: 0;
}

.header-area {
  position: relative;
  z-index: 100;
  width: 100%;
}
.header-area .top-header-area {
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  border-bottom: 1px solid #dddee9;
}
@media only screen and (max-width: 767px) {
  .header-area .top-header-area {
    height: 70px;
  }
}

.header-area .delicious-main-menu {
  position: relative;
  width: 100%;
  z-index: 100;
  height: 145px;
}
@media only screen and (max-width: 767px) {
  .header-area .delicious-main-menu {
    height: 80px;
  }
}
.header-area .delicious-main-menu .classy-nav-container {
  background-color: transparent;
}
.header-area .delicious-main-menu .classy-navbar {
  height: 145px;
  padding: 0;
}
@media only screen and (max-width: 767px) {
  .header-area .delicious-main-menu .classy-navbar {
    height: 80px;
  }
}
.header-area .delicious-main-menu .classy-navbar .classynav ul li a {
  font-weight: 600;
}
.header-area .delicious-main-menu .classy-navbar .classynav ul li a:hover,
.header-area .delicious-main-menu .classy-navbar .classynav ul li a:focus {
  font-weight: 600;
}
.header-area .delicious-main-menu .classy-navbar .classynav > ul > li > a {
  text-transform: uppercase;
  padding: 12px 18px 11px;
  background-color: transparent;
  border-bottom: 3px solid transparent;
  line-height: 1;
  color: #474747;
  font-weight: 600;
}
.header-area .delicious-main-menu .classy-navbar .classynav > ul > li > a:hover,
.header-area
  .delicious-main-menu
  .classy-navbar
  .classynav
  > ul
  > li
  > a:focus {
  font-size: 14px;
  color: #ffffff;
  background-color: #40ba37;
  border-bottom: 3px solid #1c8314;
}
.header-area
  .delicious-main-menu
  .classy-navbar
  .classynav
  > ul
  > li
  > a:hover::after,
.header-area
  .delicious-main-menu
  .classy-navbar
  .classynav
  > ul
  > li
  > a:focus::after {
  color: #ffffff;
}
.header-area
  .delicious-main-menu
  .classy-navbar
  .classynav
  > ul
  > li.active
  > a {
  color: #ffffff;
  background-color: #40ba37;
  border-bottom: 3px solid #1c8314;
}
.header-area
  .delicious-main-menu
  .classy-navbar
  .classynav
  > ul
  > li.active
  > a::after {
  color: #ffffff;
}
.header-area .delicious-main-menu .classynav .search-btn {
  color: #b6b6b6;
  margin-left: 150px;
  cursor: pointer;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
}
.header-area .delicious-main-menu .classynav .search-btn i {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
}
.header-area .delicious-main-menu .classynav .search-btn:hover i,
.header-area .delicious-main-menu .classynav .search-btn:focus i {
  color: #40ba37;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .header-area .delicious-main-menu .classynav .search-btn {
    margin-left: 50px;
    margin-bottom: 20px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header-area .delicious-main-menu .classynav .search-btn {
    margin-left: 30px;
    margin-top: px;
  }
}
@media only screen and (max-width: 767px) {
  .header-area .delicious-main-menu .classynav .search-btn {
    margin-left: 30px;
    margin-top: 30px;
  }
}
@media only screen and (max-width: 767px) {
  .header-area .nav-brand img {
    max-width: 90px;
  }
}
.nav-brand {
  width: 90px;
}
</style>
