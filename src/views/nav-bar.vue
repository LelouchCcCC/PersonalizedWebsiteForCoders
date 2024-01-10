<script setup>
import direct from '@/components/common/direct.vue';
</script>
<template>
  <div class="nav">
    <router-link to="information"><direct style="min-width: 160px; margin-left: 10px">MyHome</direct></router-link>
    <router-link to="project"><direct style="min-width: 160px; margin-left: 10px">Projects</direct></router-link>
    <router-link to="thinking"><direct style="min-width: 160px; margin-left: 10px">Thinking</direct></router-link>
    <router-link to="resume"><direct style="min-width: 160px; margin-left: 10px">Resume</direct></router-link>
    <div class="right-icon">
      <a href="https://www.linkedin.com/in/yuhan-zhang-05896a286/"><img style="height: 100%; display: inline; margin-right: 20px" src="@/img/linkedin-logo.png" alt="" /></a>
    </div>
    <div class="right-icon">
      <a href="https://leetcode.cn/u/elastic-kovvalevskismn/"><img style="height: 100%; display: inline; margin-right: 20px" src="@/img/github-mark.png" alt="" /></a>
    </div>
    <div class="right-icon">
      <a href="https://www.linkedin.com/in/yuhan-zhang-05896a286/"><img style="padding-top: 3px; height: 110%; display: inline; margin-right: 20px" src="@/img/avatar_1517967610.png" alt="" /></a>
    </div>
  </div>
</template>

<style>
.nav {
  width: 100%;
  height: 70px;
  padding-top: 10px;
  background-color: #cfc2ed;
}
.right-icon {
  float: right;
  width: 50px;
  height: 50px;
  margin-right: 20px;
}

.top-item {
  /* margin: 0 10px; */
  height: 40px;
  float: left;
  border-radius: 25%;
  border: 1px solid black;
  font-size: 30px;
  color: #606266;
  padding: 0px 5px;
}
</style>
