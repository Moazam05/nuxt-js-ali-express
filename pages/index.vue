<script setup lang="ts">
import MainLayout from "~/layouts/MainLayout.vue";

const products = [
  {
    id: 1,
    title: "Product 1",
    description: "Description 1",
    url: "https://via.placeholder.com/150",
    price: 100,
  },
  {
    id: 2,
    title: "Product 2",
    description: "Description 2",
    url: "https://via.placeholder.com/150",
    price: 200,
  },
];
</script>

<template>
  <MainLayout>
    <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div
        class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4"
      >
        <div v-if="products" v-for="product in products" :key="product">
          <ProductComponent :product="product" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>
