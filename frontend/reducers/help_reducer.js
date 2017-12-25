import * as actions from '../actions/action-types';

export default function(state = "", action) {
  let newState;
  switch(action.type) {
    case actions.GET_HELP:
      if(action.error) {
        if(action.payload.response.status == 401) {
          return 'You are not logged in';
        }
        return state;
      }
      return action.payload.data.help;
    default:
      return state;
  }
}
