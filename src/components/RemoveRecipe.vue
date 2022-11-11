<template>
    <div>
        <button class="btn btn-sm btn-danger" @click="removeRecipe">Delete Recipe</button>
    </div>
</template>

<script>
    import { getDatabase, ref, remove } from "firebase/database";

    export default {
        name: "RemoveRecipe",
        data() {
            return {}
        },
        methods: {
            removeRecipe() {
                console.log("remove recipe")
            }
        }
    }
</script>

<style></style>