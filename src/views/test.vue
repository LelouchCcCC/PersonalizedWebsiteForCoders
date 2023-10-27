<template>
  <!-- <button @click="handleClick">click</button>
  <h1>{{ res }}</h1> -->
  <!-- <textme /> -->
  <div class="left-bar">
    <div class="main">
      <div class="main-content">
        <img class="home-img" src="home1.png" alt="" />
        <h2 style="color: limegreen">Yuhan's Website</h2>
      </div>
      <hr class="centered-hr" width="80%" color="#987cb9" SIZE="3" />
    </div>
    <div class="content">
      <div class="name">
        <h2 @mouseover="nameVisible = true" @mouseleave="nameVisible = false">Yuhan Zhang</h2>
        <div>
          <div v-show="nameVisible" class="name-2">张聿涵</div>
        </div>
      </div>
    </div>
    <div class="pic"></div>
    <!-- <div class="seft"><p>ndjvakldnvldnvjnedvdnehidkjnvfhjdedibnebhvmhbnkdbvmjkdsrhgfujdhnjruihfugdhu</p></div> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';

let nameVisible = ref(false);
// import { ElIcon } from 'element-plus';
// import axios from 'axios';
// import textme from '@/components/common/textme.vue';
// let res = ref(2);

// function handleClick() {
//   axios.get('/usermessage').then((res) => {
//     console.log(res);
//   });
// }
</script>

<style>
.main-content {
  height: 80px;
  display: flex;
  align-items: center;
}
.home-img {
  height: 40px;
  width: 40px;
  margin-left: 20px;
  margin-right: 10px;
}
.left-bar {
  width: 300px;
  background-color: bisque;
  height: 100%;
}
.main {
  border-top: 20px;
}
.pic {
  margin-top: 50px;
}

.seft {
  width: 500px;
  background-color: pink;
  height: 500px;
}

.seft p {
  width: 100%;
  overflow: hidden;
  /* text-overflow: ellipsis;  */
}

.centered-hr {
  width: 95%;
  margin: 0 auto;
  color: #987cb9;
  size: 3;
}

.content {
  margin-top: 20px;
  text-align: center;
}
.name {
  height: 50px;
  position: relative;
}
.name-2 {
  position: absolute;
  bottom: 100%;
  height: 15px;
  left: 50%;
  transform: translateX(-50%);
  /* transform: translateY(-50%); */
  /* background-color: #fff; */
}
</style>
