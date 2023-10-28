<script setup>
import { ref } from 'vue';

let show = ref(true);
</script>
<template>
  <transition name="fade">
    <p v-if="show">100</p>
  </transition>
  <button @click="show = !show">show</button>
</template>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* 离开和进入过程中的样式 */
.fade-enter-active,
.fade-leave-active {
  /* 添加过渡动画 */
  transition: opacity 0.5s ease;
}
/* 进入之后和离开之前的样式 */
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
