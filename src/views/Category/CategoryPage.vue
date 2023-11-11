<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3 class="pt-3">Our Categories </h3>
                <router-link :to="{name: 'AddCategory'}">
                    <button class="btn">Add Category</button>
                </router-link>
            </div>
        </div>
        <div class="row">
            <div 
                v-for="category of categories" 
                :key="category.id"
                class="col-xl-4 col-md-6 col-12 pt-3 d-flex"
            >
                <CategoryBox :category="category"></CategoryBox>
            </div>
        </div>
    </div>
</template>
<script>
    import CategoryBox from '../../components/Category/CategoryBox.vue'

    export default {
        name: "CategoryPage",
        props: ["categories"],
        components: {
            CategoryBox
        },
        data() {
            return {
                baseUTL: "https://limitless-lake-55070.herokuapp.com",
            }
        },
        methods: {
        
        },
        mounted() {
            //this.getCategories();
            console.log("Category Page: ", this.categories);
        },
    }
</script>
<style scoped></style>