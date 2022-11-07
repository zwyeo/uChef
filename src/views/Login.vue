<template>
  <div class="w-25 mx-auto mt-5">
    <!-- Pills navs -->
    <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
      <li class="nav-item" role="presentation">
        <router-link to="/login">
          <a
            class="nav-link active"
            id="tab-login"
            data-mdb-toggle="pill"
            role="tab"
            aria-controls="pills-login"
            aria-selected="true"
            >Login</a
          >
        </router-link>
      </li>
      <li class="nav-item" role="presentation">
        <router-link to="/register">
          <a
            class="nav-link"
            id="tab-register"
            data-mdb-toggle="pill"
            role="tab"
            aria-controls="pills-register"
            aria-selected="false"
            >Sign Up</a
          >
        </router-link>
      </li>
    </ul>
    <!-- Pills navs -->

    <!-- Pills content -->
    <div class="tab-content">
      <div
        class="tab-pane fade show active"
        id="pills-login"
        role="tabpanel"
        aria-labelledby="tab-login"
      >
        <form>
          <!-- <div class="text-center mb-3">
            <p>Sign in with:</p>
            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-google"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-github"></i>
            </button>
          </div>

          <p class="text-center">or:</p> -->

          <!-- Email input -->
          <div class="form-outline mb-4">
            <input
              type="email"
              id="loginName"
              class="form-control"
              placeholder="Email"
              v-model="email"
            />
            <!-- <label class="form-label" for="loginName">Email or username</label> -->
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <input
              type="password"
              id="loginPassword"
              class="form-control"
              placeholder="Password"
              v-model="password"
            />
            <div class="text-center text-danger" v-if="errorMsg">
              {{ errorMsg }}
            </div>
          </div>

          <div class="row mb-4">
            <div class="col-md-6 d-flex justify-content-center">
              <!-- Checkbox -->
              <div class="form-check mb-3 mb-md-0">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="loginCheck"
                  checked
                />
                <label class="form-check-label" for="loginCheck">
                  Remember me
                </label>
              </div>
            </div>

            <div class="col-md-6 d-flex justify-content-center">
              <!-- Simple link -->
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <!-- Submit button -->
          <button
            v-if="!isLoading"
            @click="authethicate()"
            type="submit"
            class="btn btn-primary btn-block mb-4"
          >
            Sign in
          </button>
          <button
            v-if="isLoading"
            @click="authethicate()"
            type="submit"
            class="btn btn-primary btn-block mb-4"
          >
            <span class="spinner-border spinner-border-sm btn-spin"></span>
            Authethicating...
          </button>

          <!-- Register buttons -->
          <div class="text-center">
            <p>Not a member? <a href="#!">Register</a></p>
          </div>
        </form>
      </div>
      <div
        class="tab-pane fade"
        id="pills-register"
        role="tabpanel"
        aria-labelledby="tab-register"
      ></div>
    </div>
  </div>
  <!-- Pills content -->
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: "testuser@gmail.com",
      password: "test123",
      errorMsg: "",
      isLoading: false,
    };
  },
  methods: {
    authethicate() {
      event.preventDefault();

      // sign in with email and password
      const auth = getAuth();
      this.isLoading = true;
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          this.$router.push("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          switch (errorCode) {
            case "auth/invalid-email":
              this.errorMsg = "Invalid email!";
              break;
            case "auth/user-not-found":
              this.errorMsg = "No account with that email was found!";
              break;
            case "auth/wrong-password":
              this.errorMsg = "Incorrect password!";
              break;
            default:
              this.errorMsg = "Email or password was incorrect";
              break;
          }
        });
    },
  },
};
</script>

<style scoped>
.btn-spin {
  padding: relative;
  top: -3px;
}
</style>
