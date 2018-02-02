import { combineReducers } from 'redux';
import WtReducer from './reducer_wt';

const rootReducer = combineReducers({
  wt: WtReducer
});

export default rootReducer;
