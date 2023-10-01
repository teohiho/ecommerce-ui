<template>
    <div>
        <router-link :to="{name: 'CategoryPage'}">
            <button type="button" class="btn btn-primary btn-lg">Admin Category</button>
        </router-link>
        <br />
        <router-link :to="{name: 'ProductPage'}">
            <button type="button" class="btn btn-primary btn-lg">Admin Product</button>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'AdminPage',
  props: ["categories"],
  components: {
    
  },
  date() {
    return {
      categorySize: 0
    }
  },
  mounted() {
    // this.categorySize = Math.min(6, this.categories);
    console.log("Category Page: ", this.categories);
  },

}
</script>

<style>
    .btn {
        margin-bottom: 20px;
    }
</style>