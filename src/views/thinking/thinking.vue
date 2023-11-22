<script setup>
import { fetchthinking } from '@/network/axios.js';
let data = ref([]);
fetchthinking('Yuhan Zhang').then((res) => {
  data.value = res.data;
  console.log(data.value);
});
let display = ref(-1);
// const formattedDateOnly = (dateString) => {
//   const date = new Date(dateString);
//   return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
// };
const generateLineNumbers = (code) => {
  return code.split('\n').map((_, index) => index + 1);
};

const formattedDateTime = (dateString) => {
  let date = new Date(dateString);
  let year = date.getFullYear();
  let month = String(date.getMonth() + 1).padStart(2, '0');
  let day = String(date.getDate()).padStart(2, '0');
  let hours = String(date.getHours()).padStart(2, '0');
  let minutes = String(date.getMinutes()).padStart(2, '0');
  let seconds = String(date.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
const showDetails = (id) => {
  display.value = id;
};
</script>
<template>
  <div style="margin-top: 15px">
    <div class="block">
      <el-timeline>
        <el-timeline-item v-for="think in data" :key="think.id" :timestamp="formattedDateTime(think.date)" placement="top" @click="showDetails(think.id)">
          <el-card style="cursor: pointer">
            <h4>{{ think.summary }}</h4>
            <!-- <p>{{ formattedDateTime(think.date) }}</p> -->
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
    <div class="spl"></div>
    <div v-if="display !== -1" class="detail">
      <div v-for="item in data" :key="item.id">
        <div v-if="item.id === display">
          <p>{{ item.summary }}</p>
          <div class="code-with-lines">
            <div class="line-numbers">
              <span v-for="lineNumber in generateLineNumbers(item.code)" :key="lineNumber" class="line-number">{{ lineNumber }}</span>
            </div>
            <div>
              <highlightjs language="java" :code="item.code" />
            </div>
          </div>
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.block {
  float: left;
  width: 340px;
  height: calc(100vh - 85px); /* 假设头部导航栏高度为85px */
  overflow-y: auto;
}

.block h4 {
  width: 200px;
}

.block .el-timeline-item__content {
  width: 250px;
}

.spl {
  position: fixed;
  top: 85px; /* 从导航栏结束后30px的位置开始 */
  bottom: 15px; /* 到底部30px的位置结束 */
  left: calc(340px); /* 假设导航栏宽度是300px，那么分隔线应该从300px+30px的位置开始 */
  width: 2px; /* 分隔线的宽度 */
  background-color: #000; /* 分隔线的颜色 */
  opacity: 0.5;
}

.detail {
  float: left;
  width: calc(100% - 432px);
  height: calc(100vh - 85px);
  overflow-y: auto;
  margin-left: 30px;
}

.code-with-lines {
  display: flex;
}

.line-numbers {
  text-align: right;
  padding-right: 10px; /* 为行号和代码之间提供一些空间 */
  user-select: none; /* 防止行号被选中复制 */
  padding-top: 16px;
  font-size: 16px;
  border-right: 1px solid white;
  background-color: #282c34;
  color: aliceblue;
  padding-right: 0; /* 右内边距设置为0 */
  margin-right: 0; /* 右外边距设置为0 */
  /* 确保容器宽度足够容纳最长的行号 */
  width: 2em; /* 根据你的行号长度可能需要调整 */
}

.line-number {
  display: block; /* 使每个行号单独一行 */
  margin-right: 3px;
  padding: 0;
}

/* 调整highlight.js代码块的样式 */
.highlightjs {
  flex-grow: 1;
}
</style>
