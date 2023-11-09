<script setup>
import { handleThinking } from '@/network/axios.js';
const token = ref('');
onMounted(() => {
  token.value = localStorage.getItem('myWebsiteToken');
  if (token.value) {
    console.log('Token is:', token.value);
  } else {
    console.log('No token found');
  }
});
handleThinking()
  .then(() => {
    console.log('The handleThinking promise has resolved.');
  })
  .catch((error) => {
    console.error('The handleThinking promise was rejected:', error);
  });
</script>
<template>
  <div>mcm</div>
</template>
