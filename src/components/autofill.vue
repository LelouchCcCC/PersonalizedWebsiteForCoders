<template>
  <div>
    <el-row class="demo-autocomplete">
      <el-col>
        <el-autocomplete
          v-model="state"
          class="inline-input"
          :fetch-suggestions="querySearch"
          placeholder="input the technology stack"
          :trigger-on-focus="false"
          @select="handleSelect"></el-autocomplete>
      </el-col>
    </el-row>
    <div class="im">
      <img src="@/img/remove.photos-removed-background (1).png" alt="" @click="add()" />
    </div>
    <div>
      <el-tag v-for="tag in tags" :key="tag" closable type="success" :disable-transitions="false" @close="handleClose(tag)">
        {{ tag }}
      </el-tag>
    </div>
  </div>
</template>
<script>
import { suggestion } from '@/network/axios.js';
export default {
  name: 'Suggestion',
  emits: ['update:tags'],
  data() {
    return {
      stack: [],
      state: '',
      tags: [],
    };
  },
  methods: {
    handleClose(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
      this.$emit('update:tags', this.tags);
    },
    querySearch(queryString, cb) {
      // 调用 callback 返回建议列表的数据
      suggestion(queryString).then((res) => {
        if (res.data.length > 0) {
          cb(res.data);
        } else {
          cb([]);
        }
      });
    },
    handleSelect(item) {
      const tagsSet = new Set(this.tags.concat(item.value));

      this.tags = Array.from(tagsSet);
      this.state = '';
      this.$emit('update:tags', this.tags);
    },
    add() {
      if (this.state == '') return;
      const tagsSet = new Set(this.tags.concat(this.state));
      this.tags = Array.from(tagsSet);
      this.state = '';
      this.$emit('update:tags', this.tags);
    },
  },
};
</script>

<style>
.demo-autocomplete {
  float: left;
}
.im {
  text-align: center;
  float: left;
}
.im img {
  width: 40px;
  height: auto;
  cursor: pointer;
}
</style>
