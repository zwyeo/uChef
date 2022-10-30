// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { onUnmounted } from "vue";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkXei5E9VqqBFKV9XEZDwexQqNJetca8o",
  authDomain: "uchef-7e389.firebaseapp.com",
  databaseURL: "https://uchef-7e389-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "uchef-7e389",
  storageBucket: "uchef-7e389.appspot.com",
  messagingSenderId: "1053108574846",
  appId: "1:1053108574846:web:9657b3057f0d410f16d62f",
  measurementId: "G-2R7GPWTZBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = app.firestore();
const usersCollection = db.collections("users");
const recipesCollection = db.collections("recipes");

export const createUser = user => {
    return usersCollection.add(user)
}

export const getUser = async id => {
    const user = await usersCollection.doc(id).get()
    return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
    return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
    return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
    const users = ref([])
    const close = usersCollection.onSnapshot(snapshot => {
        users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return users
}


export const createRecipe = recipe => {
    return recipesCollection.add(recipe)
}

export const getRecipe = async id => {
    const recipe = await recipesCollection.doc(id).get()
    return recipe.exists ? recipe.data() : null
}

export const updateRecipe = (id, recipe) => {
    return recipesCollection.doc(id).update(recipe)
}

export const deleteRecipe = id => {
    return recipesCollection.doc(id).delete()
}

export const useLoadRecipes = () => {
    const recipes = ref([])
    const close = recipesCollection.onSnapshot(snapshot => {
        recipes.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return recipes
}