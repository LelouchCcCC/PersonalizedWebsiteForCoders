<script setup></script>
<template>
  <div id="bread-box">
    <div id="first-img">
      <img src="@/img/v2-ed6360a2299dacbba4e62f148c3c5048_r.jpg" />
    </div>
    <div id="first-text-box">
      <h1>Hello, nice to meet you</h1>
    </div>
  </div>
</template>

<style>
#bread-box {
  width: 1000px;
  height: 600px;
  background-color: #f1f1f1;
  opacity: 0.6;
  border-radius: 5%;
}

#first-img {
  float: left;
  width: 300px;
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
  background-color: rgba(54, 167, 163, 0.491);
}
</style>
