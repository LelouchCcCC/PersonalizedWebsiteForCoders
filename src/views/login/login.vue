<script setup>
let form = ref({
  username: '',
  password: '',
});
function zhanshi() {
  console.log(this.form.username);
  console.log(this.form.password);
}
import { login } from '../../network/axios';

function userLogin(form) {
  login(form).then((res) => {
    console.log(res);
    let token = res.data;
    console.log(token);
    localStorage.setItem('token', token);
  });
}
</script>
<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="header">Login</div>
      <div class="form-wrapper">
        <input v-model="form.username" type="text" name="username" placeholder="username" class="input-item" />
        <input v-model="form.password" type="password" name="password" placeholder="password" class="input-item" />
        <div class="btn2" @click="userLogin(form)">Login</div>
      </div>
      <div class="msg">
        Don't have account?
        <a @click="zhanshi()">Sign up</a>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  height: 100%;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
}
.login-wrapper {
  background-color: #fff;
  width: 358px;
  height: 588px;
  border-radius: 15px;
  padding: 0 50px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.header {
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  line-height: 200px;
}
.input-item {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: 0;
  padding: 10px;
  border-bottom: 1px solid rgb(128, 125, 125);
  font-size: 15px;
  outline: none;
}
.input-item:placeholder {
  text-transform: uppercase;
}
.btn2 {
  text-align: center;
  padding: 10px;
  width: 100%;
  margin-top: 40px;
  background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
  color: #fff;
}
.btn2:hover {
  cursor: pointer;
}
.msg {
  text-align: center;
  line-height: 88px;
}
.msg a {
  text-decoration-line: none;
  color: #abc1ee;
}
</style>
