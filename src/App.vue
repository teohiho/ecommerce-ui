<template>
  <Navbar></Navbar>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view
  :baseUrl = "baseUrl"
  :categories = "categories"
  :products = "products"
  @fetchData = "fetchData"
  ></router-view>
  
</template>

<script>
const axios = require("axios");
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar
  },
  data() {
    return {
      baseUrl: "https://limitless-lake-55070.herokuapp.com",
      products: null,
      categories: null
    }
  },
  methods: {
    async fetchData () {
      // api call to get the categories
      await axios.get(this.baseUrl + "/category/")
      .then(res => {
        console.log("res")
        console.log(res.data)
        this.categories = res.data;
        console.log("App.js this.categories")
        console.log(this.categories)
      })
      .catch(err => {
        console.log(err);
      })

      // api call to get the products
      await axios.get(this.baseUrl + "/product/")
      .then(res => {
        console.log("res")
        console.log(res.data)
        this.products = res.data;
        console.log("App.js this.products")
        console.log(this.products)
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
    this.fetchData();
   
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
