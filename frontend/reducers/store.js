import { combineReducers as assembleState} from 'redux';

import auth from './auth_reducer';

export default assembleState({
  auth,
});
