import { combineReducers as assembleState} from 'redux';

import demo from './demo_reducer';
import users from './users_reducer';

export default assembleState({
  demo,
  users,
});