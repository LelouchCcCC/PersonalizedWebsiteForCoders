import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router/index'
import store from './store/index'
import '@/styles/index.scss'
import  ElMessage from 'element-plus';
// import ElementPlus from 'element-plus'
const app = createApp(App)

axios.defaults.baseURL='http://localhost:8080'
app.config.globalProperties.$http = axios
app.config.globalProperties.$message = ElMessage;
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')