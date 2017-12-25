import Cookies from 'js-cookie';

import * as actions from './action-types.js';

import { get, post } from '../requests';

const BASE_URL = '';

export function createUser(data) {
  const promise = get(`${BASE_URL}/users/`);
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

export function getHelp() {
  const promise = get(`${BASE_URL}/help/`);
  return {
    type: actions.GET_HELP,
    payload: promise,
  }
}

export function logout() {
  Cookies.remove('jwt');
  return {
    type: actions.LOGOUT,
    payload: null,
  }
}

export function getUserDetails() {
  const promise = get(`${BASE_URL}/user_details/`);
  return {
    type: actions.GET_USER_DETAILS,
    payload: promise,
  }
}
