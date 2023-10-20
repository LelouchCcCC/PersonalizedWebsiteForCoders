<script setup>
let s = $ref(54);
</script>
<template>
  <div>{{ s }}</div>
  <router-link to="/test">zheshishenme </router-link>
  <router-view></router-view>
</template>

<style scoped></style>
