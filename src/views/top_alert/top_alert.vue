<script setup>
import { ref } from 'vue';
let item = ref(['item1', 'item2', 'item3']);
let openAlert = ref(!(localStorage.getItem('TopAlert') && new Date().getTime() < localStorage.getItem('TopAlert')));
console.log(localStorage.getItem('TopAlert'));
console.log(new Date().getTime());
console.log(openAlert.value);
let saveToLocalSession = () => {
  let expirationTopAlert = new Date().getTime() + 1 * 30 * 1000;
  localStorage.setItem('TopAlert', expirationTopAlert);
  openAlert.value = false;
  console.log(openAlert.value);
};
</script>

<template>
  <div v-show="openAlert">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>This is much more than a website</span>
        </div>
      </template>
      <div v-for="o in item" :key="o" class="text item">{{ o }}</div>
      <template #footer>
        <el-button @click="saveToLocalSession">continue</el-button>
      </template>
    </el-card>
  </div>
</template>

<style>
.box-card {
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 1001;
  transform: translate(-50%, -50%);
}
.card-header {
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>
