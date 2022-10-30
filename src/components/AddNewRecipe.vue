<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary btn-circle btn-xl" data-bs-toggle="modal" data-bs-target="#addRecipe"
    style="
        padding: 0.1%;
        position: fixed;
        bottom: 20px;
        right: 20px;
    ">
    +
    </button>

    <!-- Modal -->
    <div class="modal fade" id="addRecipe" tabindex="-1" aria-labelledby="addRecipeLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addRecipeLabel">Create New Recipe</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <table class="table">
                        <tr>
                            <td><label for="newRecipeName">Recipe Name</label></td>
                            <td><input type="text" id="newRecipeName" class="form-control" placeholder="Name" v-model="newRecipeName"></td>
                        </tr>
                        <tr>
                            <td><label for="newRecipeDescription">Description</label></td>
                            <td><textarea name="newRecipeDescription" id="newRecipeDescription" cols="30" rows="10" class="form-control" placeholder="Description"></textarea></td>
                        </tr>
                        <tr>
                            <td>Preparation Time (mins)</td>
                            <td><input type="number" name="newRecipePrepTime" id="newRecipePrepTime" class="form-control" placeholder="Prep Time" v-model="newRecipePrepTime"></td>
                        </tr>
                        <tr>
                            <td>Cooking Time (mins)</td>
                            <td><input type="number" name="newRecipeCookTime" id="newRecipeCookTime" class="form-control" placeholder="Cook Time" v-model="newRecipeCookTime"></td>
                        </tr>
                        <tr>
                            <td>Yields</td>
                            <td><input type="number" name="newRecipeYields" id="newRecipeYields" class="form-control" placeholder="Yields" v-model="newRecipeYields"></td>
                        </tr>
                        <tr>
                            <!-- Okay I have absolutely no idea how to v-model this-->
                            <td>Upload Image</td>
                            <td><input type="file" name="newRecipeImage" id="newRecipeImage" class="form-control"></td>
                        </tr>
                    </table>
                    <div class='container-fluid'>
                        <div class='row'>
                            <div class='col-12'>
                                
                            </div> <!-- col -->
                            <div class='col-8'>
                                
                            </div> <!-- col -->
                        </div> <!-- row -->
                    </div> <!-- container -->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddNewRecipe",
        data() {
            return {
                newRecipeName: "",
                newRecipeDescription: "",
                newRecipePrepTime: 0,
                newRecipeCookTime: 0,
                newRecipeYields: 0
            }
        },
        methods: {
            createNewRecipe() {

            }
        }
    }
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