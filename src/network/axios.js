import axios from 'axios';
import textme from '@/components/common/textme.vue';
let res = ref(2);

export function handleClick() {
  return axios.get('/usermessage')
}

export function handleThinking(token, data){
  console.log("handleThinking now~~~");
  const config = {
    headers: {
      'Authorization': `Bearer ${token}` // This sets the Authorization header with the token
    }
  };
  return axios.post('userthinking', data, config)
}

export function login(data){
  console.log("login now~~~");
  return axios.post('login', data)
}

export function suggestion(query){
  console.log("finding suggestions now~~");
  let baseURL = 'startsWith';
  let queryString = `?prefix=${encodeURIComponent(query)}`;
  let fullURL = baseURL + queryString;
  return axios.get(fullURL)
}