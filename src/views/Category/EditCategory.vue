<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">Edit Category</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form v-if="category">
                    <div class="form-group">
                        <label>Category Name</label>
                        <input type="text" class="form-control"
                            v-model="category.categoryName" required />
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <input type="text" class="form-control"
                            v-model="category.description" required />
                    </div>
                    <div class="form-group">
                        <label>Image Url</label>
                        <input type="text" class="form-control"
                            v-model="category.imageUrl" required />
                    </div>
                    <button type="button" class="btn btn-primary"
                        @click="editCategory">Submit</button>
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
                category: null,
                id: null
            }
        },
        props: ["baseUrl", "categories"],
        methods: {
            
            async editCategory() {
                console.log(`${this.baseUrl}/category/update/${this.id}`)
                await axios.post(`${this.baseUrl}/category/update/${this.id}`, this.categories)
                .then(() => {
                    console.log("Category edited successfully   ")
                    sweetalert({
                        text: 'Category edited successfully',
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
            this.category = this.categories.find(category => category.id == this.id);
        },
    };
</script>