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
        <el-form-item label="technology stack">
          <Suggestion @update:tags="updateItems"></Suggestion>
        </el-form-item>
        <el-form-item label="code">
          <el-input v-model="form.code" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="content">
          <el-input v-model="form.content" type="textarea"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Submit</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
  <div class="logout">
    <img src="@/img/log-out.png" alt="" @click="logOut()" />
  </div>
</template>

<script>
import { handleThinking } from '../../network/axios';
import Suggestion from '@/components/autofill.vue';
export default {
  components: {
    Suggestion,
  },
  data() {
    return {
      form: {
        url: '',
        content: '',
        code: '',
        summary: '',
        // tech: [],
      },
      items: [],
    };
  },
  created() {
    this.checkToken();
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      let token = localStorage.getItem('token');
      handleThinking(token, this.form).then((res) => {
        console.log('good');
        console.log(res);
      });
    },
    logOut() {
      console.log('loggoingout~~~');
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
    checkToken() {
      let token = localStorage.getItem('token');
      if (!token) {
        this.$router.push('/login');
      }
    },
    updateItems(tags) {
      this.items = tags; // 更新父组件的items数组
      console.log(this.items);
      console.log('----');
    },
  },
};
</script>
<style>
.co {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
  background-attachment: fixed;
  overflow-y: auto;
  padding-top: 75px;
}

.neirong {
  background-color: #fff;
  width: 800px;

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

.logout {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1000;
}
.logout img {
  width: 40px;
  height: auto;
  cursor: pointer;
}
</style>
