<template>
  <div id="home">
    <div>
      <div id="background-div" class="page-holder bg-cover">
        <div class="container py-5">
          <header class="text-left text-white py-5">
            <h3 class="mb-4 rounded" id="heading">
              <a hred="#start-shopping" class="bg-white px-2 py-2 rounded">Start Shopping</a>
            </h3>
            <p class="lead mb-0 bg-dark p-1 rounded">Demo Ecommerce</p>
          </header>
        </div>
      </div>


      <!-- Display Categories -->
      <div class="container">
        <div class="row">
          <div class="col-12 text-left">
            <h2 class="pt-3">
              Top Categories
            </h2>
          </div>
        </div>

        <!-- display products -->
        <div class="row">
          <div v-for="index in productSize"
            :key="index"
            class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
            <ProductBox :product="lstProduct[index-1]" ></ProductBox>
          </div>
        </div>

        <!-- display categories -->
        <div class="row">
          <div v-for="index in categorySize"
            :key="index"
            class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
            <CategoryBox :category="lstCategory[index-1]" ></CategoryBox>
          </div>
        </div>
      </div>

      <!-- Display Product -->
      <div class="container py-2">
        <div class="row">
          <div class="col-12 text-left">
            <h2 class="pt-3">
              Top Products
            </h2>
          </div>
        </div>

        <!-- display products -->
        <div class="row">
          <div v-for="index in productSize"
            :key="index"
            class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
            <ProductBox :product="lstProduct[index-1]" ></ProductBox>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import CategoryBox from "../components/Category/CategoryBox.vue";
import ProductBox from "../components/Product/ProductBox.vue";

const axios = require("axios");

export default {
  name: 'HomePage',
  props: ["categories", "products"],
  components: {
    CategoryBox,
    ProductBox
  },
  data() {
    return {
      baseUrl: "https://limitless-lake-55070.herokuapp.com",
      categorySize: 0,
      lstCategory: null,
      productSize: 0,
      lstProduct: null
    }
  },
  mounted() {
    // this.categorySize = Math.min(6, this.categories);
    
    axios.get(this.baseUrl + "/category/")
      .then(res => {
        console.log("res")
        console.log(res.data)
        this.lstCategory = res.data;
        console.log("Category Page: ", this.lstCategory.length);
        this.categorySize = Math.min(6, this.lstCategory.length);
        console.log("App.js this.categories")
      
      })
      .catch(err => {
        console.log(err);
      })

    axios.get(this.baseUrl + "/product/")
      .then(res => {
        this.lstProduct = res.data;
        console.log("Product Page: ", this.lstProduct.length);
        this.productSize = Math.min(6, this.lstProduct.length);
      })
      .catch(err => {
        console.log(err);
      })
  },

}
</script>

<style>
  .page-holder {
    min-height: 100vh;
  }
  .bg-cover {
    background-size: cover !important;
  }
  #background-div {
    background: url("../assets/home.jpg");
  }
  #heading {
    font-weight: 400;
  }
</style>