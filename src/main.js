import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router/index'
import store from './store/index'
import '@/styles/index.scss'
import  ElMessage from 'element-plus';
// Using ES6 import syntax
import 'highlight.js/styles/atom-one-dark.css'
import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';
import java from 'highlight.js/lib/languages/java';
import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage('python', python);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('java', java);
// import ElementPlus from 'element-plus'
const app = createApp(App)

axios.defaults.baseURL='http://localhost:8080'
app.config.globalProperties.$http = axios
app.config.globalProperties.$message = ElMessage;
app.use(router)
app.use(hljsVuePlugin)
app.use(store)


// app.use(ElementPlus)
app.mount('#app')