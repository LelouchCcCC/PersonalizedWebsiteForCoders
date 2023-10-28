<script setup>
import { ref } from 'vue';

let rotationRadius = ref(0);
onMounted(() => {
  //组件挂载时的生命周期执行的方法
  rotationRadius.value = window.setInterval(function logname() {
    // 其他定时执行的方法
    rotationRadius.value = rotationRadius.value + 1;
  }, 1000);
});
onDeactivated(() => {
  //离开当前组件的生命周期执行的方法
  window.clearInterval(rotationRadius.value);
});
const imageStyle = () => {
  return {
    transform: `rotate(${this.rotationRadius}deg)`,
  };
};
let page1 = ref(true);
let page2 = ref(false);
let page3 = ref(false);
let page4 = ref(false);
let changePage1 = () => {
  page1.value = true;
  page2.value = false;
  page3.value = false;
  page4.value = false;
};
let changePage2 = () => {
  page1.value = false;
  page2.value = true;
  page3.value = false;
  page4.value = false;
};
let changePage3 = () => {
  page1.value = false;
  page2.value = false;
  page3.value = true;
  page4.value = false;
};
let changePage4 = () => {
  page1.value = false;
  page2.value = false;
  page3.value = false;
  page4.value = true;
};
</script>
<template>
  <transition v-show="page1" class="con_wrap" name="page-change">
    <div>
      <div class="tit_wrap">
        <h1 style="font-weight: bold">Basic Information</h1>
        <div class="scissors" style="border-top: 1px dashed orange"></div>
        <h2>
          &nbsp;&nbsp;&nbsp;&nbsp;A graduate student at Northeastern University, with a strong command of Python and its web frameworks, Django and Flask. While my Java skills may be a work in
          progress, I'm dedicated to continuous learning and strive to maintain an unwavering passion for acquiring new knowledge.
        </h2>
      </div>
      <div class="myinfo">
        <table>
          <tbody>
            <tr>
              <td rowspan="6" class="ex" :style="imageStyle">
                <img class="round-pic" src="@/img/myPhoto-modified.png" />
              </td>
              <td class="odd">Name | Yuhan Zhang</td>
              <td class="even">Phone | (617)936-9736</td>
            </tr>
            <tr>
              <td class="odd">Gender | Male</td>
              <td class="even">Mail | <a href="mailto:zhang.yuhan8@northeastern.edu">zhang.yuhan8@northeastern.edu</a></td>
            </tr>
            <tr>
              <td class="odd">Birth | 03.08.2001</td>
              <td class="even">Deputy | <a href="mailto:zhang.vi.yuhan@gmail.com">zhang.vi.yuhan@gmail.com</a></td>
            </tr>
            <tr>
              <td class="odd">Living | Boston MA</td>
              <td class="even">School | Northeastern University</td>
            </tr>
            <tr>
              <td class="odd">Degree | Master</td>
              <td class="even">Course | Software Engineering</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </transition>
  <transition v-show="page2" class="con_wrap" name="page-change">
    <div>
      <div class="tit_wrap">
        <h1 style="font-weight: bold">Education</h1>
        <div class="scissors" style="border-top: 1px dashed orange"></div>
      </div>
    </div>
  </transition>
  <!-- <div class="down_arrow">
    <a class="scroll"><span></span></a>
  </div> -->
  <div class="fix-right">
    <section @click="changePage1"><img v-show="!page1" src="blackRound.svg" alt="" /><img v-show="page1" src="orangeRound.svg" alt="" /></section>
    <section @click="changePage2"><img v-show="!page2" src="blackRound.svg" alt="" /><img v-show="page2" src="orangeRound.svg" alt="" /></section>
    <section @click="changePage3"><img v-show="!page3" src="blackRound.svg" alt="" /><img v-show="page3" src="orangeRound.svg" alt="" /></section>
    <section @click="changePage4"><img v-show="!page4" src="blackRound.svg" alt="" /><img v-show="page4" src="orangeRound.svg" alt="" /></section>
  </div>
</template>
<style>
.con_wrap {
  width: 85%;
  /* height: 100%; */
  margin-left: 7.5%;
  float: left;
  /* transition: cubic-bezier(0.175, 0.885, 0.32, 1.275); */
}
.tit_wrap {
  padding-top: 30px;
  text-align: center;
}
.scissors {
  margin: 30px 0;
}
.myinfo {
  margin-top: 30px;
}
.round-pic {
  width: 400px;
}

.odd {
  padding-left: 100px;
  width: 375px;
}

.even {
}

.fix-right {
  height: 200px;
  width: 20px;
  position: fixed;
  right: 5%;
  bottom: 20%;
}
.fix-right section:hover {
  cursor: pointer;
}

.fix-right section img {
  width: 20px;
  margin-bottom: 30px;
}

.page-change-enter-from,
.page-change-leave-to {
  opacity: 0;
}
/* 离开和进入过程中的样式 */
.page-change-enter-active,
.page-change-leave-active {
  /* 添加过渡动画 */
  transition: opacity 0.5s ease;
}
/* 进入之后和离开之前的样式 */
.page-change-enter-to,
.page-change-leave-from {
  opacity: 1;
}
</style>
