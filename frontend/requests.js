import axios from 'axios';



export function get(url) {
  console.log('requests::get() store = ', store);
  return axios({
    method: 'get',
    url,
    headers: {
      'Authorization': 'JWT AAA',
    }
  });
}

export function post(url, data) {
  return axios({
    method: 'post',
    url,
    data,
  });
}
