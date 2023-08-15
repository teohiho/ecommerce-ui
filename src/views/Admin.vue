<template>
    <div>
        <router-link :to="{name: 'Category'}">
            <button type="button" class="btn btn-primary btn-lg">Admin Category</button>
        </router-link>
        <br />
        <router-link :to="{name: 'Product'}">
            <button type="button" class="btn btn-primary btn-lg">Admin Product</button>
        </router-link>
    </div>
</template>

<script>
export default {
    
}
</script>
<style>
    .btn {
        margin-bottom: 20px;
    }
</style>