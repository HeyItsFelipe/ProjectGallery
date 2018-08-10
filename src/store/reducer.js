const intialState = {
  search: ''
};

const reducer = (state = intialState, action) => {
  const newState = { ...state };
  if (action.type === 'SEARCH') {
    newState.search = action.payload;
  }
  return newState;
};

export default reducer;
