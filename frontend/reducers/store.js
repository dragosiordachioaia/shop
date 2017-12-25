import { combineReducers as assembleState} from 'redux';

import demo from './demo_reducer';
import users from './users_reducer';
import auth from './auth_reducer';

export default assembleState({
  demo,
  users,
  auth,
});