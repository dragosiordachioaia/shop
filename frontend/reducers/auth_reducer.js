import Cookies from 'js-cookie';

import * as actions from '../actions/action-types';


let initialState = {};

export default function(state = initialState, action) {
  let newState;
  switch(action.type) {
    case actions.LOGIN:
      console.log('actions.LOGIN action = ', action);
      if(action.error) {
        alert('Sorry, an error has occured');
        return state;
      }
      Cookies.set('jwt', action.payload.data.access_token);
      newState = {
        token: action.payload.data.access_token,
      }
    default:
      return state;
  }
}
