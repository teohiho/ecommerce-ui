<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">Edit Product</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form v-if="product">
                    <div class="form-group">
                        <label>Category</label>
                        <select class="form-control" v-model="product.categoryId" required>
                            <option 
                                v-for="category of categories"
                                :key="category.id"
                                :value="category.id"
                            >
                                {{ category.categoryName }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Product Name</label>
                        <input type="text" class="form-control"
                            v-model="product.name" required />
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <input type="text" class="form-control"
                            v-model="product.description" required />
                    </div>
                    <div class="form-group">
                        <label>Image Url</label>
                        <input type="text" class="form-control"
                            v-model="product.imageURL" required />
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input type="text" class="form-control"
                            v-model="product.price" required />
                    </div>
                    <button type="button" class="btn btn-primary"
                        @click="editProduct">Submit</button>
                </form>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>
<script>
    //import axios from 'axios';
    //import sweetalert from 'sweetalert';
    const axios = require("axios");
    const sweetalert = require("sweetalert");
    export default {
        data() {
            return {
                product: null,
                id: null
            }
        },
        props: ["baseUrl", "categories", "products"],
        methods: {
            async editProduct() {
                console.log("this.product: "); console.log(this.product)
                console.log(`${this.baseUrl}/product/update/${this.id}`)
                await axios.post(`${this.baseUrl}/product/update/${this.id}`, this.product)
                .then(() => {
                    console.log("successfully")
                    this.$emit("fetchData");
                    this.$router.push({name: 'ProductPage'})
                    console.log("successfully 1")
                    sweetalert({
                        text: 'Product edited successfully',
                        icon: 'success',
                    })  
                })
                .catch(err => {
                    console.log("err:", err, )
                })
            }
        },
        mounted() {
            this.id = this.$route.params.id;    
            this.product = this.products.find(product => product.id == this.id);
        },
    };
</script>