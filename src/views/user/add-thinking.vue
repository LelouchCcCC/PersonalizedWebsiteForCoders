<template>
  <div class="co">
    <div class="neirong">
      <el-form ref="form" label-position="top" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="url link" prop="url">
          <el-input v-model="form.url"></el-input>
        </el-form-item>
        <el-form-item label="heading" prop="heading">
          <el-input v-model="form.heading"></el-input>
        </el-form-item>
        <el-form-item label="summary" prop="summary">
          <el-input v-model="form.summary"></el-input>
        </el-form-item>
        <el-form-item label="technology stack" arop="stack" style="float: left">
          <Suggestion @update:tags="updateItems"></Suggestion>
        </el-form-item>
        <el-form-item label=" leetcode No." prop="number" style="float: left">
          <el-input v-model="form.number"></el-input>
        </el-form-item>
        <el-form-item label="technology stack" prop="lan" style="float: right">
          <el-select v-model="form.lan" placeholder="please choose programme">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
        </el-form-item>
        <div style="clear: both"></div>
        <el-form-item label="code" prop="code">
          <el-input v-model="form.code" type="textarea" size="large"></el-input>
        </el-form-item>
        <el-form-item label="content" prop="content">
          <el-input v-model="form.content" type="textarea" size="large"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"> Submit </el-button>
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
// import { ElMessage, ElNotification } from 'element-plus';
export default {
  components: {
    Suggestion,
  },
  data() {
    return {
      rules: {
        url: [{ required: true, message: 'Please input url', trigger: 'blur' }],
        heading: [{ required: true, message: 'Please input heading', trigger: 'blur' }],
        code: [{ required: true, message: 'Please enter code', trigger: 'blur' }],
        lan: [{ required: true, message: 'Please choose programme', trigger: 'blur' }],
        content: [{ required: true, message: 'Please input content', trigger: 'blur' }],
        summary: [{ required: true, message: 'Please input summary', trigger: 'blur' }],
        stack: [{ required: true, message: 'Please input the technology stack', trigger: 'blur' }],
      },
      form: {
        url: '',
        content: '',
        heading: '',
        number: '',
        code: '',
        lan: '',
        summary: '',
        // tech: [],
      },
      items: [],
      options: [
        {
          value: 'python',
          label: 'python',
        },
        {
          value: 'java',
          label: 'java',
        },
        {
          value: 'javascript',
          label: 'javascript',
        },
      ],
    };
  },
  created() {
    this.checkToken();
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      let token = localStorage.getItem('token');
      handleThinking(token, this.form, this.items)
        .then((res) => {
          console.log('good');
          console.log(res);
          ElMessage({ message: 'submit successfully', type: 'success' });
        })
        .catch(() => {
          ElMessage({ message: 'submit sfailed', type: 'warning' });
        });
    },
    submitForm() {
      if (this.form.url == '' || this.form.code == '' || this.form.content == '' || this.form.heading == '' || this.form.lan == '' || this.form.number == '' || this.form.summary == '') {
        ElMessage({ message: 'there is still blank', type: 'warning' });
      } else {
        this.onSubmit();
      }
    },
    logOut() {
      console.log('loggoingout~~~');
      localStorage.removeItem('token');
      console.log('当前环境:', process.env.NODE_ENV);
      this.$router.push('/login');
      ElNotification({
        title: 'Success',
        message: 'Log out successfully',
        type: 'success',
      });
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
      console.log(typeof this.items);
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
