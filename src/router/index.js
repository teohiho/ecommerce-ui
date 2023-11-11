import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AddCategory from '../views/Category/AddCategory.vue'
import EditCategory from '../views/Category/EditCategory.vue'
import CategoryPage from '../views/Category/CategoryPage.vue'

import AdminPage from '../views/AdminPage.vue'
import ProductPage from '../views/Product/ProductPage.vue'
import AddProduct from '../views/Product/AddProduct.vue'
import EditProductPage from '../views/Product/EditProductPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category/edit/:id',
    name: 'EditCategory',
    component: EditCategory
  },
  {
    path: '/admin/category',
    name: 'CategoryPage',
    component: CategoryPage
  },

  // admin home page
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage
  },

  {
    path: '/admin/product',
    name: 'ProductPage',
    component: ProductPage
  },

  // add product
  {
    path: '/admin/product/add',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/admin/product/edit/:id',
    name: 'EditProductPage',
    component: EditProductPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
