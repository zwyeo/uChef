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
                  <option
                    v-for="category in $store.state.foodCategories"
                    :value="category"
                  >
                    {{ category }}
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label for="newRecipeInstructions">Instructions (Steps)</label>
              </td>
              <td>
                <div id="newRecipeInstructions">
                  <input v-for="i in noOfSteps" class="form-control" type="text" :placeholder="i">
                  <button class="btn btn-small btn-primary" @click="this.noOfSteps++">Add Step</button>
                </div>
              </td>
            </tr>
            <tr>
              <td><label for="newRecipeIngredients">Ingredients Required</label></td>
              <td>
                <div>
                  <table id="newRecipeIngredients">
                    <tr><td>Ingredient</td><td>Amount</td></tr>
                    <tr v-for="i in noOfIngredients">
                      <td><input class="form-control ingredient" type="text" placeholder="e.g. salt"></td>
                      <td><input class="form-control measure" type="text" placeholder="e.g. 1 tbsp"></td>
                    </tr>
                  </table>
                  <button class="btn btn-small btn-primary" @click="this.noOfIngredients++">Add Ingredient</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Upload Image</td>
              <td>
                <div v-if="newRecipeImagePreview != null">
                  Preview:
                  <img
                    :src="newRecipeImagePreview"
                    height="268"
                    width="356"
                    alt=""
                  />
                </div>
                <input
                  type="file"
                  class="form-control"
                  @change="previewImage"
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
import axios from "axios";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { uuidv4 } from "@firebase/util";

export default {
  name: "AddNewRecipe",
  data() {
    return {
      newRecipeId: "",
      newRecipeName: "",
      newRecipeCategory: "Beef",
      noOfSteps: 1,
      newRecipeInstructions: "",
      newRecipeIngredients: [],
      newRecipeIngredientsMeasure: [],
      noOfIngredients: 1,

      newRecipeImage: null,
      newRecipeImagePreview: null,
      newRecipeImagePath: null,

      error: null
    };
  },
  methods: {
    getRecipeInstructions() {
      let recipeInstructions = "";
      let instructions = document.getElementById("newRecipeInstructions");
      let steps = instructions.getElementsByTagName("input");
      for (let i of steps) {
        recipeInstructions += i.value + "\r\n";
      }
      console.log(recipeInstructions);
      this.newRecipeInstructions = recipeInstructions;
    },
    getRecipeIngredients() {
      let recipeIngredients = [];
      let recipeIngredientsMeasure = [];
      let tempRecipeIngredients = [];
      let tempRecipeIngredientsMeasure = [];
      let table = document.getElementById("newRecipeIngredients");
      let ingredients = table.getElementsByTagName("tr");
      for (let ingredient of ingredients) {
        let item = ingredient.getElementsByTagName("td")[0];
        let count = ingredient.getElementsByTagName("td")[1];
        // console.log(item);
        // console.log(count);
        tempRecipeIngredients.push(item);
        tempRecipeIngredientsMeasure.push(count);
      }
      tempRecipeIngredients.shift();
      tempRecipeIngredientsMeasure.shift();

      for (let i=0; i<this.noOfIngredients; i++) {
        let ingredient = tempRecipeIngredients[i].getElementsByTagName("input")[0].value;
        let measure = tempRecipeIngredientsMeasure[i].getElementsByTagName("input")[0].value;

        recipeIngredients.push(ingredient);
        recipeIngredientsMeasure.push(measure);
      }
      // console.log(recipeIngredients);
      // console.log(recipeIngredientsMeasure);

      this.newRecipeIngredients = recipeIngredients;
      this.newRecipeIngredientsMeasure = recipeIngredientsMeasure;
    },
    previewImage(event) {
      this.newRecipeImage = event.target.files[0];
      console.log(this.newRecipeImage);
      this.newRecipeImagePreview = URL.createObjectURL(this.newRecipeImage);
    },
    createNewRecipe() {
      const storage = getStorage();
      if (this.newRecipeImage != null) {
        var storageRef = ref(storage, `${this.$store.state.userId}/${this.newRecipeImage.name}`);

        // Upload function for uploading image into firebase cloud storage
        // Note: anything that requires the data from inside this function needs to be written inside, as this is an async request
        uploadBytes(storageRef, this.newRecipeImage).then((snapshot) => {
          console.log('Uploaded image successfully!');
          getDownloadURL(storageRef).then(downloadURL => {
            this.newRecipeImagePath = downloadURL;
            console.log("Download URL:" + this.newRecipeImagePath);

            this.newRecipeId = uuidv4();
            console.log(this.newRecipeId);
            this.getRecipeInstructions();
            this.getRecipeIngredients();

            // console.log(this.newRecipeIngredients);
            // console.log(this.newRecipeIngredientsMeasure);

            let simpleFoodTemplate = {
              id: this.newRecipeId,
              title: this.newRecipeName,
              image: this.newRecipeImagePath
            }

            let fullFoodTemplate = {
              id: this.newRecipeId,
              title: this.newRecipeName,
              image: this.newRecipeImagePath,
              category: this.newRecipeCategory,
              instructions: this.newRecipeInstructions,
              
              "strIngredient1": "",
              "strIngredient2": "",
              "strIngredient3": "",
              "strIngredient4": "",
              "strIngredient5": "",
              "strIngredient6": "",
              "strIngredient7": "",
              "strIngredient8": "",
              "strIngredient9": "",
              "strIngredient10": "",
              "strIngredient11": "",
              "strIngredient12": "",
              "strIngredient13": "",
              "strIngredient14": "",
              "strIngredient15": "",
              "strIngredient16": "",
              "strIngredient17": "",
              "strIngredient18": "",
              "strIngredient19": "",
              "strIngredient20": "",

              "strMeasure1": "",
              "strMeasure2": "",
              "strMeasure3": "",
              "strMeasure4": "",
              "strMeasure5": "",
              "strMeasure6": "",
              "strMeasure7": "",
              "strMeasure8": "",
              "strMeasure9": "",
              "strMeasure10": "",
              "strMeasure11": "",
              "strMeasure12": "",
              "strMeasure13": "",
              "strMeasure14": "",
              "strMeasure15": "",
              "strMeasure16": "",
              "strMeasure17": "",
              "strMeasure18": "",
              "strMeasure19": "",
              "strMeasure20": ""
            }

            for (let i=1; i<this.newRecipeIngredients.length + 1; i++) {
              let ingredient = "strIngredient" + i
              let measure = "strMeasure" + i
              fullFoodTemplate[ingredient] = this.newRecipeIngredients[i-1]
              fullFoodTemplate[measure] = this.newRecipeIngredientsMeasure[i-1]
            }

            axios.post(`https://wad-proj-22042-default-rtdb.asia-southeast1.firebasedatabase.app/users/${this.$store.state.userId}/recipes.json`, simpleFoodTemplate);
            axios.post(`https://wad-proj-22042-default-rtdb.asia-southeast1.firebasedatabase.app/community.json`, fullFoodTemplate);

          // clear inputs
          this.newRecipeId = "";
          this.newRecipeName = "";
          this.newRecipeCategory = "Beef";
          this.noOfSteps = 1;
          this.newRecipeInstructions = "";
          this.newRecipeIngredients = [];
          this.newRecipeIngredientsMeasure = [];
          this.noOfIngredients = 1;

          this.newRecipeImage = null;
          this.newRecipeImagePreview = null;
          this.newRecipeImagePath = null;
          
          this.error = null;
          })
        })
      } else {
        this.error = "Please upload an image!";
        console.log(this.error);
        alert(this.error);
      }
    }
  }
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
