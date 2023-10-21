<template>
  <button @click="handleClick">click</button>
  <h1>{{ res }}</h1>
</template>

<script setup>
import axios from 'axios';

let res = ref(2);

function handleClick() {
  axios.get('/usermessage').then((res) => {
    console.log(res);
  });
}
</script>
