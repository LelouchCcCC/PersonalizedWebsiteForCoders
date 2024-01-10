<script setup>
import { onMounted } from 'vue';
onMounted(() => {
  console.log(import.meta.env.VITE_APP_API_HOST);
});
console.log(import.meta.env.MODE);
// console.log('当前环境:', process.env.NODE_ENV);
</script>
<template>
  <router-view></router-view>
</template>

<style scoped></style>
