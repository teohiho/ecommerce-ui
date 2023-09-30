<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <div class="col-12 text-center">
                    <h3 class="pt-3">Our Products </h3>
                    <router-link :to="{name: 'AddProduct'}">
                        <button class="btn" style="float: right;">Add Product</button>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="row">
           <div 
            v-for="product of products" 
            :key="product.id"
            class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex"
           >
                <ProductBox :product="product"></ProductBox>
           </div>
        </div>
    </div>
</template>

<script>
    import ProductBox from '../../components/Product/ProductBox.vue'
    export default {
        name: "ProductPage",
        props: ["products"],
        components: {
            ProductBox
        },
    }
</script>