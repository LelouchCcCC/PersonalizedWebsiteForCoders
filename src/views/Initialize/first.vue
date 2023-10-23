<script setup>
import bread from '@/components/initialize/bread.vue';
</script>
<template>
  <div id="building">
    <div class="line">
      <bread class="centered" />
    </div>
  </div>
</template>

<style scoped>
#building {
  background: url('@/img/v2-4f2d276580725a9669eb55e33b186d63_r.jpg');
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.centered {
  left: 50%;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 0);
}
</style>
