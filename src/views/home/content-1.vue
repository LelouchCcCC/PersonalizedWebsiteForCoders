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
let page = ref(true);
let changePage = () => {
  page.value = false;
};
</script>
<template>
  <div v-show="page" class="con_wrap" name="page1" appear>
    <div class="tit_wrap">
      <h1 style="font-weight: bold">Basic Information</h1>
      <div class="scissors" style="border-top: 1px dashed orange"></div>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp;A graduate student at Northeastern University, with a strong command of Python and its web frameworks, Django and Flask. While my Java skills may be a work in progress,
        I'm dedicated to continuous learning and strive to maintain an unwavering passion for acquiring new knowledge.
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
  <!-- <div class="down_arrow">
    <a class="scroll"><span></span></a>
  </div> -->
  <div class="fix-right">
    <section @click="changePage"><img src="blackRound.svg" alt="" /></section>
    <section><img src="blackRound.svg" alt="" /></section>
    <section><img src="blackRound.svg" alt="" /></section>
    <section><img src="blackRound.svg" alt="" /></section>
  </div>
</template>
<style>
.con_wrap {
  width: 85%;
  margin-left: 7.5%;
  float: left;
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
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

.page1-enter-active {
  animation: page1 0.8s;
}
.page1-leave-active {
  animation: page1 0.8s reverse;
}
@keyframes page1 {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
