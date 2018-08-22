import { SEARCH } from '../constants/action-types';

const intialState = {
  search: ''
};

const rootReducer = (state = intialState, action) => {
  switch(action.type) {
    case SEARCH:
      return {...state, search: action.payload};
    default:
      return state;
  }
};

export default rootReducer;
