import {FETCH_WT} from '../actions/index';

export default function(state=[], action){
  console.log('Action received', action);
  console.log(FETCH_WT);
  switch(action.type){
    case FETCH_WT:
    //not mutate the state, but return a new state
    //use es6 syntax instead of
    //return state.concat([action.payload.data]);
    return [action.payload.data, ...state];
  }
  return state;
}
