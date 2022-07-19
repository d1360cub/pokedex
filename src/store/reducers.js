const initialState = {
  pokemon: {},
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case 'RENDER_POKEMON':
      return {
        ...state,
        pokemon: action.payload,
      };
    default:
      return state;
  }
}

export default reducers;
