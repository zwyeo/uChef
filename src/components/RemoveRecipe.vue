<template>
  <div>
    <button
      class="btn btn-danger"
      data-bs-toggle="modal"
      data-bs-target="#deleteModal"
    >
      Delete
    </button>
  </div>

  <div
    class="modal fade"
    id="deleteModal"
    tabindex="-1"
    aria-labelledby="ModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Are you sure you want to delete?
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Deletion of recipe cannot be undone! Please think carefully! Press
          comfirm to delete.
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>

          <button
            type="button"
            class="btn btn-primary"
            @click="removeRecipe"
            data-bs-dismiss="modal"
          >
            Confirm
          </button>
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
    return {};
  },
  props: ["recipe-id"],
  methods: {
    warning() {
      let confirmation = prompt(
        "Are you sure you want to delete this recipe? (Y/N)\nThis action cannot be undone.\nPlease type 'Y' to confirm."
      );
      if (confirmation == "Y") {
        this.removeRecipe();
      }
    },
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
                // console.log("Location removed");
                get(usersRef)
                  .then((snapshot) => {
                    let data = snapshot.val();
                    for (let i in data) {
                      // console.log(data[i]);
                      if (data[i].id == this.recipeId) {
                        let deleteRef = ref(db, `users/${userId}/recipes/${i}`);
                        remove(deleteRef).then(() => {
                          // console.log("Location removed");
                          window.location.href = "/my-recipes";
                        });
                      }
                    }
                  })
                  .catch((error) => {
                    console.log(error.message);
                  });
              });
            }
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
  created() {},
};
</script>

<style></style>
