<script setup>
import { fetchthinking, fetchtech } from '@/network/axios.js';
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
const dt = ref([]);
const showDetails = (id) => {
  display.value = id;
  fetchtech(id).then((res) => {
    dt.value = res.data;
  });
};
let isCopy = ref(false);
let canCopy = computed(() => {
  isCopy.value = !isCopy.value;
});
</script>
<template>
  <div style="margin-top: 15px">
    <div class="block">
      <el-timeline>
        <el-timeline-item v-for="think in data" :key="think.id" :timestamp="formattedDateTime(think.date)" placement="top" @click="showDetails(think.id)">
          <el-card style="cursor: pointer">
            <h4>{{ think.heading }}</h4>
            <!-- <p>{{ formattedDateTime(think.date) }}</p> -->
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
    <div class="spl"></div>
    <div v-if="display == -1" class="detail" style="text-align: center">select from left to get the details</div>
    <div v-if="display !== -1" class="detail">
      <div v-for="item in data" :key="item.id">
        <div v-if="item.id === display">
          <div style="height: 25px"></div>
          <h1 style="font-size: 36px; text-align: left; margin-bottom: 15px">{{ item.heading }}</h1>
          <h3>{{ item.summary }}</h3>
          <div style="margin: 25px 0">
            <a :href="item.url" target="_blank">leetcode {{ item.number }}</a>
          </div>
          <div class="tags">
            <el-tag v-for="tag in dt" :key="tag" type="success" class="tag_detail">{{ tag }}</el-tag>
          </div>
          <div class="code-with-lines">
            <div class="line-numbers">
              <span v-for="lineNumber in generateLineNumbers(item.code)" :key="lineNumber" class="line-number">{{ lineNumber }}</span>
            </div>

            <div class="codd">
              <!-- <div>
                <button v-copy="text">copy</button>
              </div> -->
              <highlightjs :language="item.lan" :code="item.code" @mouseenter="canCopy()" @mouseleave="canCopy()" />
            </div>
          </div>
          <div class="content2">
            <div style="white-space: pre-wrap">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.block {
  float: left;
  width: 340px;
  height: calc(100vh - 85px);
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
  top: 85px;
  bottom: 15px;
  left: calc(340px);
  width: 2px;
  background-color: #000;
  opacity: 0.5;
}

.detail {
  float: left;
  width: calc(100% - 442px);
  height: calc(100vh - 85px);
  overflow-y: auto;
  padding-left: 100px;
}

.detail button {
  display: none;
}

.detail:hover button {
  display: block;
}

.code-with-lines {
  display: flex;
}

.line-numbers {
  text-align: right;
  padding-right: 10px;
  user-select: none;
  padding-top: 16px;
  font-size: 16px;
  border-right: 1px solid white;
  background-color: #282c34;
  color: aliceblue;
  padding-right: 0;
  margin-right: 0;

  width: 2em;
}

.line-number {
  display: block;
  margin-right: 3px;
  padding: 0;
}

.highlightjs {
  flex-grow: 1;
}

code {
  width: 100vh;
}

.content2 {
  margin-top: 25px;
  font-size: 18px;
  line-height: 2;
}

.tag_detail {
  margin-right: 20px;
  font-size: 16px;
}

.tags {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
