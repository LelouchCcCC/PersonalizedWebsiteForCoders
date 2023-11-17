import axios from 'axios';
import textme from '@/components/common/textme.vue';
let res = ref(2);

export function handleClick() {
  return axios.get('/usermessage')
}

export function handleThinking(){
  console.log("handleThinking now~~~");
  return axios.post('userthinking')
}

export function login(data){
  console.log("login now~~~");
  return axios.post('login', data)
}