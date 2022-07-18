const initialState = {
  state: [],
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case 'RENDER_POKEMON':
      return {
        ...state,
        state: action.payload,
      };
    default:
      return state;
  }
}

export default reducers;
