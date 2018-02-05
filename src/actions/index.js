import axios from 'axios';

const API_KEY="2f57b636e10b12fddab1995a38944cd5";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${ API_KEY}`;

//set up single source of action type, and will be use in both action and reducer, easier for debug if there's typo
export const FETCH_WT = "FETCH_WT";

export function fetchwt(ct){
  const url=`${ROOT_URL}&q=${ct},us`;

  const request=axios.get(url);

  //console.log('request:', request);

  //return action as the object, use {}, not()
  return{
    type: FETCH_WT,
    payload: request
  };
}
