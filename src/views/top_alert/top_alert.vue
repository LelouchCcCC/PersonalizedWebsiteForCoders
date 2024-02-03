<script setup>
import { ref } from 'vue';
import { fetchLast5Next5Development } from '../../network/axios';
let item = ref(['Added more language options for submitting code', 'Implemented the dialog when entered the website, which updates every day']);
let item_plan = ref(['Implement responsive Web design']);
let openAlert = ref(!(localStorage.getItem('TopAlert') && new Date().getTime() < localStorage.getItem('TopAlert')));
let loading_last5next5 = ref(true);
let error_message = ref('');
console.log(openAlert.value);
function FL5N5D() {
  fetchLast5Next5Development()
    .then((res) => {
      item.value = res.data.last;
      item_plan.value = res.data.next;
      console.log('success');
    })
    .catch((error) => {
      error_message.value = 'Failed to fetch the development log';
      console.log(error);
      ElNotification({
        title: 'Error',
        message: error_message,
        type: 'error',
      });
    })
    .finally(() => {
      loading_last5next5.value = false;
    });
  console.log('------------');
}
if (openAlert.value === true) {
  FL5N5D();
}

let saveToLocalSession = () => {
  let expirationTopAlert = new Date().getTime() + 1 * 30 * 1000;
  localStorage.setItem('TopAlert', expirationTopAlert);
  openAlert.value = false;
  console.log(openAlert.value);
};
</script>

<template>
  <div>
    <el-dialog v-model="openAlert" v-loading="loading_last5next5" :before-close="saveToLocalSession" width="800" center="true">
      <template #header> This is more than my website </template>
      <h3>Last Week development log</h3>
      <br />
      <div v-for="o in item" :key="o" class="text item">{{ o }}</div>
      <br />
      <h3>This Week planned</h3>
      <br />
      <div v-for="o in item_plan" :key="o" class="text item">{{ o }}</div>
    </el-dialog>
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
