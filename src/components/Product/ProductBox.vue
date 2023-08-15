<template>
    <div class="card h-100 w-100">
        <div class="embeb-responsive embeb-responsive-16by9">
            <img 
                class="card-img-top embeb-responsive-item"
                :src="product.imageUrl"
                alt="Card image cap"
            />
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ product.productName }}</h5>
            <p class="card-text">
                {{ this.product.description ? this.product.description.substring(0, 65) : '' }} ...
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>
<script>

export default {
    name: "ProductBox",
    props: ["product"],
};
</script>
<style scoped>
    .card-img-top {
        object-fit: cover;
    }
</style>