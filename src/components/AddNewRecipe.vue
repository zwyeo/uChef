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
              <td><label for="newRecipeCategory">Category</label></td>
              <td>
                <select
                  id="newRecipeCategory"
                  class="form-control"
                  v-model="newRecipeCategory"
                >
                  <option v-for="category in $store.state.foodCategories" :value="category">{{ category }}</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label for="newRecipeInstructions">Instructions (Steps)</label></td>
              <td>
                <div id="newRecipeInstructions">
                  <input v-for="i in noOfSteps" class="form-control steps" type="text" :id="i" :placeholder="i">
                  <button class="btn btn-small btn-primary" @click="this.noOfSteps++">Add Step</button>
                </div>
              </td>
            </tr>
            <tr>
              <!-- Okay I have absolutely no idea how to v-model this-->
              <td>Upload Image</td>
              <td>
                <div v-if="newRecipeImagePreview != null">
                    Preview:
                    <img :src="newRecipeImagePreview" height="268" width="356" alt="">
                </div>
                <input type="file" class="form-control" @change="previewImage">
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
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
  name: "AddNewRecipe",
  data() {
    return {
      newRecipeName: "",
      newRecipeCategory: "Beef",
      noOfSteps: 1,
      newRecipeInstructions: [],
      newRecipePrepTime: 0,
      newRecipeCookTime: 0,
      newRecipeYields: 0,

      newRecipeImage: null,
      newRecipeImagePreview: null,
      newRecipeImagePath: null
    };
  },
  methods: {
    previewImage(event) {
      this.newRecipeImage = event.target.files[0]
      console.log(this.newRecipeImage)
      this.newRecipeImagePreview = URL.createObjectURL(this.newRecipeImage)
    },

    createNewRecipe() {

      // Get storage from firebase and create reference child (naming needs work)
      const storage = getStorage();
      const storageRef = ref(storage, `${this.$store.state.userId}/${this.newRecipeImage.name}`);

      // Upload function for uploading image into firebase cloud storage
      // Note: anything that requires the data from inside this function needs to be written inside, as this is an async request
      uploadBytes(storageRef, this.newRecipeImage).then((snapshot) => {
        console.log('Uploaded image successfully!');
        getDownloadURL(storageRef).then(downloadURL => {
          this.newRecipeImagePath = downloadURL
          console.log("Download URL:" + this.newRecipeImagePath)

          // this posts the below data to the firebase realtime database
          axios.post(
            `https://wad-proj-22042-default-rtdb.asia-southeast1.firebasedatabase.app/community/${this.$store.state.userId}/recipes.json`,
            {
              name: this.newRecipeName,
              description: this.newRecipeDescription,
              prepTime: this.newRecipePrepTime,
              cookTime: this.newRecipeCookTime,
              yields: this.newRecipeYields,
              imgPath: this.newRecipeImagePath
            }
          );

          // clear inputs
          this.newRecipeName = "";
          this.newRecipeDescription = "";
          this.newRecipePrepTime = 0;
          this.newRecipeCookTime = 0;
          this.newRecipeYields = 0;
          this.newRecipeImage = null;
          this.newRecipeImagePreview = null;
          this.newRecipeImagePath = null;
        });
      });
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
