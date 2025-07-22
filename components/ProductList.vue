<template>
  <div class="product-list">
    <!-- <div
      class="product-card"
      v-for="product in products"
      :key="product.id"
      @click="goToDetail(product.id)"
    >
      <img :src="product.image" :alt="product.name" />
      <h3>{{ product.name }}</h3>
      <p>{{ product.price.toLocaleString() }}원</p>
    </div> -->
    <NuxtLink
      class="product-card"
      v-for="product in products"
      :key="product.id"
      :to="`/products/${product.id}`"
    >
      <img :src="product.image" :alt="product.name" />
      <h3>{{ product.name }}</h3>
      <p>{{ product.price.toLocaleString() }}원</p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type {Product} from '~/mock/products';
// import {useRouter} from 'vue-router';

defineProps<{
  products: Product[];
}>();

// const router = useRouter();

// const goToDetail = (id: number) => {
//   router.push(`/products/${id}`);
// };
</script>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.product-card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 8px;
  text-align: center;
  background: #fff;
}

.product-card img {
  width: 100%;
  border-radius: 4px;
}
</style>
