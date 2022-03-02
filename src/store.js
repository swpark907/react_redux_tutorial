

export const increaseCount = () => ({type: 'INCREASE'});
export const setDiff = diff => ({type: 'SET_DIFF', diff});

const initialState = {
  number: 0,
  diff: 0,
};

const counter = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREASE':
      return {
        ...state,
        number: state.number + state.diff
      }
    
    case 'SET_DIFF':
      return{
        ...state,
        diff: action.diff
      }

      default:
        return state;
  }
}

export default counter;