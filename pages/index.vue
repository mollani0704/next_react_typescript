<template>
  <div class="home">
    <h1>🏠 홈닉 클론코딩에 오신 걸 환영합니다!</h1>
    <p>Nuxt 3 + Vue 3 + TypeScript로 쇼핑몰 클론코딩 시작!</p>
    <NuxtLink to="/products" class="link">👉 상품 보러가기</NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.home {
  padding: 2rem;
  text-align: center;
}
.link {
  display: inline-block;
  margin-top: 1rem;
  color: #0070f3;
  font-weight: bold;
  text-decoration: underline;
}
</style>
