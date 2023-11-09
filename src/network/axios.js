import axios from 'axios';
import textme from '@/components/common/textme.vue';
let res = ref(2);

export function handleClick() {
  axios.get('/usermessage').then((res) => {
    console.log(res);
  });
}

export function handleThinking(){
  console.log("handleThinking now~~~");
  axios.post('userthinking').then((res)=>{
    console.log(res);
  })
}