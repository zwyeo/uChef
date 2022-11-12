<template>
    <div>
        <button class="btn btn-danger"  data-bs-toggle="modal" data-bs-target="#warning">Delete</button>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="warning" tabindex="-1" aria-labelledby="warningLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="warningLabel">Warning!</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Are you sure you want to delete this recipe?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="removeRecipe">Yes</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { getDatabase, ref, get, remove } from "firebase/database";

    export default {
        name: "RemoveRecipe",
        data() {
            return {}
        },
        props: ["recipe-id"],
        methods: {
            removeRecipe() {
                let userId = this.$store.state.userId;
                // console.log("remove recipe");
                // console.log(this.recipeId);

                const db = getDatabase();
                const recipesRef = ref(db, `community`);
                const usersRef = ref(db, `users/${userId}/recipes`);
                // console.log(recipesRef);
                // console.log(usersRef);

                get(recipesRef)
                .then((snapshot) => {
                    let data = snapshot.val();
                    // console.log(data);
                    for (let i in data) {
                        // console.log(data[i]);
                        if (data[i].id == this.recipeId) {
                            let deleteRef = ref(db, `community/${i}`);
                            remove(deleteRef).then(() => {
                                console.log("Location removed");
                            })
                        }
                    }
                })
                .catch((error) => {
                    console.log(error.message);
                })

                get(usersRef)
                .then((snapshot) => {
                    let data = snapshot.val();
                    for (let i in data) {
                        // console.log(data[i]);
                        if (data[i].id == this.recipeId) {
                            let deleteRef = ref(db, `users/${userId}/recipes/${i}`);
                            remove(deleteRef).then(() => {
                                console.log("Location removed");
                            })
                        }
                    }
                })
                .catch((error) => {
                    console.log(error.message);
                })
                
            }
        }
    }
</script>

<style></style>