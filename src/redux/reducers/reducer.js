import { SEARCH } from '../constants/action-types';

const intialState = {
  search: ''
};

const rootReducer = (state = intialState, action) => {
  const newState = { ...state };
  if (action.type === SEARCH) {
    newState.search = action.payload;
  }
  return newState;
};

export default rootReducer;
