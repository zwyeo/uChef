<template>
  <div class="d-flex justify-content-between sticky-lg-top p-3 bg-white">
    <!-- LEFT SECTION -->
    <!-- Logo -->
    <div class="col-lg-4">
      <router-link to="/">
        <img
          class="img-fluid logoSize mt-3"
          src="../assets/uchef-logo.png"
          alt="uchef-logo"
        />
      </router-link>
    </div>

    <!-- MIDDLE SECTION -->
    <!-- Search Bar -->
    <div class="col-lg-4">
      <search-bar></search-bar>
    </div>

    <!-- RIGHT SECTION -->
    <div class="col-auto d-flex">
      <router-link to="/my-cookbook">
        <div class="d-flex align-items-center cookbook">
          <!-- My Cookbook -->
          <p class="pt-3">My Cookbook</p>
          <!-- book icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-book ms-2"
            viewBox="0 0 16 16"
          >
            <path
              d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
            />
          </svg>
        </div>
      </router-link>

      <div
        class="d-flex mx-5 align-items-center justify-content-center bg-secondary rounded-pill m-3"
        style="width: 100px; height: 30px"
      >
        <!-- Profile -->
        <div class="dropdown w-25">
          <a
            class="btn btn-secondary"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div class="d-flex">
              <!-- menu icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-list menu-dropdown"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </div>
            <!-- User icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
              />
            </svg>
          </a>

          <ul class="dropdown-menu">
            <!-- CURRENTLY DISPLAY LOGIN LOGOUT SIGNUP -->
            <router-link to="/register"
              ><li><a class="dropdown-item">Register</a></li></router-link
            >
            <router-link to="/login"
              ><li><a class="dropdown-item">Login</a></li></router-link
            >

            <li><a class="dropdown-item">Log Out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";

export default {
  name: "NavBar",
  components: {
    SearchBar,
  },
  props: [],
  computed() {},
  methods: {},
};
</script>

<style scoped>
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
</style>
