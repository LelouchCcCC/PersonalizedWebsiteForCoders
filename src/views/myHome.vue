<template>
  <!-- <button @click="handleClick">click</button>
  <h1>{{ res }}</h1> -->
  <!-- <textme /> -->
  <div id="whole">
    <navBar></navBar>
    <router-view></router-view>
    <!-- <content1></content1> -->
    <!-- <div class="left-bar">
      <div class="main">
        <div class="main-content">
          <img class="home-img" src="home1.png" alt="" />
          <h2 style="color: limegreen">Yuhan's Website</h2>
        </div>
        <hr class="centered-hr" color="#987cb9" SIZE="3" />
      </div>
      <div class="content">
        <div class="name">
          <h2 @mouseover="nameVisible = true" @mouseleave="nameVisible = false">Yuhan Zhang</h2>
          <div>
            <div v-show="nameVisible" class="name-2">张聿涵</div>
          </div>
        </div>
        <hr class="centered-hr2" width="80%" color="#987cb9" SIZE="3" />
        <ul>
          <li style="margin-top: 15px"><p style="text-decoration: underline">Mar 8th 2001</p></li>
          <li style="margin-top: 15px"><p style="text-decoration: underline">Northeastern University</p></li>
          <li style="margin-top: 15px"><p style="text-decoration: underline">(617)936-9736</p></li>
          <li style="margin-top: 15px"><p style="text-decoration: underline">+86 18951613615</p></li>
        </ul>
        <div class="github-link">
          <a href="http://www.github.com/LelouchCcCC">
            <el-card style="text-align: center">
              <div>
                <img style="width: 30px; height: 30px; display: inline; margin-right: 10px" src="github-mark.png" alt="" />
                <p style="display: inline-block; font-size: 30px">GitHub</p>
              </div>
            </el-card>
          </a>
        </div>
        <div class="github-link">
          <a href="https://www.linkedin.com/in/yuhan-zhang-05896a286/">
            <el-card style="text-align: center">
              <div>
                <img style="height: 30px; display: inline; margin-right: 10px" src="LinkedIn-Blue-26@2x.png" alt="" />
              </div>
            </el-card>
          </a>
        </div>
        <div class="github-link">
          <a href="https://leetcode.cn/u/elastic-kovvalevskismn/">
            <el-card style="text-align: center">
              <div>
                <img style="height: 30px; display: inline; margin-right: 10px" src="avatar_1517967610.png" alt="" />

                <p style="display: inline-block; font-size: 32px">LeetCode</p>
              </div>
            </el-card>
          </a>
        </div>
      </div>
      <div class="pic"></div>
    </div> -->
  </div>
</template>

<script setup>
// import { ref } from 'vue';
import navBar from './nav-bar.vue';
// import content1 from './home/content-1.vue';
// let nameVisible = ref(false);
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
#whole {
  width: 100%;
  height: 100%;
  /* background: url('cool-background.png'); */
  /* background: linear-gradient(45deg, #34495e, #67809f); */
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
}
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
  /* background-color: bisque; */
  height: 100%;
  background: rgba(40, 142, 120, 0.3); /* 不透明度为 30% 的绿色背景 */
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

.centered-hr2 {
  width: 80%;
  margin: 0 auto;
  color: #987cb9;
  size: 3;
}
</style>
