import axios from 'axios';
import Cookies from 'js-cookie';
// import isLoggedIn from 'auth';


function getAuthHeader() {
  let headers = {};
  let jwt = Cookies.get('jwt');
  if(jwt) {
    headers['Authorization'] = `JWT ${jwt}`;
  }
  return headers;
}

export function get(url) {
  let headers = getAuthHeader();

  return axios({
    method: 'get',
    url,
    headers,
  });
}

export function post(url, data) {
  let headers = getAuthHeader();

  return axios({
    method: 'post',
    url,
    data,
    headers,
  });
}
