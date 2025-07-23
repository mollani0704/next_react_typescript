<template>
  <div v-if="product">
    <h2>{{ product.name }}</h2>
    <img :src="product.image" :alt="product.name" />
    <p>가격 : {{ product.price.toLocaleString() }}원</p>
  </div>
  <div v-else>
    <p>해당 상품을 찾을 수 없습니다.</p>
  </div>
</template>

<script setup lang="ts">
import {dummyProducts} from '~/mock/products';
import {useRoute} from 'vue-router';

const route = useRoute();
const id = Number(route.params.id);

const product = dummyProducts.find(p => p.id === id);
console.log('product', product);
</script>

<style scoped>
img {
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  margin: 1rem 0;
}
</style>
