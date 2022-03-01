

export const increaseCount = count => ({type: 'INCREASE', count});

const initialState = {
  count: 0,
};

const counter = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREASE':
      return {
        ...state,
        count: action.count
      }

      default:
        return state;
  }
}

export default counter;