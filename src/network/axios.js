import axios from 'axios';
import textme from '@/components/common/textme.vue';
let res = ref(2);

export function handleClick() {
  return axios.get('/usermessage')
}

export function handleThinking(token){
  console.log("handleThinking now~~~");
  const config = {
    headers: {
      'Authorization': `Bearer ${token}` // This sets the Authorization header with the token
    }
  };
  return axios.post('userthinking', null, config)
}

export function login(data){
  console.log("login now~~~");
  return axios.post('login', data)
}
