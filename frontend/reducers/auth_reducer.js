import Cookies from 'js-cookie';

import * as actions from '../actions/action_types';


let initialState = {};

export default function(state = initialState, action) {
  let newState;
  switch(action.type) {
    case actions.LOGIN:
      if(action.error) {
        alert('Sorry, an error has occured');
        return state;
      }
      Cookies.set('jwt', action.payload.data.access_token);
      newState = {
        token: action.payload.data.access_token,
      }
      return newState;
      break;
    case actions.GET_USER_DETAILS:
      if(action.error) {
        alert('Sorry, an error has occured');
        return state;
      }
      newState = {};
      newState.username = action.payload.data.username;
      newState.token = Cookies.get('jwt');

      return newState;
      break;
    case actions.LOGOUT:
      if(action.error) {
        alert('Sorry, an error has occured');
        return state;
      }
      Cookies.remove('jwt');
      return {};
      break;
    default:
      return state;
  }
}
