import constants from '../actions/spaceX.constants';

const initialState = {
  data: [],
  filters: {},
};

function spaceXReducer(state = initialState, action) {
  switch (action.type) {
    case constants.SPACEX_APPLY_FILTER: return {
      ...state,
      filters: {
        ...state.filters,
        [action.payload.name]: action.payload.value,
      },
    };
    case constants.SPACEX_SET_DATA: return {
      ...state,
      data: action.payload,
    };
    default: return state;
  }
}

export default spaceXReducer;
