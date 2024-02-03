import axios from 'axios';
import textme from '@/components/common/textme.vue';

let res = ref(2);

export function handleClick() {
  return axios.get('/usermessage');
}

export function handleThinking(token, data, items) {
  console.log('handleThinking now~~~');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // This sets the Authorization header with the token
    },
  };
  return axios.post(
    'userthinking',
    {
      thinking: data,
      items: items,
    },
    config,
  );
}

export function login(data) {
  console.log('login now~~~');
  return axios.post('login', data);
}

export function suggestion(query) {
  console.log('finding suggestions now~~');
  let baseURL = 'startsWith';
  let queryString = `?prefix=${encodeURIComponent(query)}`;
  let fullURL = baseURL + queryString;
  return axios.get(fullURL);
}

export function fetchthinking(name) {
  console.log('fetch thinking now~~');
  let queryString = `userthinking?name=${name}`;
  return axios.get(queryString);
}

export function fetchtech(thnking_id) {
  console.log('fetch tech now~~');
  let queryString = `stacked?thinking_id=${thnking_id}`;
  return axios.get(queryString);
}

export function fetchLast5Next5Development() {
  return axios.get('last5next5dvlp');
}
