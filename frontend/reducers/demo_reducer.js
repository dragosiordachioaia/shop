import * as actions from '../actions/action-types';

export default function(state = {}, action) {
  let newState;
  switch(action.type) {
    case actions.DEMO_ACTION:
      if(action.error) {
        alert('Sorry, an error has occured');
        return state;
      }
      newState =  Object.create(state, {});
      newState = action.payload.data;
      return newState;
    default:
      return state;
  }
}
