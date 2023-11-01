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
      <div class="con_wrap">
        <div class="tit_wrap">
          <h1 style="font-weight: bold">Skill Sets</h1>
          <div class="scissors" style="border-top: 1px dashed orange"></div>
          <!-- <h2>长年累月后,精进又向前。唯有勤学练,擅长最优先。</h2> -->
        </div>
        <div class="skill_con">
          <div class="canvas_wrap">
            <div class="canvas_con">
              <div class="txt">Language:</div>
              <div class="text_con">
                <el-button type="success" round>Python</el-button>
                <el-button type="success" round>Java</el-button>
                <el-button type="success" round>Vue</el-button>
                <el-button type="warning" round>HTML</el-button>
                <el-button type="warning" round>CSS</el-button>
                <el-button type="info" round>JavaScript</el-button>
              </div>
            </div>
            <div class="canvas_con">
              <div class="txt">Frameworks:</div>
              <div class="text_con">
                <el-button type="success" round>Django</el-button>
                <el-button type="success" round>Flask</el-button>
                <el-button type="success" round>Vue/cli</el-button>
                <el-button type="warning" round>Maven</el-button>
                <el-button type="warning" round>Spring Boot</el-button>
                <el-button type="info" round>Spring Cloud</el-button>
                <el-button type="info" round>Redit</el-button>
              </div>
            </div>
            <div class="canvas_con">
              <div class="txt">Others:</div>
              <div class="text_con">
                <el-button type="success" round>Node</el-button>
                <el-button type="success" round>MySQL</el-button>
                <el-button type="warning" round>ES6</el-button>
                <el-button type="warning" round>XML</el-button>
                <el-button type="warning" round>MyBatis</el-button>
                <el-button type="warning" round>RESTful API</el-button>
                <el-button type="info" round>Linux</el-button>
              </div>
            </div>
          </div>
          <div class="text_wrap">
            <p>
              1. Proficient in using the Java language, capable of skillfully applying Object-Oriented Programming (OOP) concepts to design project structures. Well-versed in setting up Spring Boot
              projects with Maven repository management.
            </p>
            <p>2. Excellent in Python language and backend development for projects based on Flask and Django.</p>
            <p>3. Proficient in frontend interface development and design, capable of using ES6 syntax and Vue 3 technology to complete frontend projects.</p>
            <p>4. Skilled in database-related knowledge, using MySQL, MyBatis, and MybatisPlus to provide backend applications with database CRUD operations.</p>
            <p>5. Familiar with server deployment operations on Linux servers, capable of completing project deployments.</p>
            <p>6. Studying knowledge related to Spring Cloud and Redis caching, and learning in the context of large-scale Java projects.</p>
            <p>7. Currently learning to develop a backend project using both Python and Java, aiming to create a speech model system based on VITS (Variational Inference Text-to-Speech).</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
  <transition v-show="page3" class="con_wrap" name="page-change">
    <div class="con_wrap">
      <div class="tit_wrap">
        <h1 style="font-weight: bold">Education</h1>
        <div class="scissors" style="border-top: 1px dashed orange"></div>
        <!-- <h2>长年累月后,精进又向前。唯有勤学练,擅长最优先。</h2> -->
      </div>
      <div class="work_con">
        <div class="programe">
          <div style="float: left" class="ll">
            <div class="work_icon">
              <img src="@/img/neu.jpeg" alt="" />
            </div>
            <div class="work_time">
              <dashedThin>
                <div class="school">
                  Northeastern <br />
                  Universiy
                </div>
              </dashedThin>
            </div>
          </div>
          <div class="work_text">
            <div class="triangle-left"></div>
            <div class="exCon">
              <h4>Sep 2023 - May 2025 Expected</h4>
              <div style="height: 5px"></div>
              <p>Related courses：</p>
              <p>大学四年时间完成了所有的学业，并参与了很多项目研发工作，配合老师和同学攻关了很多难题。</p>
              <p>1.掌握了办公五剑客，Word，PPT，excel，ps，viso。</p>
              <p>2.掌握了C#和java的前后端开发，数据库基本应用。</p>
            </div>
          </div>
        </div>
        <div class="clear"></div>
        <div class="programe">
          <div style="float: left" class="ll">
            <div class="work_icon">
              <img src="@/img/hqu.jpeg" alt="" />
            </div>
            <div class="work_time">
              <dashedThin>
                <div class="school">
                  HuaQiao <br />
                  Universiy
                </div>
              </dashedThin>
            </div>
          </div>
          <div class="work_text">
            <div class="triangle-left"></div>
            <div class="exCon">
              <h4>Sep 2019 - April 2023</h4>
              <div style="height: 5px"></div>
              <p>学习技能：</p>
              <p>参加了一年的JAVA培训班，跟着老师一起做了多个项目。积累了很多经验，有了很多经历。</p>
              <p>1.掌握了springboot框架下的api开发，并开发了自己的一套数据接口。</p>
              <p>2.掌握了ssm框架下的前后端开发，并开发了自己的博客。</p>
            </div>
          </div>
        </div>
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
.txt {
  padding-bottom: 15px;
  font-size: 25px;
  float: left;
}
.canvas_con {
  margin-bottom: 40px;
}
.text_wrap {
  float: left;
}
.text_wrap p {
  margin-top: 13px;
}

.work_icon {
  width: 100px;
  height: 100px;
  margin-top: 10px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  /* 注意：为了使上述代码工作，.ll 必须有一个设定的宽度 */
}

.ll {
  width: 140px;
  text-align: center;
  height: 100%;
}
.exCon {
  margin-top: 10px;
}

.work_time {
  width: 100%;
  text-align: center;
}
.clear {
  clear: both;
}

.work_text {
  height: 160px;
}
.triangle-left {
  width: 3px;
  float: left;
  height: 140%;
  margin-left: 80px;
  margin-right: 80px;
  background: #e7e7e7; /*背景色为浅灰色*/
}

img {
  width: 100%;
  height: 100%;
}

.school {
  font-size: 14px;
}
</style>
