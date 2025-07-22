<template>
  <div>
    <h2>상품 리스트</h2>
    <ProductList :products="visibleProducts" />
  </div>
</template>

<script setup lang="ts">
import ProductList from '~/components/ProductList.vue';
import {dummyProducts} from '~/mock/products';

const allProducts = dummyProducts;
const visibleProducts = ref(allProducts.slice(0, 20));
const nextIndex = ref(20);

const loadMore = () => {
  if (nextIndex.value >= allProducts.length) return;

  const nextItems = allProducts.slice(nextIndex.value, nextIndex.value + 10);
  visibleProducts.value.push(...nextItems);
  nextIndex.value += 10;
};

const handleScroll = () => {
  const scrollBottom =
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
  if (scrollBottom) {
    loadMore();
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeMount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
h2 {
  margin-bottom: 1rem;
  text-align: center;
}
</style>
