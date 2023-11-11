<template>
    <div class="card w-100 h-100" style="margin-top: 10px">
        <div class="embeb-responsive embeb-responsive-16by9">
            <img 
                class="card-img-top embeb-responsive-item"
                :src="category.imageUrl"
                alt="Card image cap"/>
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ category.categoryName }}</h5>
            <p class="card-text">
                {{ category.description }}
            </p>
            <router-link :to="{name: 'EditCategory', params: {id: category.id}}"
                v-show="$route.name == 'CategoryPage'"
            >
                <a href="#" class="btn btn-primary">Edit</a>
            </router-link>
            
        </div>
    </div>
</template>
<script>
    export default {
        name: "CategoryBox",
        props: ["category"],
    };
</script>
<style scoped>
    .card-img-top {
        object-fit: cover;
    }
</style>