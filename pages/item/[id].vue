<template>
  <MainLayout>
    <div id="ItemPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="flex flex-col md:flex-row gap-4 mx-auto w-full">
        <!-- Image Section (70%) -->
        <div class="w-full md:w-[70%]">
          <!-- Main Image -->
          <img
            v-if="currentImage"
            class="rounded-lg object-cover w-full h-auto"
            :src="currentImage"
          />
          <!-- Thumbnail Images -->
          <div
            v-if="images[0] !== ''"
            class="flex items-center justify-start gap-3 flex-wrap mt-4"
          >
            <div v-for="image in images" :key="image">
              <img
                @mouseover="currentImage = image"
                @click="currentImage = image"
                width="70"
                class="rounded-md object-cover border-[3px] cursor-pointer"
                :class="
                  currentImage === image
                    ? 'border-[#FF5353]'
                    : 'border-transparent'
                "
                :src="image"
              />
            </div>
          </div>
        </div>

        <!-- Cart Summary Section (30%) -->
        <div
          class="w-full md:w-[30%] bg-white p-3 rounded-lg shadow-md"
          style="height: fit-content"
        >
          <div v-if="product && product.data">
            <p class="text-xl font-semibold mb-2">{{ product.data.title }}</p>
            <p class="font-light text-sm mb-2">
              {{ product.data.description }}
            </p>
          </div>

          <!-- Discount -->
          <div class="flex items-center pt-1.5">
            <span class="h-4 min-w-4 rounded-full p-0.5 bg-[#FFD000] mr-2">
              <Icon
                name="material-symbols:star-rounded"
                class="-mt-[17px]"
                size="12"
              />
            </span>
            <p class="text-[#FF5353]">Extra 5% off</p>
          </div>

          <!-- Ratings -->
          <div class="flex items-center my-2">
            <Icon
              name="ic:baseline-star"
              color="#FF5353"
              v-for="i in 5"
              :key="i"
            />
            <span class="text-sm font-light ml-2"
              >5 (213 Reviews) · 1,000+ orders</span
            >
          </div>

          <div class="border-b my-2" />

          <!-- Pricing -->
          <div class="flex items-center gap-2 my-2">
            <div class="text-xl font-bold">$ {{ priceComputed }}</div>
            <span
              class="bg-[#F5F5F5] text-[#C08562] text-xs font-semibold px-1.5 rounded-sm"
              >70% off</span
            >
          </div>

          <!-- Shipping -->
          <p class="text-[#009A66] text-xs font-semibold">
            Free 11-day delivery over £8.28
          </p>
          <p class="text-[#009A66] text-xs font-semibold">Free Shipping</p>

          <!-- Add to Cart Button -->
          <div class="mt-4">
            <button
              @click="addToCart()"
              :disabled="isInCart"
              class="w-full py-2 rounded-lg text-white text-lg font-semibold bg-gradient-to-r from-[#FF851A] to-[#FFAC2C]"
            >
              <div v-if="isInCart">Is Added</div>
              <div v-else>Add to Cart</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import MainLayout from "~/layouts/MainLayout.vue";

let currentImage = ref("");

onMounted(() => {
  watchEffect(() => {
    currentImage.value = "https://picsum.photos/id/144/800/800";
    images.value[0] = "https://picsum.photos/id/144/800/800";
  });
});

const images = ref([
  "",
  "https://picsum.photos/id/212/800/800",
  "https://picsum.photos/id/233/800/800",
  "https://picsum.photos/id/165/800/800",
  "https://picsum.photos/id/99/800/800",
  "https://picsum.photos/id/144/800/800",
]);
</script>

<style scoped>
/* Adjust styles for better responsiveness */
@media (max-width: 768px) {
  .flex-row {
    flex-direction: column;
  }
}
</style>
