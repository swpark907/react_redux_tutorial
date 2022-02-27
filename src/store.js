import { createStore } from "redux";

export default createStore(function(state, action){
<<<<<<< HEAD
  console.log('reduer activated')
  if(state === undefined){
    return {
      size: 0,
    }
  }
=======
>>>>>>> 125a5e8c856432e40f07cdbd0c09eddb99a93593
  return state;
})