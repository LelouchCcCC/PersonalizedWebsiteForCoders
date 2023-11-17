

<template>
  <div class="co">
    <div class="neirong">
      <el-form ref="form" label-position="top" :model="form" label-width="80px">
        <el-form-item label="url link">
          <el-input v-model="form.url"></el-input>
        </el-form-item>
        <el-form-item label="summary">
          <el-input v-model="form.summary"></el-input>
        </el-form-item>
        <el-form-item label="code">
          <el-input v-model="form.code" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="comment">
          <el-input v-model="form.desc" type="textarea"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Submit</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { handleThinking } from '../../network/axios';
export default {
  data() {
    return {
      form: {
        url: '',
        content: '',
        code: '',
        summary: '',
        tech: [],
      },
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      let token = localStorage.getItem('token');
      handleThinking(token).then((res)=>{
        console.log("good");
      })
    },
  },
};
</script>
<style>
.co {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
  background-attachment: fixed; /* 固定背景 */
  overflow-y: auto; /* 允许整个 .co 滚动 */
  padding-top: 75px;
}

.neirong {
  background-color: #fff;
  width: 800px;
  /* overflow-y: hidden; 隐藏滚动条 */
  border-radius: 15px;
  padding: 0 50px;
  position: relative;
  padding-top: 35px;
  padding-bottom: 50px;
  left: 25%;
  box-sizing: border-box;
}

.neirong label {
  font-size: 16px;
}
</style>
