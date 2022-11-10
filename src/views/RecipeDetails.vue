<template>
      <div>
        <nav-bar></nav-bar>
      </div>
      <!-- Receipe Slider -->
      <div class="container">
          <div class="row">
              <div class="col-12 outer">
                  
                  <img :src="image">
                  
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
                          <a  class="btn video-btn  delicious-btn" data-bs-toggle="modal" :data-src="video" data-bs-target="#myModal" @click="open()"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg> Watch Video</a>

                          <!-- Modal -->
                      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">

                            
                            <div class="modal-body">
                            <button type="button" class="btn-close" @click="close()" data-bs-dismiss="modal" aria-label="Close">
                              </button>        
                              <!-- 16:9 aspect ratio -->
                      <div class="ratio ratio-16x9">
                        <iframe class="embed-responsive-item" :src="video2"  allowscriptaccess="always" allow="autoplay"></iframe>
                      </div>
                              
                              
                            </div>

                          </div>
                        </div>
                      </div> 
  

                          <!-- <div class="receipe-duration">
                              <h6>Prep: 15 mins</h6>
                              <h6>Cook: 30 mins</h6>
                              <h6>Yields: 8 Servings</h6>
                          </div> -->
                         
                      </div>
                  </div>

                  <div class="col-12 col-md-4">
                      <div class="receipe-ratings my-5 ">
                          <div class="ratings">
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star-o" aria-hidden="true"></i>
                          </div>

                          <a v-if="!bookmarked" href="#" class="btn delicious-btn" @click="bookmark()">Bookmark</a>
                          <a v-else href="#" class="btn delicious-btn" @click="unbookmark()">Bookmarked!</a>

                      </div>
                  </div>
              </div>

              <div class="row">
                  <div class="col-12 col-lg-8">
                      <!-- Single Preparation Step -->
                      <div v-for="(item, index) in instructions" :key="item" class="single-preparation-step d-flex">
                          <h4 v-if="index<9">0{{index+1}}</h4>
                          <h4 v-else>{{index+1}}</h4>
                          <p>{{item}} </p>
                      </div>
                  </div>

                  <!-- Ingredients -->
                  <div class="col-12 col-lg-4">
                      <div class="ingredients">
                          <h4 class="">Ingredients</h4>

                          <!-- Custom Checkbox -->
                          <div v-for="(item, index) in ingredient_list" :key="index" class="custom-control custom-checkbox" :id="index">
                              <input type="checkbox" class="custom-control-input" :id="index">
                              <label class="custom-control-label" :for="index">{{item}}</label>
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
      video2: null,
      instructions: [],
      ingredient_list: [],
      bookmarked: false
    };
  },
  created() {
    //filling up the recipe details
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
      this.video =  obj.strYoutube.replace("watch?v=", "embed/");
      // this.video2 = this.video + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"



      let instruction = obj.strInstructions.split("\r\n");
      this.instructions = instruction
     
      // formatting ingredients and the measurements
      for(let i =1; i<21; i++){
        let str_i = "strIngredient" + i
        let str_m = "strMeasure" + i
        if(obj[str_i] == "" || obj[str_i] == null) break;
        else{
          let final = obj[str_m] + " " + obj[str_i]
          this.ingredient_list.push(final)
        } 
      }
      console.log(this.ingredient_list)
    })

    //Bookmark button
    axios.get(
            `https://wad-proj-22042-default-rtdb.asia-southeast1.firebasedatabase.app/users/${this.$store.state.userId}/bookmarks.json`)
            .then(response=>{
              console.log(response.data)
              for(let [key,value] of Object.entries(response.data)){
                if(value.id == this.id){
                  this.bookmarked = true;
                }
              }
            })
            .catch(error=>{
              console.log(error)
            })
            

 },
 methods:{
  bookmark(){
    console.log(this.$store.state.userId)
    let userId = this.$store.state.userId;
    
        
    axios.post(
            `https://wad-proj-22042-default-rtdb.asia-southeast1.firebasedatabase.app/users/${userId}/bookmarks.json`,
            {
              id: this.id,
              title: this.title,
              image: this.image,
            }
          );
    this.bookmarked = true;
  },

  open(){
    console.log("it works");
    this.video2 = this.video.replace("watch?v=", "embed/");
  },
  close(){
    console.log("close");
    this.video2 = null;
  }

  // unbookmark(){
  //   axios.get()
  // }
 }
}
    
    

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
  color: #7e2e2e;
  margin-bottom: 30px; }
.ingredients .custom-checkbox .custom-control-label::before {
  border-radius: 0; }
.ingredients .custom-control-label::before {
  width: 30px;
  height: 30px;
   }
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

img{
  width:100%;
  height:auto;
  aspect-ratio: 2/1.4;
}
.outer{
  width: 750px;
}

.modal-dialog {
      max-width: 800px;
      margin: 30px auto;
  }

.modal-body {
  position:relative;
  padding:0px;
}
.btn-close {
  position:absolute;
  right:-30px;
  top:0;
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
