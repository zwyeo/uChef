<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary btn-circle btn-xl"
    data-bs-toggle="modal"
    data-bs-target="#addRecipe"
    style="padding: 0.1%; position: fixed; bottom: 20px; right: 20px"
  >
    +
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="addRecipe"
    tabindex="-1"
    aria-labelledby="addRecipeLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addRecipeLabel">Create New Recipe</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <table class="table">
            <tr>
              <td><label for="newRecipeName">Recipe Name</label></td>
              <td>
                <input
                  type="text"
                  id="newRecipeName"
                  class="form-control"
                  placeholder="Name"
                  v-model="newRecipeName"
                />
              </td>
            </tr>
            <tr>
              <td><label for="newRecipeDescription">Description</label></td>
              <td>
                <textarea
                  name="newRecipeDescription"
                  id="newRecipeDescription"
                  cols="30"
                  rows="10"
                  class="form-control"
                  placeholder="Description"
                  v-model="newRecipeDescription"
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>Preparation Time (mins)</td>
              <td>
                <input
                  type="number"
                  name="newRecipePrepTime"
                  id="newRecipePrepTime"
                  class="form-control"
                  placeholder="Prep Time"
                  v-model="newRecipePrepTime"
                />
              </td>
            </tr>
            <tr>
              <td>Cooking Time (mins)</td>
              <td>
                <input
                  type="number"
                  name="newRecipeCookTime"
                  id="newRecipeCookTime"
                  class="form-control"
                  placeholder="Cook Time"
                  v-model="newRecipeCookTime"
                />
              </td>
            </tr>
            <tr>
              <td>Yields</td>
              <td>
                <input
                  type="number"
                  name="newRecipeYields"
                  id="newRecipeYields"
                  class="form-control"
                  placeholder="Yields"
                  v-model="newRecipeYields"
                />
              </td>
            </tr>
            <tr>
              <!-- Okay I have absolutely no idea how to v-model this-->
              <td>Upload Image</td>
              <td>
                <input
                  type="file"
                  name="newRecipeImage"
                  id="newRecipeImage"
                  class="form-control"
                />
              </td>
            </tr>
          </table>
          <div class="container-fluid">
            <div class="row">
              <div class="col-12"></div>
              <!-- col -->
              <div class="col-8"></div>
              <!-- col -->
            </div>
            <!-- row -->
          </div>
          <!-- container -->
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button
            type="button"
            class="btn btn-primary"
            v-on:click="createNewRecipe()"
            data-bs-dismiss="modal"
          >
            Create Recipe
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { createRecipe } from "@/firebase"
// import { reactive } from "vue"
import axios from "axios";

export default {
  name: "AddNewRecipe",
  data() {
    return {
      newRecipeName: "",
      newRecipeDescription: "",
      newRecipePrepTime: 0,
      newRecipeCookTime: 0,
      newRecipeYields: 0,
    };
  },
  methods: {
    createNewRecipe() {
      // This will post the user data to firebase
      axios.post(
        "https://wad-proj-22042-default-rtdb.asia-southeast1.firebasedatabase.app/{user}/myrecipe.json",
        {
          Name: this.newRecipeName,
          Description: this.newRecipeDescription,
          prepTime: this.newRecipePrepTime,
          cookTime: this.newRecipeCookTime,
          yields: this.newRecipeYields,
        }
      );

      // clear inputs
      this.newRecipeName = "";
      this.newRecipeDescription = "";
      this.newRecipePrepTime = 0;
      this.newRecipeCookTime = 0;
      this.newRecipeYields = 0;
    },
  },
};
</script>

<style>
.btn-circle {
  width: 30px;
  height: 30px;
  padding: 6px 0px;
  border-radius: 15px;
  text-align: center;
  font-size: 12px;
  line-height: 1.42857;
}

.btn-circle.btn-xl {
  width: 70px;
  height: 70px;
  padding: 10px 16px;
  border-radius: 35px;
  font-size: 24px;
  line-height: 1.33;
}
</style>
