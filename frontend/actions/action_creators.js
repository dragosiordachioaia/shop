import Cookies from 'js-cookie';

import * as actions from './action_types.js';

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
  const promise = post(`${BASE_URL}/auth/`, data);
  return {
    type: actions.LOGIN,
    payload: promise,
  }
}

export function logout() {
  const promise = post(`${BASE_URL}/logout/`, {token: Cookies.get('jwt')});
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
