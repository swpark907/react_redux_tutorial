import { createStore } from "redux";

export default createStore(function(state, action){
  console.log('reduer activated')
  if(state === undefined){
    return {
      size: 0,
    }
  }
  return state;
})