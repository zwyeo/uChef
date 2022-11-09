<template>
      <div>
        <nav-bar></nav-bar>
      </div>
      <!-- Receipe Slider -->
      <div class="container mb-1">
          <div class="row">
              <div class="col-12">
                  <div class="outer">
                  <img :src="image" class="img-fluid" alt="">
                  </div>
              </div>
          </div>
      </div>

      <!-- Receipe Content Area -->
      <div class="receipe-content-area">
          <div class="container">

              <div class="row">
                  <div class="col-12 col-md-8">
                      <div class="receipe-headline my-5">
                          <h2>{{title}}</h2>
                          <a :href="video" class="btn video-btn  delicious-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg> Watch Video</a>

                          <!-- <div class="receipe-duration">
                              <h6>Prep: 15 mins</h6>
                              <h6>Cook: 30 mins</h6>
                              <h6>Yields: 8 Servings</h6>
                          </div> -->
                      </div>
                  </div>

                  <div class="col-12 col-md-4">
                      <div class="receipe-ratings  my-5 ">
                          <div class="ratings">
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star-o" aria-hidden="true"></i>
                          </div>
                          <a href="#" class="btn delicious-btn">Bookmark</a>
                      </div>
                  </div>
              </div>

              <div class="row">
                  <div class="col-12 col-lg-8">
                      <!-- Single Preparation Step -->
                      <div v-for="(item, index) in instructions" :key="item" class="single-preparation-step d-flex">
                          <h4>0{{index+1}}</h4>
                          <p>{{item}} </p>
                      </div>
                  </div>

                  <!-- Ingredients -->
                  <div class="col-12 col-lg-4">
                      <div class="ingredients">
                          <h4>Ingredients</h4>

                          <!-- Custom Checkbox -->
                          <div class="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" id="customCheck1">
                              <label class="custom-control-label" for="customCheck1">4 Tbsp (57 gr) butter</label>
                          </div>

                          <!-- Custom Checkbox -->
                          <div class="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" id="customCheck2">
                              <label class="custom-control-label" for="customCheck2">2 large eggs</label>
                          </div>

                          <!-- Custom Checkbox -->
                          <div class="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" id="customCheck3">
                              <label class="custom-control-label" for="customCheck3">2 yogurt containers granulated sugar</label>
                          </div>

                          <!-- Custom Checkbox -->
                          <div class="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" id="customCheck4">
                              <label class="custom-control-label" for="customCheck4">1 vanilla or plain yogurt, 170g container</label>
                          </div>

                          <!-- Custom Checkbox -->
                          <div class="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" id="customCheck5">
                              <label class="custom-control-label" for="customCheck5">2 yogurt containers unbleached white flour</label>
                          </div>

                          <!-- Custom Checkbox -->
                          <div class="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" id="customCheck6">
                              <label class="custom-control-label" for="customCheck6">1.5 yogurt containers milk</label>
                          </div>

                          <!-- Custom Checkbox -->
                          <div class="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" id="customCheck7">
                              <label class="custom-control-label" for="customCheck7">1/4 tsp cinnamon</label>
                          </div>

                          <!-- Custom Checkbox -->
                          <div class="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" id="customCheck8">
                              <label class="custom-control-label" for="customCheck8">1 cup fresh blueberries </label>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="row">
                  <div class="col-12">
                      <div class="section-heading text-left">
                          <h3>Leave a comment</h3>
                      </div>
                  </div>
              </div>

              <div class="row">
                  <div class="col-12">
                      <div class="contact-form-area">
                          <form action="#" method="post">
                              <div class="row">
                                  <div class="col-12 col-lg-6">
                                      <input type="text" class="form-control" id="name" placeholder="Name">
                                  </div>
                                  <div class="col-12 col-lg-6">
                                      <input type="email" class="form-control" id="email" placeholder="E-mail">
                                  </div>
                                  <div class="col-12">
                                      <input type="text" class="form-control" id="subject" placeholder="Subject">
                                  </div>
                                  <div class="col-12">
                                      <textarea name="message" class="form-control" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                                  </div>
                                  <div class="col-12">
                                      <button class="btn delicious-btn mt-30" type="submit">Post Comments</button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>



    <!-- ##### Follow Us Instagram Area End ##### -->

    <!-- ##### Footer Area Start ##### -->
    <!-- <footer class="footer-area">
        <div class="container h-100">
            <div class="row h-100">
                <div class="col-12 h-100 d-flex flex-wrap align-items-center justify-content-between">
                    Footer Social Info
                    <div class="footer-social-info text-right">
                        <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                    </div>
                    Footer Logo
                    <div class="footer-logo">
                        <a href="index.html"><img src="img/core-img/logo.png" alt=""></a>
                    </div>
                  </div>
            </div>
        </div>
    </footer> -->
    "Heat the olive oil in a large frying pan and cook the onion for 1-2 mins just until softened. Add the chicken and fry for 7-10 mins until cooked through and the onions have turned golden. Grate over the ginger, stir through the harissa to coat everything and cook for 1 min more.\r\n\r\nTip in the apricots, chickpeas and couscous, then pour over the stock and stir once. Cover with a lid or tightly cover the pan with foil and leave for about 5 mins until the couscous has soaked up all the stock and is soft. Fluff up the couscous with a fork and scatter over the coriander to serve. Serve with extra harissa, if you like."

</template>



<script>
import NavBar from "../components/NavBar.vue"
import axios from "axios";


export default {
  components: { NavBar },
  props: ["id"],
  data() {
    return {
      title: null,
      image: null,
      video: null,
      instructions: [],
      ingredient_list: [],
    };
  },
  created() {
    let url = "https://themealdb.com/api/json/v1/1/lookup.php"
    axios.get(url,{
      params:{
        i : this.id,
      }
    })
    .then(response=>{
      console.log(response.data)
      let obj = response.data.meals[0];
      this.title = obj.strMeal;
      this.image = obj.strMealThumb;
      let instruction = obj.strInstructions.split(".");
      this.instructions = instruction.slice(0,-1)
      this.video = obj.strYoutube
    })
}}
    
    // api for title, image, minutes to make, summary,analysed instructions and servings
//     let url = "https://api.spoonacular.com/recipes/" + this.id + "/information";
//     axios(url, {
//       params: {
//         apiKey: process.env.VUE_APP_SPOONACULAR_API,
//       },
//     }).then((response) => {
//       // console.log(response.data);
//       this.title = response.data.title;
//       this.image = response.data.image;
//       this.minutes = response.data.readyInMinutes;
//       this.summary = response.data.summary;
//       this.servings = response.data.servings;

//       // retrieving analysed instructions and formatting it
//       let stepsarray = response.data.analyzedInstructions[0].steps;
//       console.log(stepsarray);
//       for (let s of stepsarray) {
//         this.instructions.push(s.step);
//       }
//     });

//     // api for calories
//     let url2 =
//       "https://api.spoonacular.com/recipes/" +
//       this.id +
//       "/nutritionWidget.json";
//     axios(url2, {
//       params: {
//         apiKey: process.env.VUE_APP_SPOONACULAR_API,
//       },
//     }).then((response) => {
//       //   console.log(response);
//       this.calories = response.data.calories.slice(0, -1);
//     });

//     // api for ingredients
//     let url3 =
//       "https://api.spoonacular.com/recipes/" +
//       this.id +
//       "/ingredientWidget.json";
//     axios(url3, {
//       params: {
//         apiKey: process.env.VUE_APP_SPOONACULAR_API,
//       },
//     }).then((response) => {
//       let ingredients = response.data.ingredients;
//       let desc = "";
//       for (let i of ingredients) {
//         let name = i.name;
//         let value = i.amount.metric.value;
//         let unit = i.amount.metric.unit;
//         if (unit == "" || unit == "g") {
//           desc = value + unit + " " + name;
//         } else {
//           desc = value + " " + unit + " " + name;
//         }
//         this.ingredient_list.push(desc);
//       }
//       // console.log(this.ingredient_list);
//     });
//   },
//   computed: {
//     numOfIngredients() {
//       return this.ingredient_list.length;
//     },
//   },

</script>
<!-- CSS files
  ============== -->
<style scoped>
  * {
  margin: 0;
  padding: 0; }

body {
  font-family: "Open Sans", sans-serif;
  font-size: 14px; }

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #000000;
  line-height: 1.3;
  font-weight: 600; }

p {
  color: #9b9b9b;
  font-size: 14px;
  line-height: 2;
  font-weight: 400; }

a,
a:hover,
a:focus {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  text-decoration: none;
  outline: 0 solid transparent;
  color: #000000;
  font-weight: 600;
  font-size: 14px;
  color: #474747; }

ul,
ol {
  margin: 0; }
  ul li,
  ol li {
    list-style: none; }


/* Spacing */


.mt-30 {
  margin-top: 30px !important; }



/* Section Heading */
.section-heading {
  position: relative;
  z-index: 1;
  margin-bottom: 80px;
  text-align: center; }
  .section-heading h3 {
    font-size: 30px;
    margin-bottom: 0; }
  .section-heading.text-left {
    text-align: left !important; }
  .section-heading.white h3 {
    color: #ffffff; }

/* Preloader */
#preloader {
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5000; }
  #preloader img {
    width: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 10; }
  #preloader .circle-preloader {
    display: block;
    width: 60px;
    height: 60px;
    border: 2px solid #ccc;
    border-bottom-color: #1c8314;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    animation: spin 2s infinite linear; }
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg); } }
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg); } }
/* Miscellaneous */


/* ScrollUp */
#scrollUp {
  background-color: #40ba37;
  border-radius: 0;
  bottom: 60px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
  color: #ffffff;
  font-size: 24px;
  height: 40px;
  line-height: 38px;
  right: 60px;
  text-align: center;
  width: 40px;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms; }
  #scrollUp:hover {
    background-color: #141414; }
  @media only screen and (max-width: 767px) {
    #scrollUp {
      bottom: 30px;
      right: 30px; } }

/* Button */
.delicious-btn {
  display: inline-block;
  min-width: 160px;
  height: 60px;
  color: #ffffff;
  border: none;
  border-left: 3px solid #1c8314;
  border-radius: 0;
  padding: 0 30px;
  font-size: 16px;
  line-height: 58px;
  font-weight: 600;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  text-transform: capitalize;
  background-color: #40ba37; }
  .delicious-btn.active, .delicious-btn:hover, .delicious-btn:focus {
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    background-color: #1c8314;
    border-color: #40ba37; }
  .delicious-btn.btn-2 {
    background-color: #1c8314;
    border-color: #40ba37; }
    .delicious-btn.btn-2.active, .delicious-btn.btn-2:hover, .delicious-btn.btn-2:focus {
      background-color: #40ba37;
      border-color: #1c8314; }
  .delicious-btn.btn-3 {
    background-color: #474747;
    border-color: #1c8314; }
    .delicious-btn.btn-3.active, .delicious-btn.btn-3:hover, .delicious-btn.btn-3:focus {
      background-color: #40ba37;
      border-color: #1c8314; }
  .delicious-btn.btn-4 {
    background-color: transparent;
    border: 3px solid #40ba37;
    line-height: 53px;
    color: #40ba37; }
    @media only screen and (max-width: 767px) {
      .delicious-btn.btn-4 {
        height: 40px;
        line-height: 33px; } }
    .delicious-btn.btn-4.active, .delicious-btn.btn-4:hover, .delicious-btn.btn-4:focus {
      line-height: 53px;
      color: #ffffff;
      background-color: #40ba37; }
      @media only screen and (max-width: 767px) {
        .delicious-btn.btn-4.active, .delicious-btn.btn-4:hover, .delicious-btn.btn-4:focus {
          height: 40px;
          line-height: 33px; } }
  @media only screen and (max-width: 767px) {
    .delicious-btn {
      height: 40px;
      line-height: 39px; } }

   


/* :: 8.0 Best Receipe Area */
    .ratings i {
      font-size: 11px;
      color: #fbb710;
      display: inline-block;
      padding: 0 1px; }


/* :: 15.0 Receipe Area */

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .receipe-post-search .col-12 {
      margin-bottom: 30px; } }
  @media only screen and (max-width: 767px) {
    .receipe-post-search .col-12 {
      margin-bottom: 15px; } }

svg{
  width: 50px
}

/* .receipe-slider {
  position: relative;
  z-index: 1; 
} */
  /* .receipe-slider .owl-prev,
  .receipe-slider .owl-next {
    background-color: transparent;
    width: 40px;;
    height: 40px;
    line-height: 40px;
    color: #ffffff;
    top: 50%;
    margin-top: -20px;
    left: 4%;
    position: absolute;
    z-index: 10;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    opacity: 0;
    visibility: hidden;
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
    border-bottom: 3px solid #1c8314; }
    @media only screen and (max-width: 767px) {
      .receipe-slider .owl-prev,
      .receipe-slider .owl-next {
        font-size: 14px; } }
  .receipe-slider .owl-next {
    left: auto;
    right: 4%; }
  .receipe-slider:hover .owl-prev, .receipe-slider:hover .owl-next {
    opacity: 1;
    visibility: visible; } */

.receipe-headline span {
  font-size: 14px;
  display: block;
  color: #a4a4a4;
  margin-bottom: 0; }
.receipe-headline h2 {
  font-size: 36px;
  color: #474747;
  margin-bottom: 30px; }
  @media only screen and (max-width: 767px) {
    .receipe-headline h2 {
      font-size: 24px; } }
.receipe-headline .receipe-duration {
  border-left: 3px solid #40ba37;
  padding: 15px; }
  .receipe-headline .receipe-duration h6 {
    font-size: 15px;
    margin-bottom: 5px; }
    .receipe-headline .receipe-duration h6:last-child {
      margin-bottom: 0; }

.receipe-ratings .ratings {
  margin-bottom: 30px; }
.receipe-ratings i {
  font-size: 18px;
  color: #fbb710;
  padding: 0 3px; }

.single-preparation-step {
  position: relative;
  z-index: 1;
  margin-bottom: 50px; }
  .single-preparation-step h4 {
    color: #474747;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 60px;
    flex: 0 0 60px;
    max-width: 60px;
    width: 60px;
    margin-bottom: 0; }

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .ingredients {
    margin-bottom: 80px; } }
@media only screen and (max-width: 767px) {
  .ingredients {
    margin-bottom: 80px; } }
.ingredients h4 {
  color: #474747;
  margin-bottom: 30px; }
.ingredients .custom-checkbox .custom-control-label::before {
  border-radius: 0; }
.ingredients .custom-control-label::before {
  width: 30px;
  height: 30px;
  background-color: #f3f5f8; }
.ingredients .custom-control {
  padding-left: 2.5rem;
  margin-bottom: 30px;
  min-height: 35px; }
.ingredients .custom-control-label {
  margin-bottom: 0;
  padding-top: 5px;
  font-size: 16px;
  font-weight: 600;
  color: #2f2f2f; }
.ingredients .custom-control-label::after {
  top: 10px;
  left: 5px;
  width: 20px;
  height: 20px; }
.ingredients .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #40ba37; }

.outer{
  width: 1000px;

}


.contact-form-area .form-control {
  height: 52px;
  width: 100%;
  background-color: #f3f5f8;
  font-size: 12px;
  font-style: italic;
  margin-bottom: 15px;
  border: none;
  border-left: 3px solid #f3f5f8;
  border-radius: 0;
  padding: 15px 30px;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms; }
  .contact-form-area .form-control:focus {
    border-left: 3px solid #40ba37;
    box-shadow: none; }
.contact-form-area textarea.form-control {
  height: 200px;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms; }




</style>
