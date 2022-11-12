<template>
    <div>
        <button class="btn btn-primary btn-sm" @click="updateRecipe">Edit Recipe</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        props: ["recipe-id"],
        methods: {
            updateRecipe() {
                console.log("update recipe");
                console.log(this.recipeId);
            }
        }
    }
</script>

<style></style>