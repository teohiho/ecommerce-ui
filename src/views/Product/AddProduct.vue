<template>
<div class="container">
    <div class="row">
        <div class="col-12">
            <h4>Add New Product</h4>
        </div>
    </div>
    <div class="row">
        <div class="col-3"></div>
        
        <div class="col-6">
            <form>
                <div class="form-group">
                    <lable>Category</lable>
                    <select class="form-control" v-model="categoryId" required>
                        <option 
                            v-for="category in categories" 
                            :key="category.id"
                            :value="category.id"
                        >
                            {{ category.categoryName }}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" v-model="name" class="form-control">
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <input type="text" v-model="description" class="form-control">
                </div>
                <div class="form-group">
                    <label>Image Url</label>
                    <input type="text" v-model="imageUrl" class="form-control">
                </div>
                <div class="form-group">
                    <label>Price</label>
                    <input type="number" v-model="price" class="form-control">
                </div>
                <button 
                    type="button" 
                    class="btn btn-primary"
                    @click="addProduct">Add Product</button>
            </form>
        </div>
        <div class="col-3"></div>
    </div>
</div>
</template>
<script>
    import axios from 'axios';
    const sweetalert = require("sweetalert");
    export default {
        name: "AddProduct",
        props: ["baseUrl", "categories"],
        data() {
            return {
                id: null,
                categoryId: null,
                name: null,
                description: null,
                imageUrl: null,
                price: null
            }
        },
        methods: {
            addProduct() {
                const newProduct = {
                    categoryId : this.categoryId,
                    description : this.description,
                    name: this.name,
                    imageUrl : this.imageUrl,
                    price : this.price
                };

                axios.post(this.baseUrl + "/product/add", newProduct)
                .then(() => {
                    this.$router.push({name: "Product"});
                    sweetalert({
                        text: 'Product added successfully',
                        icon: 'success',
                    })
                })
                .catch((err) => {
                    console.log(err);
                })
            }
        },
    };
</script>