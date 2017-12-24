import * as actions from './action-types.js';

import axios from 'axios';

const BASE_URL = '';

export function demoAction() {
  const promise = axios.get(`${BASE_URL}/demo_content/`);
  return {
    type: actions.DEMO_ACTION,
    payload: promise,
  }
}

export function createUser(data) {
  const promise = axios.post(`${BASE_URL}/users/`, data);
  return {
    type: actions.CREATE_USER,
    payload: promise,
  }
}
