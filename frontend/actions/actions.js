import * as actions from './action-types.js';

import { get, post } from '../requests';

const BASE_URL = '';

export function createUser(data) {
  // Send a POST request
  const promise = get(`${BASE_URL}/users/`);
  // const promise = axios.post(`${BASE_URL}/users/`, data);
  return {
    type: actions.CREATE_USER,
    payload: promise,
  }
}

export function login(data) {
  // Send a POST request
  const promise = post(`${BASE_URL}/auth/`, data);
  // const promise = axios.post(`${BASE_URL}/users/`, data);
  return {
    type: actions.LOGIN,
    payload: promise,
  }
}
