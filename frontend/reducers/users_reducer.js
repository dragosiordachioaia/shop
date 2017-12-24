import * as actions from '../actions/action-types';

export default function(state = {}, action) {
  let newState;
  switch(action.type) {
    case actions.CREATE_USER:
      console.log(action);
    default:
      return state;
  }
}
