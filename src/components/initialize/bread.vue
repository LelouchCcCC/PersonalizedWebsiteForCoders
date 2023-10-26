<script setup>
import textme from '@/components/common/textme.vue';
import direct from '@/components/common/direct.vue';
import dashedThin from '@/components/common/dashed-thin.vue';
</script>
<template>
  <div id="bread-box">
    <div id="first-img">
      <img src="@/img/myPhoto2.png" />
    </div>
    <div id="first-text-box">
      <!-- <h1>Hello, nice to meet you</h1> -->
      <textme class="welcome"
        ><p>Hello, My name is Yuhan Zhang</p>
        <br style="height: 5px" />
        <p>Welcome to my website!</p>
      </textme>
      <p style="margin-bottom: 20px"></p>
      <div class="intro">
        <dashedThin class="introo">
          <p><strong>A passionate software engineer student</strong></p></dashedThin
        >
        <dashedThin class="introo">
          <p><strong>Driven by an unquenchable thirst for knowledge</strong></p>
        </dashedThin>
        <dashedThin class="introo">
          <p><strong>Embarking on an infinite journey of innovation</strong></p></dashedThin
        >
        <dashedThin class="introo">
          <p><strong>Exploring the boundless horizons of technology</strong></p></dashedThin
        >
      </div>
      <div>
        <direct style="min-width: 160px; margin-left: 10px"><router-link to="test">MyHome</router-link></direct>
        <direct style="min-width: 160px; margin-left: 10px"><a href="https://github.com/LelouchCcCC">GitHub</a></direct>
        <direct style="min-width: 160px; margin-left: 10px"><a href="https://www.linkedin.com/in/yuhan-zhang-05896a286/">LinedIn</a></direct>
        <direct style="min-width: 160px; margin-left: 10px"><a href="https://leetcode.cn/u/elastic-kovvalevskismn/">LeetCode</a></direct>
      </div>
    </div>
  </div>
</template>

<style>
#bread-box {
  width: 1057px;
  height: 600px;
  background-color: #375462;
  opacity: 0.6;
  border-radius: 5%;
}

#first-img {
  float: left;
  width: 357px;
  height: 600px;
  border-radius: 5%;
}

#first-img img {
  width: 100%;
  height: 100%;
  border-radius: 6% 0 0 6%;
}

#first-text-box {
  float: left;
  width: 700px;
  height: 100%;
  background-color: #375462;
  border-radius: 0 6% 6% 0;
}

.welcome {
  height: auto;
  text-align: center;
  margin-top: 15px;
  /* justify-content: center; */
  /* color: #f2f2f2; */
}

.welcome p {
  /* justify-content: center; */
  color: #f1f1f1;
}

.intro {
  margin: 0;
}
.intro .introo {
  margin-bottom: 15px;
}
.intro .introo p {
  font-family: 'Helvetica Neue';

  font-size: 22px;
  color: #fff;
}
.dashed thin {
  width: 100%;
}
</style>
